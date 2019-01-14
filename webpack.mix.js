const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .setPublicPath('assets/')
  .extract()
  .js('src/js/main.js', 'js/main.js')
  .postCss('src/css/main.css', 'css/main.css')
  .options({
    extractVueStyles: true,
    autoprefixer: false,
    processCssUrls: false,
    postCss: [
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-preset-env'),
      require('tailwindcss')('tailwind.js'),
      require('autoprefixer')
    ]
  })
  .disableNotifications()
