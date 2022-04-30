module.exports = function(eleventyConfig) {
  // Copy the `img/` directory 
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("javascript");
    eleventyConfig.addPassthroughCopy("circulator-images");
    eleventyConfig.addPassthroughCopy("pdf");
    eleventyConfig.addPassthroughCopy("image-gallery");
    
    
    eleventyConfig.addPassthroughCopy("css");
};

