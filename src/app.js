import path from 'path';
import program from 'commander';
import prompts from 'prompts';
import updateNotifier from 'update-notifier';

import { cloneRepo } from './api/cloneRepo';
import { forkRepo } from './api/forkRepo';
import { getRepos } from './api/getRepos';
import { truncate } from './util/truncate';

const pkg = require(path.resolve(__dirname, '../package.json'));
const notifier = updateNotifier({ pkg });

if (notifier.update) {
  notifier.notify();
}

export const start = async () => {
  program
    .version(pkg.version, '-v, --version')
    .option('-u, --user <username>', 'Query User')
    .option('-s --ssh', 'Use SSH url to clone')
    .parse(process.argv);

  const username = program.user;

  //TODO: prompt for username if none provided
  if (!username) {
    process.stderr.write(
      `Use option -u or --user to search repositories by Github user
      \nUsage: git-started -u jwu910`.trim(),
    );

    return;
  }

  try {
    const userGraph = await getRepos(username);

    const reposList = userGraph.user.repositories.edges.map(({ node }) => {
      const { id, name, stargazers } = node;

      let { description } = node;

      const termWidth = process.stdout.columns;

      if (description === null) {
        description = 'No Description';
      }

      const limit = termWidth - name.length;

      return {
        title: `${name} - ${stargazers.totalCount} stars - ${truncate(
          description,
          limit - 20,
          '...',
        )}`,
        value: {
          id,
          repo: name,
          owner: username,
        },
      };
    });

    const selection = await prompts({
      type: 'autocomplete',
      name: `repository`,
      message: `Select ${username}'s repository to fork or start typing to search`,
      choices: [...reposList],
    });

    if (!selection.repository) {
      throw new Error('repository not found.');
    }

    const fork = forkRepo(selection);

    cloneRepo(program.ssh ? fork.data.ssh_url : fork.data.clone_url);

    process.stdout.write(`Successfully forked and cloned repo.\n`);
  } catch (err) {
    process.stderr.write(`${err}\n`);
    process.exit(1);
  }
};
