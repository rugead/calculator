var gulp = require('gulp');
var gulputil = require('gulp-util');
var pug = require('gulp-pug');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var exorcist = require('exorcist');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages');

function bundle (bundler) {
  return bundler
    // .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .on('error', function (e){
      gulputil.log(e.message);
    })
    .pipe(exorcist('./build/js/dist/app.js.map'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js/dist'))
    .pipe(browserSync.stream());
}

const srcPaths = {
  pug: './app/*.pug',
  css: './app/css/*.css'
};

const buildPaths = {
  build: './build',
  pug: './build/'
};

gulp.task('css', function() {
  return gulp.src(srcPaths.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('pug', () => {
  gulp.src(srcPaths.pug)
    .pipe(pug())
    .pipe(gulp.dest(buildPaths.pug));
});

gulp.task('js', function () {
  return bundle(browserify('./app/js/app.js'));
});

gulp.task('watch', function () {
  gulp.watch(srcPaths.pug, ['pug']);
  gulp.watch(srcPaths.css, ['css']);

  watchify.args.debug = true;
  var watcher = watchify(browserify('./app/js/app.js', watchify.args).transform(babelify, {presets: ["es2015"]}));

  bundle(watcher);

  watcher.on('update', function() {
    bundle(watcher);
  });

  watcher.on('log', gulputil.log);

  var files = [
        buildPaths.build
  ];

  browserSync.init(files, {
      browser: "chrome",
      server: "./build",
      logFileChange: false,
      port: 3010
  });

});

gulp.task('gh', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['css', 'pug', 'watch']);
