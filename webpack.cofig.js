export const module = {
  rules: [
    // otras reglas...
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    },
  ],
};
export const resolve = {
  extensions: ["*", ".js", ".jsx"],
};