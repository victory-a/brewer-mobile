module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          src: './src',
          components: './src/components',
          screens: './src/screens',
          hooks: './src/hooks',
          navigation: './src/navigation',
          styles: './src/styles',
          utils: './src/utils',
          model: './src/model'
        }
      }
    ],
    ['module:react-native-dotenv']
  ]
};
