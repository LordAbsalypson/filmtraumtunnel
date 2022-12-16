// see video explanation: https://youtu.be/ubHwScDfRQA

const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
// const imagewebp = require('gulp-webp');
var browserSync = require('browser-sync').create();


//compile, prefix, and min scss
function compilescss() {
  return src('src/scss/main.scss') 
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/css')) 
    //browser Sync
    .pipe(browserSync.stream());
};
// minify js
function jsmin(){
    return src('src/js/*.js')
      .pipe(terser())
      .pipe(dest('dist/js'));
  }

//optimize and move images
function optimizeimg() {
  return src('src/assets/img/*.{jpg,png}')
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 100, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ]))
    .pipe(dest('dist/images'))
};


//watchtask
function watchTask(){

    browserSync.init({
      server: {
          baseDir: './'
      }
    });
  watch('./*.html').on('change', browserSync.reload);  
  watch('src/scss/**/*.scss', compilescss); 
  watch('src/js/*.js', jsmin); 
  watch('src/assets/img/*', optimizeimg); 
  

}


// Default Gulp task 
exports.default = series(
  compilescss,
  jsmin,
  watchTask
);