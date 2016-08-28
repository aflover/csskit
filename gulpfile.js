var bourbon = require("bourbon").includePaths,
    autoprefix = require("gulp-autoprefixer"),
    connect = require("gulp-connect"),
    gulp = require('gulp'),
    param = require('gulp-param')(gulp, process.argv),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    log = require('gulp-log'),
    filter = require('gulp-filter'),
    sicon = require('./scripts/icon'),
    buffer = require('gulp-buffer'),
    watch = require('gulp-watch'),
    path = require('path'),
    fs = require('fs'),
    sass = require("gulp-sass");

var paths = {
    scss: [
        "./sass/*.scss",
        "./sass/**/*.scss",
    ]
};

function handleSassError(err) {
    gutil.log(gutil.colors.red('sass error\r\n'), gutil.colors.yellow(err.message));
    this.emit('end');
}

gulp.task("sass", function() {
    
    var includePaths = [
        path.resolve(__dirname, "sass"),
        path.resolve(require.resolve('normalize-scss'), '..'),
        // path.resolve(require.resolve('support-for'), '..'),
    ].concat(bourbon);
// console.log(includePaths);
    return gulp.src(paths.scss)
        .pipe(sass({ includePaths: includePaths }))
        .on('error', handleSassError)
        // .pipe(autoprefix("last 2 versions"))
        .pipe(gulp.dest("./dist/css"))
        // .pipe(connect.reload()) // 不监视了
        ;
});

gulp.task("connect", function() {
    connect.server({
        root: "dist",
        port: 8000,
        livereload: true
    });
});

function makeIconSassTask (name) {
    return function () {
        var item = sicon.resolve(name);
        // var cssFilter = filter('*.css', { restore: true });
        // var fontFilter = filter(['.eot', '.svg', '.ttf', '.woff', '.woff2'], { restore: true });
        return gulp.src(item.cssFile)
                .pipe(rename(function (path) {
                    path.basename = '_icons-' + path.basename;
                    path.extname = ".scss"
                }))
                .pipe(buffer())
                .pipe(sicon.gulpContentFilter(function (file) {
                    file.contents = new Buffer(item.toSass(file.contents.toString('utf8')));
                }))
                .pipe(gulp.dest("./sass/src/icons/"))
            ;
    }
}

function makeIconFontTask (name) {
    return function () {
        var item = sicon.resolve(name);
        return gulp.src(item.fontsDir)
                .pipe(gulp.dest("./fonts/"))
            ;
    }
}

['photon', 'font-awesome'].forEach(function (it) {
    gulp.task("icon-" + it + '-sass', makeIconSassTask(it));
    gulp.task("icon-" + it + '-font', makeIconFontTask(it));
});

gulp.task("icon-photon", ["icon-photon-sass", "icon-photon-font"]);
gulp.task("icon-font-awesome", ["icon-font-awesome-sass", "icon-font-awesome-font"]);

// 更新图标库
gulp.task("icons", ["icon-font-awesome", "icon-photon"]);

gulp.task("fonts", function(){
    return gulp.src('./fonts/*').pipe(gulp.dest("./dist/fonts"));
});

// 创建
param.task('create', function(name) {
    var dir = './sass/components/' + name + '/';
    fs.existsSync(dir) || fs.mkdirSync(dir);

    fs.writeFileSync(dir + '_' + name + '.scss', '');
    fs.writeFileSync(dir + '_' + name + '-mixin.scss', '');

var tmpl = `
$iter-on: true !default;

@import "components/util";

@import "components/iter/iter-mixin";
@import "components/iter/iter";
`;

    fs.writeFileSync('./sass/pure/' + name + '.scss', tmpl.replace(/iter/g, name));
    console.log('done')
});

gulp.task("dev", ["fonts"], function() {
    // gulp.start("connect");
    gulp.start("sass");
    watch(paths.scss, function(){
        gulp.start('sass');
    });
});
