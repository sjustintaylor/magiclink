# MagicLink

MagicLink is a user authentication microservice built around magic link authentication. It handles the following:
1. Emailing a link using `node-mailer`
2. Convert the link token to an authentication and refresh token pair
3. Delete session, logging the user out.
4. Refresh session with refresh token

Tokens are signed with asymmetric keys, so your api servers can verify an authentication token with the session service's public key. 
After a session is deleted, the refresh user's token will no longer work. 

## Installation

Clone the repo, install dependancies:

```bash
git clone git@github.com:sjustintaylor/magiclink.git
yarn install
```

## Usage

For development purposes:
```bash
yarn start
```

For production, deploy using PM2 or similar. An ecosystem template will be available once the project reachs v1.0.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)