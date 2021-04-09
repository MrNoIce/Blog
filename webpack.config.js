module.exports = {
    entry: "./index.js",
    mode: "development",
    module: {
          rules: [{
              test: /\.md$/,
              use: [
                  {
                      loader: "html-loader"
                  },
                  {
                      loader: "markdown-loader",
                      // optional options
                      /*
                      options: {
                          renderer
                      }
                      */
                  }
              ]
          }]
      },
      output: {
          filename: "bundle.js"
      },
  };


  const marked = require("marked");
  const renderer = new marked.Renderer();

  return {
      module: {
          rules: [{
                  test: /\.md$/,
                  use: [
                      {
                          loader: "html-loader"
                      },
                      {
                          loader: "markdown-loader",
                          options: {
                              pedantic: true,
                              renderer
                          }
                      }
                  ]
              }]
      }
  }






