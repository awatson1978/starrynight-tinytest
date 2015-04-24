Package.describe({
  name: 'starrynight:tinytest',
  summary: "Better Tinytests with 'describe', 'it', and chai assertions.",
  version: '1.0.2',
  git: 'https://github.com/awatson1978/starrynight-tinytest.git'
});


Npm.depends({"chai": "2.2.0"});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('tinytest');
  api.use('chai');
  api.addFiles('peterellisjones:describe.js');
  api.export('describe');
  api.export(['chai','assert','expect','should']);
});

