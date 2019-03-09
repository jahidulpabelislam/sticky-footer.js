const gulp = require("gulp");

const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// Minify the JS file
const minifyScript = "minify-script";
gulp.task(minifyScript, function() {
    return gulp.src("./src/sticky-footer.js")
               .pipe(concat("./sticky-footer.min.js"))
               .pipe(uglify())
               .pipe(gulp.dest("./src/"));
});

gulp.task("default", gulp.parallel([minifyScript]));
