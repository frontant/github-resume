var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync");

gulp.task("watch", function(){
    browserSync.init({
        notify: false,
        ghostMode: false,
        localOnly: true,
        open: false,
        online: false,
        xip: false,
        tunnel: null,
        server:{
            baseDir: "build"
        }
    });

    watch("./app/assets/styles/**/*.css", function(){
        gulp.start("watch.cssInject");
    });

    watch("./app/assets/scripts/**/*.js", function(){
        gulp.start("watch.waitForScripts");
    });

    watch("./app/*.html", function(){
        gulp.start("watch.waitForHtml");
    });
});

gulp.task("watch.cssInject", ["styles.build"], function(){
    return gulp.src("./build/assets/styles/styles.css")
    .pipe(browserSync.stream());
});

gulp.task("watch.waitForScripts", ["scripts.build"], function () {
    browserSync.reload();
});

gulp.task("watch.waitForHtml", ["html.build"], function(){
    browserSync.reload();
});
