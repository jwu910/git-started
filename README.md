# Git Started

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<hr />
The quick and easy tool to fork and clone a repository to get you started quickly.

## Installation

```
npm install --global git-started
```

or

```
npm i -g git-started
```

Set up [personal access token](https://github.com/settings/tokens/new) with rights to `read:gpg_key, read:org, read:public_key, read:repo_hook, repo, user`.

Set up an environment variable named `GITHUB_TOKEN` where your personall access token will reside.

## Usage

```
git-started --user <github username> [...options]
```

Options:

|    Flag    |  Type  | Description                                                     |
| :--------: | :----: | :-------------------------------------------------------------- |
| -u, --user | String | Github username to query repositories                           |
| -s, --ssh  |  Null  | If true, use ssh url to clone, if false, use https url to clone |

## Contributing

- Fork and clone
- Find an [issue](https://github.com/jwu910/git-started/issues)
  - Check out [good first issue](https://github.com/jwu910/git-started/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+) or [up-for-grabs](https://github.com/jwu910/git-started/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22up-for-grabs%22+) labels
- Use `npm run commit` to start the Commitizen prompt to commit your staged changes.
- Follow [Contributing guidelines](https://github.com/jwu910/git-started/blob/master/CONTRIBUTING.md) to submit pull requests

## Bug reports

Please submit bug reports on our [issues page](https://github.com/jwu910/git-started/issues)
Be clear, be concise. If you have a solution, feel free to send a PR and reference the existing issue. See [Contributing guidelines](https://github.com/jwu910/git-started/blob/master/CONTRIBUTING.md) for more information

## License

[MIT](https://github.com/jwu910/git-started/blob/master/LICENSE)
