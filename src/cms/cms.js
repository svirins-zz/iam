import CMS from "netlify-cms-app";

/**
 * Optionally pass in a config object. This object will be merged into `config.yml` if it exists
 */

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
  },
});

// CMS.registerPreviewTemplate('my-template', MyTemplate)
