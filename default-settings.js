module.exports = {
  env: {
    modules: false
  },
  extractFormatMessage: {
    outFile: "locales/en.json"
  },
  transformFormatMessage: {
    inline: false
  },
  styledComponents: {
    ssr: false,
    displayName: false
  }
};
