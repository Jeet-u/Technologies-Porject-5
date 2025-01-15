/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C95AHqwB.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_CTGQTF77.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_C9qxDUIH.mjs';
import { $ as $$FeaturesStatsAlt, a as $$TestimonialsSectionAlt } from '../chunks/TestimonialsSectionAlt_CONpuetE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://github.com/Jeet-u");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Are you ready?";
  const subTitle = "Explore the latest web development and server administration services offered by SysForge. Our team delivers innovative solutions tailored to your needs, ensuring your digital presence stands out and your servers run smoothly in today's competitive landscape.";
  const testimonials = [
    // First testimonial data
    {
      content: ` "SysForge has been an invaluable partner in our digital journey. Their expertise in web development and server administration has allowed us to bring our vision to life with precision and efficiency. We couldn't be happier with the results!" `,
      author: "Sophia Rodriguez",
      role: "CEO | TechSolutions Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    },
    // Second testimonial data
    {
      content: ' "Working with SysForge was a game-changer for our business. Their team of developers and server administrators provided top-notch solutions that streamlined our operations and enhanced our online presence. We highly recommend their services!" ',
      author: "John Smith",
      role: "CTO | Digital Innovations Ltd.",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    }
  ];
  const pageTitle = `Services | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sysforge.com/services",
    "url": "https://sysforge.com/services",
    "name": "Services | SysForge",
    "description": "Explore the latest web development and server administration services offered by SysForge.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://sysforge.com",
      "name": "SysForge",
      "description": "SysForge delivers innovative solutions tailored to your needs, ensuring your digital presence stands out and your servers run smoothly."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Customer Stories", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Why Choose SysForge?", "subTitle": "Transform your ideas into tangible results with SysForge. Whether you're starting with a sketch on a napkin or diving into a comprehensive project, our team is engineered to help you build with confidence.", "benefits": [
    "Robust and reliable solutions for long-lasting performance.",
    "Innovative approaches tailored to modern needs.",
    "Dedicated support to your project's success."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "What Our Clients Say", "testimonials": testimonials })} ` })}`;
}, "/home/circuit/Technologies-Porject-5/src/pages/about/index.astro", undefined);

const $$file = "/home/circuit/Technologies-Porject-5/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
