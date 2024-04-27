const API_ENDPOINT = 'https://api.todoist.com/rest/v1';

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

interface Task {
  project_id: number;
}

async function getProjectsWithTasks(apiToken: string): Promise<number[]> {
  const response = await fetch(`${API_ENDPOINT}/tasks`, {
    headers: { Authorization: `Bearer ${apiToken}` },
  });
  const tasks = await response.json() as Task[];
  return tasks.map(({ project_id }) => project_id);
}

export async function getRandomProject(
  apiToken: string,
  ignoredProjectIds: number[],
): Promise<Project | undefined> {
  const nonEmptyProjectIds = await getProjectsWithTasks(apiToken);
  const response = await fetch(`${API_ENDPOINT}/projects`, {
    headers: { Authorization: `Bearer ${apiToken}` },
  });
  const projects = await response.json() as Project[];

  const validProjects = projects
    .filter((p) => !ignoredProjectIds.includes(p.id))
    .filter((p) => nonEmptyProjectIds.includes(p.id));

  return getRandomElement(validProjects);
}
