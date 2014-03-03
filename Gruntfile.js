module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		watch: {
			scss: {
				files: ['scss/*.scss'],
				tasks: ['default']
			}
		},

		sass: {
			dist: {
				files: {
					'css/open-sans.css': ['scss/open-sans.scss']
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					'css/open-sans.min.css': ['css/open-sans.css']
				}
			}
		},

		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				commitFiles: ['package.json', 'bower.json'],
				pushTo: 'origin'
			}
		}

	});

	grunt.registerTask( 'default', ['sass', 'cssmin'] );
};
