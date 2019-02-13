var gulp = require("gulp"),
    sequence = require("gulp-sequence"),
    del = require("del"),
    htmlMinifier = require("gulp-html-minifier");

var buildDir = "./build";

function buildHtml(inIsProduction){
    let stream = gulp.src([
        "./app/*.html",
        "!./app/google*.html"
    ]);

    if(inIsProduction){
        stream = stream.pipe(htmlMinifier({
            collapseWhitespace: true,
            rhtmlMinifieremoveComments: true,
            conservativeCollapse: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true
        }));
    }

    stream = stream.pipe(gulp.dest(buildDir));

    return stream;
}

gulp.task("html.cleanup", function () {
    return del([
        buildDir + "/*.html",
        "!" + buildDir + "/google*.html"
    ]);
});

gulp.task("html.build", function(){
    return buildHtml();
});

gulp.task("html.build.production", function(){
    return buildHtml(true);
});

gulp.task("html", sequence("html.cleanup", "html.build"));

gulp.task("html.production", sequence("html.cleanup", "html.build.production"));