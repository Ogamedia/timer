Package.describe({
  name: 'ogamedia:timer',
  version: '0.0.2',
  summary: 'Nicely format date and time in your meteor app',
  git: 'https://github.com/Ogamedia/timer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('mrt:moment@2.8.1');
  api.use('templating');
  api.addFiles('ogamedia:timer.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mrt:moment@2.8.1');;
  api.use(['ogamedia:timer']);
  api.addFiles('ogamedia:timer-tests.js');
});