import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SRE TRPG',
  tagline: 'TRPGで楽しむSREのケーススタディ',

  url: 'https://mashiike.github.io/',
  baseUrl: '/sre-trpg/',

  organizationName: 'mashiike',
  projectName: 'sre-trpg',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/mashiike/sre-trpg/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SRE TRPG',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'rulebookSidebar',
          position: 'left',
          label: 'ルールブック',
        },
        {
          type: 'docSidebar',
          sidebarId: 'scenarioSidebar',
          position: 'left',
          label: 'シナリオ',
        },
        {
          href: 'https://github.com/mashiike/sre-trpg',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
