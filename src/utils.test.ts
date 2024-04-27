import { getRandomProject } from './utils';

global.fetch = jest.fn();

const VALID_PROJECT = {
  id: 1,
  name: 'TEST',
};
const EMPTY_PROJECT = {
  id: 3,
  name: 'EMPTY',
};
const IGNORED_PROJECT_ID = 2;
const TASKS = [{ project_id: VALID_PROJECT.id }, { project_id: IGNORED_PROJECT_ID }];

describe('getRandomProject', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockResolvedValueOnce({ json: () => Promise.resolve(TASKS) });
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve([VALID_PROJECT, EMPTY_PROJECT]),
    });
  });

  it('Returns a random project that is not ignored or empty', async () => {
    expect(await getRandomProject(process.env.TRP_API_TOKEN, [IGNORED_PROJECT_ID])).toBe(
      VALID_PROJECT,
    );
  });
});
