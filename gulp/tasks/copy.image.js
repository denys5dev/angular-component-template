'use strict';

module.exports = function() {
	$.gulp.task('copy.image', function() {
		return $.gulp.src('./src/assets/img/**/*.*', { since: $.gulp.lastRun('copy.image') })
			.pipe($.gulp.dest($.config.root + '/assets/img'));
	});
};