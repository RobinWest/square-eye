module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			build: {
				cwd: 'src',
				src: [ '**' ],
				dest: 'build',
				expand: true
			},
		},

		clean: {
			build: {
				src: ['build']
			},
			stylesheets: {
				src: ['build/**/*.css', 'build/**/*.less', '!build/**/main.css']
			},
			scripts: {
				src: ['build/**/*.js', '!build/**/app.js']
			}
		},

		less: {
			options: {
				// paths: ['/src/assets/css/'],
				// plugins: [
				// 	new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
				// ]
			},
			development: {
				files: {
					'build/assets/css/main.css': 'src/assets/**/*.less'
				}
			},
			production: {
				files: {
					'build/assets/css/main.min.css': 'src/assets/**/*.less'
				}
			}
		},

		autoprefixer: {
			build: {
				cwd: 'build',
				src: ['**/*.css'],
				dest: 'build',
				expand: true
			}
		},

		uglify: {
			build: {
				options: {
					// mangle: false
				},
				files: {
					'build/assets/js/app.js': ['src/assets/**/*.js']
				}
			}
		},

		watch: {
			stylesheets: {
				files: 'src/assets/**/*.less',
				tasks: ['stylesheets']
			},
			scripts: {
				files: 'src/assets/**/*.js',
				tasks: ['scripts']
			},
			copy: {
				files: ['src/**', '!src/**/*.less', '!src/**/*.js'],
				tasks: ['copy']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// unconfigured
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');




	// define tasks
	grunt.registerTask(
		'default',
		'Build then watch.',
		['build', 'watch']
	);

	grunt.registerTask(
		'stylesheets',
		'Build and prefix less to css.',
		['less', 'autoprefixer', 'clean:stylesheets']
	);
	
	grunt.registerTask(
		'scripts',
		'Combine and uglify scripts.',
		['uglify', 'clean:scripts']
	);

	grunt.registerTask(
		'build',
		'Clean, compile and copy build assets.',
		['clean', 'copy', 'stylesheets', 'scripts']
	);
};