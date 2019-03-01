const year = new Date().getFullYear();

module.exports = {
  enforceNewFolder: true,
  prompts: {
    project: {
      required: true,
      message: 'What is the name of the new project?',
      default: ':folderName:',
    },
    description: {
      message: 'How would you describe the new project?',
      default: 'Another fine project',
    },
    name: {
      message: 'What is your name?',
      default: ':gitUser:',
      store: true,
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true
    },
    nodeVersion: {
      message: 'What node version are you targetting?',
      default: '6',
    },
    esm: {
      type: 'confirm',
      message: 'Include runtime es6 module support?',
      default: false,
    },
    airbnb: {
      type: 'confirm',
      message: 'Include airbnb eslint rules?',
      default: true,
    },
    buildTarget: {
      type: 'list',
      message: 'Transpilation target node version:',
      choices: [
        'none',
        '4',
        '6',
        '8',
      ],
      default: 'none',
    },
    tests: {
      type: 'list',
      message: 'Choose your test runner:',
      choices: [
        'tapped',
        'ava',
        'none',
      ],
      default: 'tapped',
    },
    docker: {
      type: 'confirm',
      message: 'Include a Dockerfile?',
      default: true,
    }
  },
  filters: {
    'src/index.js': '!esm',
    'src/index.mjs': 'esm',
    'test/index.js': 'tests !== "none" && !esm',
    'test/index.mjs': 'tests !== "none" && esm',
    'index.mjs': 'esm',
    'Dockerfile': 'docker',
    '.dockerignore': 'docker',
  },
  installDependencies: true,
  gitInit: true,
  post({ log, chalk, folderName, isNewFolder }) {
    log.success(`Project bootstrapped successfully into ${chalk.yellow(folderName)}`);

    if (isNewFolder) {
      log.info(`Change dir into ${chalk.yellow(folderName)} to get started`);
    }
  }
};
