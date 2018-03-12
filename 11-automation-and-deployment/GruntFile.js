module.exports = grunt => {
  
  grunt.initConfig({
    jshint: {
      files: ['*.js', 'lib/*.js', 'test/*.js'],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        },
        asi: true
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.registerTask('default', ['jshint'])
}