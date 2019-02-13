var gulp = require("gulp"),
    del = require("del"),
    sequence = require("gulp-sequence");

var buildStyles = require("../lib/build-styles");

gulp.task("styles.cleanup", function(){
    return del(["./build/assets/styles/**"]);
});

gulp.task("styles.build", function(){
    return buildStyles("./app/assets/styles/styles.css", "./build/assets/styles");
});

gulp.task("styles.build.production", function(){
    return buildStyles("./app/assets/styles/styles.css", "./build/assets/styles", true);
});

gulp.task("styles", sequence("styles.cleanup", "styles.build"));

gulp.task("styles.production", sequence("styles.cleanup", "styles.build.production"));