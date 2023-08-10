const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .webpackConfig({
    resolve: {
      alias: {
        '@currentComponents'  : path.resolve(__dirname, 'resources/js/src/views/currentComponents'),
        '@themeConfig'        : path.resolve(__dirname, 'resources/js/themeConfig.js'),
        '@validations'        : path.resolve(__dirname, 'resources/js/src/@core/utils/validations/validations.js'),
        '@resources'          : path.resolve(__dirname, 'resources/'),
        '@helpers'            : path.resolve(__dirname, 'resources/js/src/helpers'),
        '@axios'              : path.resolve(__dirname, 'resources/js/src/libs/axios'),
        '@core'               : path.resolve(__dirname, 'resources/js/src/@core'),
        '@'                   : path.resolve(__dirname, 'resources/js/src/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['node_modules', 'resources/assets'],
                },
              },
            },
          ],
        },
        {
          test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
          loaders: {
            loader: 'file-loader',
            options: {
              name: 'images/[folder]/[name].[ext]',
              context: '../vuexy-vuejs-bootstrap-vue-template/src/assets/images',
            },
          },
        },
      ],
    },
  })
  .sass('resources/scss/core.scss', 'public/css')
  .options({
    postCss: [require('autoprefixer'), require('postcss-rtl')],
  })
mix.copy('resources/css/loader.css', 'public/css')

// ------------------------------------------------
// If you are deploying on subdomain/subfolder. Uncomment below code before running 'yarn prod' or 'npm run production' command.
// Please Change below 'publicPath' and 'setResourceRoot' options as per your sub-directory path. We have kept our current live demo options which is deployed in sub-folder.
// ------------------------------------------------

/*
 if (mix.inProduction()) {
   mix.version()
   mix.webpackConfig({
     output: {
       publicPath: '/demo/vuexy-vuejs-laravel-admin-template/demo-1/',
       chunkFilename: 'js/chunks/[name].[chunkhash].js'
     }
   })
   mix.setResourceRoot('/demo/vuexy-vuejs-laravel-admin-template/demo-1/')
 }
 */

// ------------------------------------------------
// If you are deploying on subdomain/subfolder then comment out below code before running 'yarn prod' or 'npm run production' command.
// ------------------------------------------------

mix.webpackConfig({
  output: {
    chunkFilename: 'js/chunks/[name].[chunkhash].js',
  },
})

/*
 |--------------------------------------------------------------------------
 | Browsersync Reloading
 |--------------------------------------------------------------------------
 |
 | BrowserSync can automatically monitor your files for changes, and inject your changes into the browser without requiring a manual refresh.
 | You may enable support for this by calling the mix.browserSync() method:
 | Make Sure to run `php artisan serve` and `yarn watch` command to run Browser Sync functionality
 | Refer official documentation for more information: https://laravel.com/docs/9.x/mix#browsersync-reloading
 */

// mix.browserSync('https://voluntariado-gro.com')
// mix.browserSync('http://dev-cabo.com')
// mix.browserSync('http://voluntariado.local.com')
mix.browserSync('http://localhost:8888')
