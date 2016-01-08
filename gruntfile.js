/*global require */
/*global module */
/*global console */

var matchdep = require('matchdep');

module.exports = function (grunt) {

	'use strict';

	matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		uglify: {
			options: {
				mangle: false
			},
			sources: {
				src: ['src/app/main.js'],
				dest: 'release/main.min.js'
			}
		}
    });

	grunt.registerTask('dev', []);

	grunt.registerTask('release', [
		'uglify'
	]);

	grunt.registerTask('default', ['release']);
};