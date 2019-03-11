const gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano');

gulp.task('sass', function () {

  return gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('css-libs', ['sass'], function () {
  return gulp.src(['node_modules/normalize.css/normalize.css','node_modules/owl.carousel/dist/assets/owl.carousel.min.css','node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'])
    .pipe(concat('libs.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('src/css'));
});

gulp.task('scripts', function () {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'));
});

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });
});

gulp.task('watch', ['browserSync','css-libs','scripts'], function () {
  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/index.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload)
});

gulp.task('build', ['clean','sass', 'scripts'], function () {

  const buildCss = gulp.src([
    'src/css/style.css',
    'src/css/libs.min.css',
    'src/css/normalize.css'
  ]).pipe(gulp.dest('dist/css'));

  const buildImage = gulp.src('src/img/*.*').pipe(gulp.dest('dist/img'));

  const buildJs = gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));

  const buildHtml = gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return del.sync('dist');
});