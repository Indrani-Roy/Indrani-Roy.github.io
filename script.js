var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo:
      "https://" +
      process.env.GH_TOKEN +
      "@github.com:Indrani-Roy/Indrani-Roy.github.io.git",
  },
  console.log("error")
);
