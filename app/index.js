'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var cc = require('change-case');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  initializing: function () {    
    this.settings = {
      appName: cc.paramCase(this.appname), // used in package.json and bower.json
      appVersion: '1.0.0-beta',
      appTitle: cc.titleCase(this.appname) // used in readme
    };
  },

  prompting: function () {
    
  },

  writing: function () {
    /**
     * Copy all the files needed for the app itself.
     */    
    
    // public files    
    this.fs.copy(
      this.templatePath('public/_.htaccess'),
      this.destinationPath('public/.htaccess')
    );
    
    this.fs.copy(
      this.templatePath('public/_favicon.ico'),
      this.destinationPath('public/favicon.ico')
    );
    
    this.fs.copyTpl(
      this.templatePath('public/_index.html'),
      this.destinationPath('public/index.html'),
      { 
        APP_NAME: this.settings.appName,
      }
    );

    this.fs.copy(
      this.templatePath('public/img/_noprotocol-logo.png'),
      this.destinationPath('public/img/noprotocol-logo.png')
    );

    // JS resources files
    this.fs.copyTpl(
      this.templatePath('resources/js/_app.js'),
      this.destinationPath('resources/js/app.js'),
      { 
        APP_NAME: this.settings.appName,
      }
    );

    // Sass resource files
    this.fs.copy(
      this.templatePath('resources/sass/_app.scss'),
      this.destinationPath('resources/sass/_app.scss')
    );

    this.fs.copy(
      this.templatePath('resources/sass/_fonts.scss'),
      this.destinationPath('resources/sass/_fonts.scss')
    );

    this.fs.copyTpl(
      this.templatePath('resources/sass/_main.scss'),
      this.destinationPath('resources/sass/main.scss'),
      { 
        APP_NAME: this.settings.appName,
      }
    );          

    this.fs.copy(
      this.templatePath('resources/sass/_mixins.scss'),
      this.destinationPath('resources/sass/_mixins.scss')
    );

    this.fs.copy(
      this.templatePath('resources/sass/_reset.scss'),
      this.destinationPath('resources/sass/_reset.scss')
    );

    this.fs.copy(
      this.templatePath('resources/sass/_utils.scss'),
      this.destinationPath('resources/sass/_utils.scss')
    );
    

    /**
     * Copy all files needed for development and building processes.
     */
    
    // git files
    this.fs.copy(
      this.templatePath('development/_.gitignore'),
      this.destinationPath('.gitignore')
    );

    // Bower files
    this.fs.copyTpl(
      this.templatePath('development/_bower.json'),
      this.destinationPath('bower.json'),
      { 
        APP_VERSION: this.settings.appVersion,
        APP_NAME: this.settings.appName,
      }
    );

    this.fs.copy(
      this.templatePath('development/_bowerrc'),
      this.destinationPath('.bowerrc')
    );

    // Gulp files
    this.fs.copy(
      this.templatePath('development/_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    // NPM files
    this.fs.copyTpl(
      this.templatePath('development/_package.json'),
      this.destinationPath('package.json'),
      { 
        APP_VERSION: this.settings.appVersion,
        APP_NAME: this.settings.appName,
      }
    );

    // Editor config files
    this.fs.copy(
      this.templatePath('development/editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('development/jshintrc'),
      this.destinationPath('.jshintrc')
    );
    
    /**
     * Copy all the files needed for the documentation.
     */
    this.fs.copyTpl(
      this.templatePath('docs/_readme.md'),
      this.destinationPath('docs/readme.md'),
      { 
        APP_TITLE: this.settings.appTitle,
      }
    );

  },

  install: function () {
    this.installDependencies();
  }
});
