module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			build: {
				cwd: 'src',
				src: [
					'**',
					'!**/*.js',
					'!**/*.css'
				],
				dest: 'build',
				expand: true
			}
		},

		clean: {
			build: {
				src: ['build']
			},
			stylesheets: {
				src: ['build/**/*.css', 'build/**/*.less', '!build/**/main.css']
			},
			scripts: {
				src: [
					'build/**/*.js',
					'build/min-safe',
					// Ignore
					// '!build/**/app.js', 
					// '!build/**/vendor.js'
					'!build/assets/**/*.js'
				]
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
					'build/assets/js/app.js': ['build/min-safe/**/**.js', '!build/min-safe/js/vendor.js'],
					'build/assets/js/vendor.js': ['build/min-safe/js/vendor.js']
				}
			}
		},

		ngAnnotate: {
			options: {
				singleQuotes: true
			},
			app: {
				files: {
					'build/min-safe/js/app.js': ['src/assets/**/**.js'],
					'build/min-safe/js/vendor.js': [
						// Vendor dependencies
						'node_modules/angular/angular.js'
					]
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
			// Copies any index/html files over
			copy: {
				files: ['src/**', '!src/**/*.less', '!src/**/*.js'],
				tasks: ['copy']
			}
		}
	});

	// TODO add angular auto-dependency injector
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ng-annotate');

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
		['ngAnnotate', 'uglify', 'clean:scripts']
	);

	grunt.registerTask(
		'build',
		'Clean, compile and copy build assets.',
		['clean', 'copy', 'stylesheets', 'scripts']
	);
};