/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_CDlkp_ya.mjs';
import 'kleur/colors';
import { a as $$MainLayout, u as usingTools, S as SITE } from '../chunks/MainLayout_BzxteYda.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_BaRpwE1w.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_nU-4n5ZH.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://github.com/Jeet-u");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/MainSection.astro", undefined);

const $$Astro$4 = createAstro("https://github.com/Jeet-u");
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/LeftSection.astro", undefined);

const $$Astro$3 = createAstro("https://github.com/Jeet-u");
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8"> <!-- Single image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-lg", "src": imgOne, "alt": imgOneAlt, "format": "avif" })} </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "avif" })} <!-- Second image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "avif" })} </div>`} </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/RightSection.astro", undefined);

const $$Astro$2 = createAstro("https://github.com/Jeet-u");
const $$StatsBig = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatsBig;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for the title and subtitle -->${maybeRenderHead()}<div class="lg:pe-6 xl:pe-12"> <p class="text-6xl font-bold leading-10 text-orange-400 dark:text-orange-300"> ${title} </p> <p class="mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-3">${subTitle}</p> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/StatsBig.astro", undefined);

const $$Astro$1 = createAstro("https://github.com/Jeet-u");
const $$StatsSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StatsSmall;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for title and subtitle -->${maybeRenderHead()}<div> <p class="text-3xl font-bold text-orange-400 dark:text-orange-300">${title}</p> <p class="mt-1 text-neutral-600 dark:text-neutral-400">${subTitle}</p> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/StatsSmall.astro", undefined);

const $$Astro = createAstro("https://github.com/Jeet-u");
const $$FeaturesStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesStats;
  const { title, subTitle, stats, mainStatTitle, mainStatSubTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Main title --> <h2 class="mb-4 text-balance text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle --> ${subTitle && renderTemplate`<p class="mb-16 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p>`} </div> <!-- Grid container for statistics --> <div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12"> <!-- First grid item, showing a big statistics --> <div class="lg:col-span-4"> ${renderComponent($$result, "StatsBig", $$StatsBig, { "title": mainStatTitle, "subTitle": mainStatSubTitle })} </div> <!-- Second grid item, showing multiple small statistics --> ${stats && renderTemplate`<div class="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-neutral-300 lg:before:dark:bg-neutral-700"> <div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3"> <!-- Iterate over the 'stats' array and create a 'StatsSmall' component for each object in the array --> ${stats.map((stat) => renderTemplate`${renderComponent($$result, "StatsSmall", $$StatsSmall, { "title": stat.stat, "subTitle": stat.description })}`)} </div> </div>`} </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/features/FeaturesStats.astro", undefined);

const personWorking = new Proxy({"src":"/_astro/person-working.DYPeA1E3.avif","width":3681,"height":5521,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/person-working.avif";
							}
							
							return target[name];
						}
					});

const beforeAfter = new Proxy({"src":"/_astro/before-after.BKkNRjmC.avif","width":1024,"height":576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/before-after.avif";
							}
							
							return target[name];
						}
					});

const constructionWorkers = new Proxy({"src":"/_astro/construction-workers.D0B7S_GC.avif","width":400,"height":267,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/construction-workers.avif";
							}
							
							return target[name];
						}
					});

const aerialView = new Proxy({"src":"/_astro/aerial-view.DmlJ18s4.avif","width":1080,"height":720,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/aerial-view.avif";
							}
							
							return target[name];
						}
					});

const progressBuilding = new Proxy({"src":"/_astro/progress-building.DZuIdI4B.avif","width":1080,"height":1620,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/progress-building.avif";
							}
							
							return target[name];
						}
					});

const underConstruction = new Proxy({"src":"/_astro/under-construction.CB-xAgzD.avif","width":1080,"height":1620,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/under-construction.avif";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      isRightSection: true,
      title: "Robust Features",
      subTitle: "Minimize complexity, maximize productivity. SysForge's robust features are engineered to streamline your web development process, delivering results that stand out for their excellence.",
      single: false,
      imgOne: personWorking,
      imgOneAlt: "Blueprints and digital tablet with construction plans.",
      imgTwo: personWorking,
      imgTwoAlt: "Person working in the office"
    },
    {
      isRightSection: false,
      title: "Crafting Dynamic Web Experiences",
      subTitle: "Our team of expert developers brings creativity and innovation to every project. From designing interactive websites to developing engaging web applications, SysForge offers comprehensive development services to transform your ideas into dynamic online experiences. We ensure the highest standards of quality and functionality, utilizing cutting-edge technologies and programming languages tailored to your project's needs.",
      img: beforeAfter,
      imgAlt: "Construction site before and after",
      btnExists: true,
      btnTitle: "Learn More",
      btnURL: "#"
    },
    {
      isRightSection: true,
      title: "Navigating Projects with Professional Oversight",
      subTitle: "Effective project management is at the heart of any successful build. SysForge provides thorough planning and robust management services that keep your project on time and within budget. Let us handle the complexities of workflow coordination, resource allocation, and stakeholder communication while you focus on your vision.",
      single: false,
      imgOne: constructionWorkers,
      imgOneAlt: "Construction workers orchestrating a project",
      imgTwo: aerialView,
      imgTwoAlt: "Aerial view of managed construction"
    },
    {
      isRightSection: false,
      title: "Ensuring Long-lasting Performance",
      subTitle: "Our commitment to your project doesn't end at completion. SysForge offers ongoing maintenance and support services to ensure your construction's longevity and performance. From regular check-ups to emergency assistance, our responsive team is there to provide seamless support.",
      img: usingTools,
      imgAlt: "Man in orange and black vest wearing white helmet holding yellow and black power tool"
    },
    {
      isRightSection: true,
      title: "Crafting Bespoke Strategies for Unique Challenges",
      subTitle: "For our larger enterprise clients, SysForge offers custom solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward.",
      single: false,
      imgOne: progressBuilding,
      imgOneAlt: "In progress building structure",
      imgTwo: underConstruction,
      imgTwoAlt: "Brown and gray building under construction",
      btnExists: true,
      btnTitle: "Read more",
      btnURL: "#"
    }
  ];
  const pageTitle = `Services | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/services",
    "url": "https://screwfast.uk/services",
    "name": "Expert Consultation Services | SysForge",
    "description": "Uniting expertise with your vision, SysForge provides exceptional service and comprehensive solutions in the technology and web development industry, from consultation to project completion.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "SysForge",
      "description": "SysForge offers top-tier technology tools and expert development services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Uniting Expertise with Your Vision", "subTitle": "At SysForge, we take pride in providing comprehensive solutions and exceptional service in the technology and web development industry. Our experienced team is dedicated to supporting your project from inception to completion with a range of specialized services.", "btnExists": true, "btnTitle": "Schedule a Consultation", "btnURL": "#" })}  ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": "By the Numbers", "subTitle": "Our commitment to quality and reliability is evident in every project we undertake. At SysForge, we are dedicated to delivering industry-leading services that ensure your technology and web development projects are built to last.", "mainStatTitle": "96%", "mainStatSubTitle": "of our clients rate their experience with SysForge as exceptional", "stats": [
    {
      stat: "99.8%",
      description: "project completion rate"
    },
    {
      stat: "5,000+",
      description: "successful installations"
    },
    {
      stat: "85%",
      description: "client growth year-over-year"
    }
  ] })}` })}`;
}, "/home/circuit/Technologies-Porject-5/src/pages/services.astro", undefined);

const $$file = "/home/circuit/Technologies-Porject-5/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
