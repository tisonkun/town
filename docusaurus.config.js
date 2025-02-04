// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '开源小镇',
    tagline: '连接个人、社群和企业',
    url: 'https://town.korandoru.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
        localeConfigs: {
            'zh-CN': {label: "简体中文"},
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: "individuals",
                    routeBasePath: "/individuals",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/korandoru/town/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    blogSidebarTitle: '全部博文',
                    blogSidebarCount: 'ALL',
                    editUrl: 'https://github.com/korandoru/town/tree/main/',
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
                title: '开源小镇',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {to: '/individuals/overview', label: '个人参与', position: 'left'},
                    {to: '/communities/overview', label: '社群建设', position: 'left'},
                    {to: '/enterprise/overview', label: '企业沙盘', position: 'left'},
                    {to: '/dashboard/overview', label: '数字看板', position: 'left'},
                    {to: '/blog', label: '集体智慧', position: 'left'},
                    {
                        href: 'https://github.com/korandoru/town',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                    {type: 'localeDropdown', position: 'right'},
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} Korandoru Contributors.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            image: 'img/korandoru.png'
        }),
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                indexDocs: false,
                indexPages: true,
                language: ["en", "zh"],
            }
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'communities',
                path: 'communities',
                routeBasePath: '/communities',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                sidebarPath: require.resolve('./sidebars.js'),
                editUrl: 'https://github.com/korandoru/town/tree/main/',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'enterprise',
                path: 'enterprise',
                routeBasePath: '/enterprise',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                sidebarPath: require.resolve('./sidebars.js'),
                editUrl: 'https://github.com/korandoru/town/tree/main/',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'dashboard',
                path: 'dashboard',
                routeBasePath: '/dashboard',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                sidebarPath: require.resolve('./sidebars.js'),
                editUrl: 'https://github.com/korandoru/town/tree/main/',
            },
        ],
    ]
};

module.exports = config;
