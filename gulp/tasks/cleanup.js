var gulp = require("gulp"),
    del = require("del");

gulp.task("cleanup.build", ["build.cleanup"]);

gulp.task("cleanup.gen-assets", function(){
    return del(["./app/gen-assets/**", "!./app/gen-assets"]);
});

gulp.task("cleanup", ["cleanup.build", "cleanup.gen-assets"]);