'use strict';

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

var paths = {
  styles: {
    // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
    src: "./assets/sass/**/*.scss",
    // Compiled files will end up in whichever folder it's found in (partials are not compiled)
    dest: "./assets/css"
  }
};

function style() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      // Add browsersync stream pipe after compilation
      .pipe(browserSync.stream())
  );
}

exports.style = style;

// Add browsersync initialization at the start of the watch task
function watch() {
  // browserSync.init({
  //   // You can tell browserSync to use this directory and serve it as a mini-server
  //   server: {
  //     baseDir: "./"
  //   }
  //   open: false,
  //   // If you are already serving your website locally using something like apache
  //   // You can use the proxy setting to proxy that instead
  //   // proxy: "yourlocal.dev"
  //   proxy: {
  //     target: 'http://nginx'
  //   }
  // });

  gulp.watch(paths.styles.src, style);
}

exports.watch = watch
