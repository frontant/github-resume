var gulp = require("gulp"),
    webpack = require("webpack"),
    sequence = require("gulp-sequence"),
    del = require("del"),
    modernizr = require("gulp-modernizr");

function runWebPack(inConfig, inCb){
    webpack(inConfig, function (err, stats) {
        if (err) {
            console.log(err.toString());
        }

        if( stats.compilation.errors.length > 0 ||
            stats.compilation.warnings > 0){
            console.log(stats.toString());
        }

        inCb();
    });
}

gulp.task("scripts.cleanup", function(){
    return del([
        "./app/gen-assets/scripts/modernizr.js",
        "./build/assets/scripts/**"
    ]);
});

gulp.task("script.build.modernizr", function(){
    return gulp.src([
        "./app/assets/styles/**/*.css",
        "./app/gen-assets/styles/**/*.css"
    ])
    .pipe(modernizr({
        options: ["setClasses"],
        tests: ["csstransitions"]
    }))
    .pipe(gulp.dest("./app/gen-assets/scripts"));
});

gulp.task("scripts.build", ["script.build.modernizr"], function (done) {
    runWebPack(require("../../webpack.config.development"), done);
});

gulp.task("scripts.build.production", ["script.build.modernizr"], function (done) {
    runWebPack(require("../../webpack.config.production"), done);
});

gulp.task("scripts", sequence("scripts.cleanup", "scripts.build"));

gulp.task("scripts.production", sequence("scripts.cleanup", "scripts.build.production"));