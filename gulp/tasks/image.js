let imagemin = require('gulp-imagemin'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  //pngquant = require('imagemin-pngquant'),
  imageminMozjpeg = require('imagemin-mozjpeg'),
  cache = require('gulp-cache'),
  imgPATH = {
    "input": ["./dev/static/images/**/*",
      '!./dev/static/images/svg/*'
    ],
    "ouput": "./build/static/images/"
  };

module.exports = function () {
  $.gulp.task('img:dev', () => {
    return $.gulp.src(imgPATH.input)
      .pipe($.gulp.dest(imgPATH.ouput));
  });

  $.gulp.task('img:build', () => {
    return $.gulp.src(imgPATH.input)
      .pipe(cache(imagemin([
        imagemin.gifsicle({
          interlaced: true
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imageminJpegRecompress({
          loops: 5,
          min: 70,
          max: 75,
          quality: 'medium'
        }),
        imagemin.svgo(),
        imagemin.optipng({
          optimizationLevel: 3
        }),
        imagemin([imageminMozjpeg({
          quality: 85

        })]),
        pngquant({
          quality: '65-70',
          speed: 5
        })
      ], {
        verbose: true
      })))
      .pipe($.gulp.dest(imgPATH.ouput));
  });
};