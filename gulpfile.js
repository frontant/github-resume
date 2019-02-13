require("./gulp/tasks/styles");
require("./gulp/tasks/scripts");
require("./gulp/tasks/html");
require("./gulp/tasks/build");
require("./gulp/tasks/add-hash-to-assets");
require("./gulp/tasks/watch");
require("./gulp/tasks/cleanup");

var gulp = require("gulp");


gulp.task("default", ["build"]);