// const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withVideos = require('next-videos');

const nextConfig = {
  images: {
    disableStaticImages: true,
    loader: 'akamai',
    path: '',
  },
};

// module.exports = withPlugins([withFonts, withImages, withVideos], nextConfig);
module.exports = withFonts(withVideos(withImages(nextConfig)));
