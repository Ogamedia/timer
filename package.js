Package.describe({
  name: 'ogamedia:timer',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Nicely format date and time in your metoer app',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Ogamedia/timer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('mrt:moment@2.8.1');
  api.use('templating');
  api.addFiles('./client/main.html', 'client');
  api.addFiles('ogamedia:timer.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mrt:moment@2.8.1');;
  api.imply('templating');
  api.use(['ogamedia:timer']);
  api.addFiles('ogamedia:timer-tests.js');
});
