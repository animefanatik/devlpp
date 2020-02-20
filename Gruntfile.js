module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
              style: 'compressed',
              sourcemap: false
		    },
		    files: {
				'../2020/css/home.css': 'scss/home.scss',
				'../2020/css/internal.css': 'scss/internal.scss'
		    }
		  }
		},

	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 6, 
					progressive: true
				},
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '../2020/img/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default',['watch', 'imagemin']);
}