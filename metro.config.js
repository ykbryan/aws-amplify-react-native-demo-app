const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/])
  },
};
