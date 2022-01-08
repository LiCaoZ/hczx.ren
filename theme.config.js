import { useRouter } from "next/router";

export default {
    projectLink: 'https://github.com/LiCaoZ/hczx.ren', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/LiCaoZ/hczx.ren/blob/main', // base URL for the docs repository
    titleSuffix: ' - HCZX.REN',
    nextLinks: true,
    prevLinks: false,
    search: false,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `合川中学逐浪记者团 & 合川区无道科技工作室`,
    footerEditLink: `在 GitHub 编辑此页`,
    floatTOC: true,
    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">HCZX.REN</span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="og:title" content="HCZX.REN" />
        </>
    ),
    nstable_faviconGlyph: '👋',
    i18n: [
        { locale: "zh-CN", text: "简体中文" }
      ],
}