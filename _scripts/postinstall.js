/* global process require */
const env = process.env;
if (
  // if INIT_CWD (yarn/npm install invocation) and PWD are the same, then local (dev) install/add is taking place
  env.INIT_CWD !== env.PWD &&
  // local (dev) yarn install may have been run from a project subfolder
  env.INIT_CWD.indexOf(env.PWD) !== 0
) {
  const exec = require('child_process').execSync;
  exec('cp -R stylutils/* . && rm -rf stylutils CHANGELOG.md');
}
