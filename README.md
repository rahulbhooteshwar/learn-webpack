# learn-webpack
Sample project to practice webpack concepts

## Current Issue

Trying to follow instructions given in [Official Guide](https://webpack.js.org/guides/development/#using-webpack-dev-middleware) to setup webpack project using `webpack-dev-middleware`, but it is having problem while setting up path value for `output`.

I am getting 404 on localhost:3000 while running dev server using command `npm run server`.

Please refer the configuration used in `webpack.config.js` file of this project.

What I observed is that when I set path value of configuration same as `publicPath` used for `webpack-dev-middleware` (see comment in `server.js`) It works fine.