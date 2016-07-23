module.exports = function(grunt) {
 
  grunt.initConfig({
      
    // PostCSS
    postcss: {
    options: {
       processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}),
        require('postcss-sorting')
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
			},
            postcss: {
                files: 'assets/css/*.scss',
				tasks: ['postcss']
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
      
    // Concat
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['app/app.js', 'app/app.config.js', 'app/controllers/card.factory.js', 'app/controllers/favorites.controller.js', 'app/controllers/main.controller.js', 'app/directives/card.directive.js', 'app/directives/favcard.directive.js'],
          dest: 'app/bundle.js',
        },
    }
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
     /*css_mqpacker: {
        main: {
          options: {
            map: true
          },

          expand: true,
          cwd: 'src/css/',
          src: '*.css',
          dest: 'dest/css/'
        }
      }*/
});
    
    
    
    
 

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-css-mqpacker');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
    
  grunt.registerTask('default', ['connect', 'watch']);
};
