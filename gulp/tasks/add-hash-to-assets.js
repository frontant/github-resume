var gulp = require("gulp"),
    sequence = require("gulp-sequence"),
    del = require("del"),
    hash = require("gulp-hash"),
    hashReferences = require("gulp-hash-references");

gulp.task("addHashToAssets.renameFiles", function(){
    return gulp.src([
        "./build/assets/scripts/**",
        "./build/assets/styles/**",
    ], { base: "./build" })
    .pipe(hash())
    .pipe(gulp.dest("./temp/addHashToAssets"))
    .pipe(hash.manifest("assets-manifest.json"))
    .pipe(gulp.dest("./temp/addHashToAssets"))
});

gulp.task("addHashToAssets.updateReferencies", ["addHashToAssets.renameFiles"], function(){
    return gulp.src([
        "./build/**/*.html",
        "!./build/**/google*.html"
    ])
    .pipe(hashReferences("./temp/addHashToAssets/assets-manifest.json"))
    .pipe(gulp.dest("./temp/addHashToAssets"));
});

gulp.task("addHashToAssets.replaceInBuild", ["addHashToAssets.updateReferencies"], function(){
    del.sync([
        "./build/assets/scripts/**",
        "./build/assets/styles/**"]);

    return gulp.src([
        "./temp/addHashToAssets/assets/scripts/**",
        "./temp/addHashToAssets/assets/styles/**",
        "./temp/addHashToAssets/**/*.html"
    ], { base: "./temp/addHashToAssets" })
    .pipe(gulp.dest("./build"))
});

gulp.task("addHashToAssets.cleanup", function(){
    return del("./temp/addHashToAssets");
});

gulp.task("addHashToAssets", sequence("addHashToAssets.cleanup", "addHashToAssets.replaceInBuild"));