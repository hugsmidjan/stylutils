#!/usr/bin/env node
/* global process require */

const projectPath = process.cwd() + '/';
const projectPkg = require(projectPath + 'package.json');

const outdatedFiles = [
  // add filenames from older-versions here..
];

const sanitizePath = (destFolder) =>
  ((destFolder || '') + '/')
    .replace(/\/\/+$/, '/') // remove double slash off end
    .replace(/^\/+/, ''); // ensure no fs root path

const copyFilesToVendorCssPath = (destFolder) => {
  // default to reading "vendorcss" value from project's `package.json`
  destFolder =
    sanitizePath(destFolder) ||
    sanitizePath(projectPkg.vendorcss) ||
    sanitizePath((projectPkg.stylutils || {}).destFolder);

  if (!destFolder) {
    console.warn(
      '[stylutils] Your package.json has no "vendorcss" path defined.\n' +
        '– Run `yarn run stylutils dest/path/for/stylutils` to install'
    );
  } else {
    const exec = require('child_process').execSync;
    // Check if secret options flag `copyFiles` is set
    // indicating that the "stylutils" folder should NOT be moved
    // but its contents should be dropped into the `destFolder`.
    // (This flag is formally undocumented and is mainly intended
    // to help "hugsmidjan/hxmgulp" depend on this module.)
    const copyFolder = (projectPkg.stylutils || {}).copyFiles !== true;

    const resolvedDestFolder = destFolder + (copyFolder ? 'stylutils/' : '/');
    if (outdatedFiles.length) {
      console.info('[stylutils] Removing outdated files:\n', outdatedFiles);
      exec('rm ' + [''].concat(outdatedFiles).join(' ' + resolvedDestFolder));
    }
    const path = require('path');
    const stylutilsPath = path.parse(require.resolve('stylutils/package.json')).dir + '/';
    const srcPath = stylutilsPath + 'stylutils' + (copyFolder ? '' : '/*');
    exec('cp -R ' + srcPath + ' ' + destFolder);
    // And throw in the README for good measure
    exec('cp -R ' + stylutilsPath + 'README.md ' + resolvedDestFolder);
    console.info('[stylutils] Updated files in "' + resolvedDestFolder + '".');
  }
};

const destFolderArg = sanitizePath(process.argv[2]);
copyFilesToVendorCssPath(destFolderArg);

if (destFolderArg) {
  if (projectPkg.stylutils) {
    projectPkg.stylutils.distFolder = destFolderArg;
  } else {
    projectPkg.vendorcss = destFolderArg;
  }
  require('fs').writeFileSync(
    projectPath + 'package.json',
    JSON.stringify(projectPkg, null, 4)
  );
  const updatedKey = projectPkg.stylutils ? 'stylutils.distFolder' : 'vendorcss';
  console.info(
    '[stylutils] Set the package.json "' + updatedKey + '" to "' + destFolderArg + '".'
  );
}
