var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    cssImport = require("postcss-import"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    mixins = require("postcss-mixins"),
    hexrgba = require("postcss-hexrgba"),
    calc = require("postcss-calc"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("gulp-cssnano");


function buildStyles(inSrcGlob, inDstDir, inIsProduction){
    let stream = gulp.src(inSrcGlob)
    .pipe(postcss([
        cssImport,
        mixins,
        cssvars,
        calc,
        nested,
        hexrgba,
        autoprefixer({
            browsers: ["last 15 versions"]
        })
    ]));

    if(inIsProduction){
        stream = stream.pipe(cssnano({
            autoprefixer: false
        }));
    }

    stream = stream.on("error", function(errorInfo){
        console.log(errorInfo.toString());
        this.emit("end");
    })
    .pipe(gulp.dest(inDstDir));

    return stream;
}

module.exports = buildStyles;