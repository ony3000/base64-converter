// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'base64-converter',
  tagline: 'A library that allows bidirectional conversion of strings and base64.\nAvailable in both browser and Node.js.',
  url: 'https://ony3000.github.io',
  baseUrl: '/base64-converter/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ony3000',
  projectName: 'base64-converter',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'base64-converter',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'getting-started/with-package-manager',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/playground',
            label: 'Playground',
            position: 'left',
          },
          {
            href: 'https://github.com/ony3000/base64-converter',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started/with-package-manager',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Playground',
                to: '/playground',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ony3000/base64-converter',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hyeonjong. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
