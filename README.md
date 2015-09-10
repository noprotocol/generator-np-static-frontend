# NoProtocol Static Frontend generator

The *NoProtocol Static Frontend Generator* creates a project scaffolding for a static HTML project based on NoProtocol's best practices.

## Installation

If you don't already have it installed, install [Yeoman](http://yeoman.io)

	npm install -g yo

Install the generator

	npm install -g generator-np-static-frontend

## Using the generator

Make a new directory, and `cd` into it:

	mkdir my-new-project && cd $_

Run `yo np-static-frontend` or simply `yo` and select the `NP Static frontend` generator.

When the generator is finished, run `gulp` and you're done.

## Features:

### Gulp
Build the app using [Gulp](http://gulpjs.com/) and our own [gulp-noprotocol](https://github.com/NoProtocol/gulp-noprotocol) (which takes care of bundling files, running sass etc).

Place all the app JS files outside the webroot in `resources/js`. The gulp process will bundle them into *app.min.js* in the `public/build/js` folder. If needed, extra JS libs can be placed anywhere and added to the gulp `bundle-libs` task. These will be bundled into *libs.min.js*

Place all the Sass files outside the webroot in `resources/sass`. The gulp process will bundle them into *app.js* in the `public/build/js` folder.

The gulp watch task also activates Livereload which is set to reload on changes to *.js* and *.css* files.

### .htaccess
The .htaccess file has been augmented with several settings taken from the [HTML5 boilerplate](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess) such as media types, security settings, gzip etc. The option to force HTTPS for one or more domains has also been added. See the file for more info.

### Splash page
A NoProtocol splash page on the index :)