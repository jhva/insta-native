// const { getDefaultConfig } = require('expo/metro-config');
// const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
// const defaultConfig = getDefaultConfig(__dirname);
// exports.resolver = {
//   ...defaultResolver,
//   sourceExts: [...defaultResolver.sourceExts, 'cjs'],
// };
// defaultConfig.resolver.sourceExts.push('cjs');

// module.exports = defaultConfig;
const { getDefaultConfig } = require('metro-config');
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
exports.resolver = {
  ...defaultResolver,
  sourceExts: [...defaultResolver.sourceExts, 'cjs'],
};
