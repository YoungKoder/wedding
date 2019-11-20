
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require ('gulp-concat'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    iconfont    =   require('gulp-iconfont'),
    uglify = require('gulp-uglify'),
    iconfontCss =   require('gulp-iconfont-css');


    //styles (compressed, autoprefixer)
gulp.task('style', function () {
    return gulp.src('src/styles/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

// gulp.task('scripts:lib',function(){
//     return gulp.src(['node_modules/jquery-custom/jquery.2/dist/jquery.min.js',
//     'node_modules/slick-carousel/slick/slick.min.js'])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./src/js/libs'));
// });

gulp.task('scripts',function(){
    return gulp.src('./src/js/main.js')
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(gulp.dest('./build/js/'))
    
});

gulp.task('watch', function(){
    gulp.watch(['src/styles/**/*.scss'] , ['style']);
    gulp.watch(['src/js/**.js'], ['scripts']);
});
gulp.task('default', ['style','scripts','watch']);


// icon fonts
var fontName = 'icons';

// add svg icons to the folder "icons" and use 'iconfont' task for generating icon font
gulp.task( 'iconfont', async () => {
    gulp.src( 'src/assets/icons/*.svg' )
        .pipe( iconfontCss( {
            // где будет наш scss файл
            targetPath   : '../../styles/common/_icons.scss',
            // пути подлючения шрифтов в _icons.scss
            fontPath     : 'src/assets/fonts/',
            fontName    : fontName

        } ) )
        .pipe( iconfont( {
            fontName    : fontName,
            formats     : [ 'svg', 'ttf', 'eot', 'woff', 'woff2' ],
            normalize   : true,
            fontHeight  : 1001
        } ) )
        .pipe( gulp.dest( 'src/assets/fonts' ) );
});

