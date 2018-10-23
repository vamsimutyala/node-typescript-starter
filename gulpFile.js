const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const nodemon = require('gulp-nodemon');
gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("watch:ts", function () {
    gulp.watch('src/**/*.ts', ['compile']);
});

gulp.task('start', function () {
    nodemon({
        script:'dist/bootstrap/server.js', env: { 'NODE_ENV': 'development' }
    });
});

gulp.task("default", ["compile", "watch:ts", "start"]);