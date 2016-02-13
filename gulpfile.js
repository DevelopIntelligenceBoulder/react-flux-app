"use strict";

const
	webpack = require("webpack-stream"),
	gulp = require("gulp"),
	babel = require("gulp-babel"),
	sass = require("gulp-sass");

gulp.task("sass", function() {
	return gulp.src("src/www/css/site.scss")
		.pipe(sass())
		.on("error", function() {
			console.dir(arguments);
		})
		.pipe(gulp.dest("dist/www/css"));
});

gulp.task("babel", function() {

	return gulp.src("src/www/js/**/*.jsx")
		.pipe(babel({
			plugins: ["transform-react-jsx"],
			presets: ["es2015", "react"]
		}))
		.on("error", function() {
			console.dir(arguments);
		})
		.pipe(gulp.dest("dist/www/js"));

});

gulp.task("webpack", function() {

	return gulp.src("./dist/www/js/site.js")
		.pipe(webpack({
			output: {
        filename: "site-webpack.js"
    	}
		}))
		.on("error", function() {
			console.dir(arguments);
		})
		.pipe(gulp.dest("./dist/www/js"));

});

gulp.task("copy", function() {

	gulp.src("src/www/**/*.html")
		.pipe(gulp.dest("dist/www"));

	gulp.src(["src/**/*","!src/www/**/*"])
		.pipe(gulp.dest("dist"));

});

gulp.task("server", function() {
	require("./index.js");
});

gulp.task("default", ["babel", "copy"], function () {

	gulp.watch("src/www/css/site.scss", ["sass"]);
	gulp.watch("src/www/js/**/*.jsx", ["babel","webpack"]);
	gulp.watch(["src/www/**/*.html","src/**/*","!src/www/**/*"], ["copy"]);

});
