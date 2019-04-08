class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

module.exports = {
  content: ['src/**/*.jsx'],
  css: ['src/tailwind.css'],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['html', 'jsx'],
    },
  ],
}
