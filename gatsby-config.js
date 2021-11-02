module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "my-gallery",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ["Montserrat"],
        }
      }
    }
  ],
};
