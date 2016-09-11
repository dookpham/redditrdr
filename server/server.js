const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const crypto = require('crypto');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const baseUrl = 'https://www.reddit.com/api/v1/';
const port = process.env.PORT || 65010;
const request = require('request-promise').defaults({json: true});
const expected_redirect_uri = `http://localhost:${port}/authorize_callback`;

// access_token should be stored in sessions;
var access_token;

//this should be in a credentials file in .gitignore
const results = {
  client_id: 'Sjm5Oox_-uXpeA',
  client_secret: 'EA6eldAmn5bCC0b3UK2SW4GMwWI',
}

const getAuthenticationUrl = (state, results) => {
  return `${baseUrl}authorize?${require('querystring').stringify({
    client_id: results.client_id,
    response_type: 'code',
    state,
    redirect_uri: expected_redirect_uri,
    duration: 'permanent',
    scope: 'read subscribe vote wikiread'
  })}`;
}

app.get('/api/subreddit', (req, res) => {
  const query = url.parse(req.url, true).query;

  // console.log('query:', query);
  if (query.string) {
    var uri = `https://oauth.reddit.com/r/${query.string}`;
    if (query.after) {
      uri += `?after=${query.after}`;
    }
    request.get({
      uri: uri,
      headers: {
        'Authorization': `bearer ${access_token}`,
        'User-Agent': 'customUserAgentForWonderWorkshopCodingChallengeGogogo',
      }
    })
    .then(results => {
      // console.log('results:', results);
      res.json(results);
    })
    .catch(err => {
      console.log('error:', err);
    })
  }

});

app.get('/authorize_callback', (req, res) => {
  const query = url.parse(req.url, true).query;

  if (query.code) {
    request.post({
      uri: `${baseUrl}access_token`,
      auth: {user: results.client_id, pass: results.client_secret || ''},
      form: {grant_type: 'authorization_code', code: query.code, redirect_uri: expected_redirect_uri}
    }).then(token_info => {
      // console.log('access_token:', token_info.access_token);
      access_token = token_info.access_token;
      app.use('/', express.static(path.join(__dirname, '../public') ));
      res.sendFile(path.join(__dirname, '../public/index.html'));
    }).catch(err => handleError(res, err, state, results));
  } else if (query.error === 'access_denied') {
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.write('In order to obtain a token, you will need to click "allow" at the reddit authentication screen.');
    res.write(`<br><br>To try again, click <a href=${getAuthenticationUrl(state, results)}>here</a>.`);
    res.end();
  } else {
    handleError(res, {statusCode: 400, statusMessage: 'Failed to parse response from reddit'}, state, results);
  }
});

app.get('/', (req, res) => {
  const state = crypto.randomBytes(16).toString('base64');
  const authenticationUrl = getAuthenticationUrl(state, results);
  res.redirect(authenticationUrl);
});

app.listen(port, () => {
  console.log('==> 🌎 Listening to port:', port);
})
