module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'nep', 'ind'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'https://jsonplaceholder.typicode.com',
        defaultLocale: 'en-US',
      },
    ]
  }
}
