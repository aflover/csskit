var bourbon = require("bourbon").includePaths,
    autoprefix = require("gulp-autoprefixer"),
    connect = require("gulp-connect"),
    gulp = require("gulp"),
    gutil = require('gulp-util'),
    sass = require("gulp-sass");

var paths = {
    scss: [
        "./sass/*.scss",
        "./sass/**/*.scss"
    ]
};

function handleSassError(err) {
    gutil.log(gutil.colors.red('sass error\r\n'), gutil.colors.yellow(err.message));
    this.emit('end');
}

gulp.task("sass", function() {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ["sass"].concat(bourbon)
        }))
        .on('error', handleSassError)
        .pipe(autoprefix("last 2 versions"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload())
        ;
});

gulp.task("connect", function() {
    connect.server({
        root: "dist",
        port: 8000,
        livereload: true
    });
});

gulp.task("dev", ["sass", "connect"], function() {
    gulp.watch(paths.scss, ["sass"]);
});
