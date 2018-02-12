module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Rodrigo Dugin', // Navigation and Site Title
  siteTitleAlt: 'Rodrigo Dugin - A Developer Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://upbeat-edison-0598aa.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription:
    'Rodrigo Dugin portfolio containing all personal and business info, skills, projects and contacts',

  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: 'emilia', // Twitter Username
  ogSiteName: 'emilia', // Facebook Site Name
  googleAnalyticsID: 'UA-12345689-1',

  // Date format used in your project
  // More information here: https://date-fns.org/v1.29.0/docs/format
  dateFormat: 'DD/MM/YYYY',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.js
  headerFontFamily: 'Open Sans',
  bodyFontFamily: 'Merriweather',
  baseFontSize: '16px',

  // Your information
  avatar: '/logos/social.png',
  name: 'RodrigoDugin',
  location: 'Brazil',
  socialMedia: [
    {
      url: 'https://www.facebook.com/lekoarts.de',
      name: 'Facebook'
    },
    {
      url: 'https://www.instagram.com/lekoarts.de',
      name: 'Instagram'
    }
  ]
};
