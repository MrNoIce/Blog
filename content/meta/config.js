const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Jake Scott", // <title>
  shortSiteTitle: "Jake's Portfolio", // <title> ending for posts and pages
  siteDescription: "A blog dedicated to show the work of Jake Scott.",
  siteUrl: "https://jakescott.dev",
  pathPrefix: "public/",
  siteImage: "avatar.png",
  siteLanguage: "en",
  // author
  authorName: "jake scott",
  authorTwitterAccount: "Jake_M_S",
  // info
  infoTitle: "jake scott",
  infoTitleNote: "portfolio",
  // manifest.json
  manifestName: "PersonalBlog - a blog to show my work",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "jake.murphy.scott@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/MrNoIce" },
    { name: "twitter", url: "https://twitter.com/Jake_M_S" },
    { name: "facebook", url: "https://www.facebook.com/jake.r.scott" }
  ]
};
