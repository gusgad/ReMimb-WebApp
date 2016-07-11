module.exports = function(grunt) {
 
  grunt.initConfig({
      
    postcss: {
    options: {
       processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
      ]
    },
    dist: {
      src: 'assets/css/main.css'
    }
  },
    
//sass
      sass: {
        dist: {
          files: {
            "assets/css/main.css" : "assets/css/main.scss"
          }
        }
    },
      
//watch
      watch: {
			sass: {
				files: 'assets/css/*.scss',
				tasks: ['sass']
			}
            //scripts: {
                //files: ["./app/**/*.js", "./index.html"],
                //tasks: ["browserify"]
            //}
		},
      
       connect: {
        server: {
          options: {
            port: 3000
          }
        }
    },
       /*browserify: {
			dist: {
				options: {
					transform: [['babelify', { presets: ['es2015'] }]],
					browserifyOptions: { debug: true },
					exclude: ''
				},
				files: {
					'./app/bundle.js': ['./app/app.js']
				}
			}
		}
      */
});
    
    
    
    
 

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-postcss');
    
  grunt.registerTask('default', ['connect', 'watch']);
};
