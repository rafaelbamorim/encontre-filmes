// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports=(() => {
    const config = getDefaultConfig(__dirname);

    const {transformer, resolver } = config;

    config.transformer = {
        ... transformer,
        babelTrasnfromerPath: require.resolve("react-native-svg-transformer"),

    }
    config.resolver = {
        ... resolver,
        assetExts: resolver.assetExts.filter((ext) => "svg"),
        sourceExts: [...resolver.sourceExts, "svg"],
    }

    return config;
})();