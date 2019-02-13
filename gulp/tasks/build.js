var gulp = require("gulp"),
    sequence = require("gulp-sequence"),
    del = require("del");

gulp.task("build.cleanup", function(){
    return del("./build");
});

gulp.task("build.essentials",
    [
        "styles",
        "scripts",
        "html"
    ]
);

gulp.task("build.essentials.production",
    [
        "styles.production",
        "scripts.production",
        "html.production"
    ]
);

gulp.task("build",
    sequence(
        "build.cleanup",
        "build.essentials",
    )
);

gulp.task("build.production",
    sequence(
        "build.cleanup",
        "build.essentials.production",
        "addHashToAssets"
    )
);
