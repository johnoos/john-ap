module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",    // Eleventy looks here for everything
      output: "_site"  // Eleventy puts the finished site here
    }
  };
};