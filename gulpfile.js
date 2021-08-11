const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');

gulp.task("pranie", function(done) {
    console.log("robię pranie");
    done();
});


gulp.task("sass", function() {
    return gulp.src("scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(
            {
                outputStyle: 'expanded',
                sourceComments: 'map'
            }
        ).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
});

gulp.task("watch", function() {
    gulp.watch("scss/*.scss", gulp.series("sass"));
});