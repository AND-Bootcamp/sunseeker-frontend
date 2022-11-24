module.exports = function(api) {
  api.cache(true);
  console.log("babel.config 01");

  return {
    presets: ['babel-preset-expo'],
  };
};
