import ogImageSrc from "@images/using-tools.avif";

export const SITE = {
    title: "SysForge Technologies",
    tagline: "Leading-Edge Technology Solutions",
    description: "SysForge delivers cutting-edge technology solutions to meet all your project needs. Explore our top-tier hardware tools and expert services. Contact our sales team for superior quality and reliability.",
    description_short: "SysForge delivers cutting-edge technology solutions to meet all your project needs.",
    url: "https://github.com/Jeet-u",
    author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
    title: `${SITE.title}: : SysForge Technologies - Advanced Technology Solutions`,
    description: "SysForge offers top-tier technology tools and expert services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
    image: ogImageSrc,
};
