/* eslint-disable no-console */

import { getRandomProject } from './utils';

const apiToken = process.env.TRP_API_TOKEN;
const ignoredProjectIds = (process.env.TRP_IGNORED_PROJECTS || '')
  .split(',')
  .map((v) => parseInt(v, 10))
  .filter((v) => !Number.isNaN(v));

if (apiToken) {
  getRandomProject(apiToken, ignoredProjectIds)
    .then((project) => {
      if (project) {
        console.log(`${project.name} (${project.url})`);
      }
    })
    .catch(console.error);
} else {
  console.error(
    'You need to set the environment variable "TRP_API_TOKEN". See the readme file at https://github.com/lhansford/todoist-random-project for instructions.',
  );
}
