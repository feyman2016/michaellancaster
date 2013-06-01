module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' */\n'
		},
		compass: {
		    dist: {
		      options: {
		        config: 'assets/style/sass/config.rb'
		      }
			}
		},
		uglify: {
			my_target: {
		      files: {
		        'assets/js/app.min.js': ['assets/js/app.js']
		      }
		    }
		},
		watch: {
		    src: {
		      files: ['assets/js/app.js', 'assets/style/sass/*.scss'],
		      tasks: ['build'],
		    },
		},
	});

	// These plugins provide necessary tasks.
  	grunt.loadNpmTasks('grunt-contrib-compass');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
  	grunt.registerTask('build', ['compass', 'uglify']);

  	grunt.event.on('watch', function(action, filepath) {
	  grunt.log.writeln(filepath + ' has ' + action);
	});

};