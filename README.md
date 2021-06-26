# todoist-random-project

This is CLI that will connect to your [Todoist](https://todoist.com/) account and return a random
project.

## Installation & Setup

1. Install the script

```sh
npm i -g todoist-random-project
```

2. [Add an environmental variable](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) `TRP_API_TOKEN`
   with the value set as your Todoist API Token. You can find your token from the Todoist Web app
   at `Todoist Settings -> Integrations -> API token`.

```sh
  export TRP_API_TOKEN=abc123thisismyapittoken
```

3. Optional. Add an environment variable `TRP_IGNORED_PROJECTS`. The value can be a comma separated
   list of project IDs to be ignored by the script (IDs can be found in the URL of the project).

```sh
  export TRP_IGNORED_PROJECTS=123,456,987
```

## Usage

```sh
  todoist-random-project

  > Get fit 💪 (https://todoist.com/showProject?id=2268367228)
```

## Contributing

To contribute to the project, bracnh off of the `development` branch and once your changes are
complete create a pull request to merge back into the `development` branch.

## Releasing

Releases are automated using Github Actions. To trigger a release, update the package version
in `develop` and then merge `develop` into the `main` branch.
