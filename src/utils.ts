const fetch = require('node-fetch');

const API_ENDPOINT = 'https://api.todoist.com/rest/v1/projects';

const getRandomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function getRandomElement<El>(array: El[]): El | undefined {
  if (array.length === 0) {
    return undefined;
  }

  return array[getRandomInteger(0, array.length - 1)];
}

interface Project {
  id: number;
  order: number;
  color: number;
  name: string;
  comment_count: number;
  shared: boolean;
  favorite: boolean;
  sync_id: number;
  url: string;
}

export async function getProjects(
  apiToken: string,
  ignoredProjectIds: number[],
): Promise<Project | undefined> {
  return fetch(API_ENDPOINT, {
    headers: { Authorization: `Bearer ${apiToken}` },
  })
    .then(async (res: Response) => res.json())
    .then((projects: Project[]) => {
      return getRandomElement(projects.filter((p) => !ignoredProjectIds.includes(p.id)));
    });
}
