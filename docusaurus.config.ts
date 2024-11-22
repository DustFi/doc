import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "dustfi Docs",
    tagline:
        "Building the Future of DeFi on TON: Seamless Integration, Powerful Tools, and Precision at Your Fingertips.",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://dustfi.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/docs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "dustfi", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars/sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    routeBasePath: "/",
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: "dark",
        },
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "dustfi Docs",
            logo: {
                alt: "dustfi Logo",
                src: "img/dustfi-logo.png",
            },
            items: [

                { to: "sdk/introduction", label: "SDK", position: "left" },

                {
                    href: "https://github.com/dustfi",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    // items: [
                    //     {
                    //         label: "Tutorial",
                    //         to: "/docs/intro",
                    //     },
                    // ],
                },
                {
                    title: "Socials",
                    items: [
                        {
                            label: "Website",
                            href: "https://dustfi.xyz",
                        },
                        {
                            label: "Telegram",
                            href: "https://t.me/dustfidex",
                        },

                        {
                            label: "X",
                            href: "https://x.com/dustfidex",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/dustfi",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} DecenLabs.com. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
