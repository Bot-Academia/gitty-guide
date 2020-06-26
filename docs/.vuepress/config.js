const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Gitty-The Github helper",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Official guide of Gitty-The Github Helper",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#edf057" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    lastUpdated: false,
    search: false,
    sidebar: "auto",
    repo: "bot-academia/gitty-guide",
    docsDir: "gitty-guide",
    sidebarDepth: 3,
    editLinks: true,
    serviceWorker: true,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Gitty",
        link: "https://gittybot.netlify.app/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Getting started",
          collapsable: false,
          children: ["", "users", "developers"],
        },
        {
          title: "Commands",
          collapsable: false,
          children: [
            "commands/",
            "commands/general",
            "commands/organization",
            "commands/repo",
            "commands/user",
            "commands/webhooks",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/pwa",
  ],
};
