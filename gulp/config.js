module.exports = {
  css: {
    src: './src/css/app.css',
    dest: './dist/',
    watch: './src/css/**/*.css'
  },
  js: {
    entries: ['./src/js/app.js'],
    dest: './dist/',
    watch: './src/js/**/*.js'
  }
};
