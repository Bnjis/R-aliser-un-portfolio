var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");

/* =================================

              SASS

==================================== */

gulp.task("intsass", function() {
  return gulp
    .src("./assets/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/css"));
});

/* =================================

              WATCHER

==================================== */

gulp.task("int:watch", function() {
  gulp.watch("./assets/sass/**/*.scss", ["intsass"]);
});

gulp.task("default", ["intsass"]);
