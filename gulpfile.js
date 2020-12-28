let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const webpack = require("webpack-stream");



//gulp.task('pug', function () {
//	return gulp.src('app/*.pug')
//		.pipe(pug({
//			pretty: true
//		}))
//		.pipe(gulp.dest('app'))
//		.pipe(browserSync.reload({
//			stream: true
//		}))
//})

gulp.task('clean', async function () {
	del.sync('dist');
});

gulp.task('scss', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 8 versions']
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('css', function () {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		//'node_modules/slick-carousel/slick/slick.css',
		//'node_modules/magnific-popup/dist/magnific-popup.css',
		'node_modules/animate.css/animate.css',
		//'node_modules/rateyo/src/jquery.rateyo.css',
		//'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
		//'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
		//'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
	])
		.pipe(concat('_libs.scss'))
		.pipe(gulp.dest('app/scss'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('html', function () {
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({
			stream: true
		}));
});

// gulp.task('script', function () {
// 	return gulp.src('app/js/**/*.js')
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}));
// });

gulp.task("build-js", () => {
    return gulp.src("app/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    // debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
				}))
				.pipe(gulp.dest('app/'))
                .on("end", browserSync.reload);
});


gulp.task("build-prod-js", () => {
    return gulp.src("app/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
				}))
				.pipe(gulp.dest('app/'));
});


gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "app/"
		}
	});
});

gulp.task ('images', function(){
	return gulp.src('app/assets/img/**/*')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest('dist/img'));
});
gulp.task('export', function () {
	let buildHtml = gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist'));

	let BuildCss = gulp.src('app/**/*.css')
		.pipe(gulp.dest('dist/css'));

	let BuildJs = gulp.src('app/*.js')
		.pipe(gulp.dest('dist/'));

	let BuildFonts = gulp.src('app/assets/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'));	
});

gulp.task('watch', function () {
	// gulp.watch('app/scss/**/*.scss', gulp.parallel('css'));
	gulp.watch('app/**/*.html', gulp.parallel('html'));
	// gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('app/js/**/*.js', gulp.parallel('build-js'));
});

gulp.task('build', gulp.series('clean', 'export', 'images'));

gulp.task('default', gulp.parallel('html', 'build-js', 'browser-sync', 'watch'));