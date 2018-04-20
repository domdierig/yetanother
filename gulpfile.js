let gulp = require("gulp");
let concat = require("gulp-concat");
let watch = require("gulp-watch");

let yaFiles = [
    "./yetanother/yaModuleFactory.js",
    "./yetanother/yaModuleManager.js",
    "./yetanother/yaModule.js",
    "./yetanother/ya.js"
];

gulp.task("watch", function() {
    gulp.watch("./yetanother/*.js", ["buildYA"])
})

gulp.task("buildYA", function() {
    return gulp.src(yaFiles)
        .pipe(concat("ya.js"))
        .pipe(gulp.dest("./"));
})