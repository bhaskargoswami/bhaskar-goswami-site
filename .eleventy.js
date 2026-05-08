module.exports = function(eleventyConfig) {
  // Copy static assets (CSS, images, etc.) to the output folder
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
