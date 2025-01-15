/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, j as renderSlot, e as renderScript } from '../chunks/astro/server_C95AHqwB.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_CTGQTF77.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_foqUXNTe.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_C9qxDUIH.mjs';
import 'clsx';
import { f as featureImage } from '../chunks/features-image_4ZtAY4OE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$j = createAstro("https://github.com/Jeet-u");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/buttons/SecondaryCTA.astro", undefined);

const $$Astro$i = createAstro("https://github.com/Jeet-u");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800", "src": src, "alt": alt, "inferSize": true, "loading": "eager" })}`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/avatars/Avatar.astro", undefined);

const $$FullStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path> </svg>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/stars/FullStar.astro", undefined);

const $$HalfStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"></path> <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"></path> </svg>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/stars/HalfStar.astro", undefined);

const $$Astro$h = createAstro("https://github.com/Jeet-u");
const $$ReviewComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ReviewComponent;
  const { avatars, starCount = 0, rating, reviews } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 lg:mt-10"> <div class="py-5"> <div class="text-center sm:flex sm:items-center sm:text-start"> <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5"> <!-- Avatar Group --> <div class="flex justify-center -space-x-3"> ${avatars?.map((src) => renderTemplate`${renderComponent($$result, "Avatar", $$Avatar, { "src": src, "alt": "Avatar Description" })}`)} <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800"> <span class="text-xs font-medium uppercase leading-none text-white">7k+</span> </span> </div> </div> <div class="mx-auto h-px w-32 border-t border-neutral-400 dark:border-neutral-500 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"></div> <!-- Review Ratings --> <div class="flex flex-col items-center sm:items-start"> <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0"> <div class="flex space-x-1"> <!-- Your star ratings --> ${Array(starCount).fill(0).map((_, i) => renderTemplate`${renderComponent($$result, "FullStar", $$FullStar, { "key": i })}`)} <!-- Adding additional half-star --> ${renderComponent($$result, "HalfStar", $$HalfStar, {})} </div> <p class="text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(rating)}` })} </p> </div> <div class="text-sm text-neutral-800 dark:text-neutral-200 sm:ps-5"> <p> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(reviews)}` })} </p> </div> </div> </div> </div> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/ReviewComponent.astro", undefined);

const $$Astro$g = createAstro("https://github.com/Jeet-u");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"> ${subTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> <!-- Review Section: This section presents avatars, review ratings and the number of reviews --> ${withReview ? renderTemplate`${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews })}` : ""} </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/landing/HeroSection.astro", undefined);

const $$Astro$f = createAstro("https://github.com/Jeet-u");
const $$GithubBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$GithubBtn;
  const { title, url } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-3 rounded-full px-4 py-3 text-center text-sm font-medium text-neutral-700 ring-zinc-500 focus-visible:ring transition duration-300 outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:shadow-2xl hover:shadow-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github" })} ${title} </a>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/buttons/GithubBtn.astro", undefined);

const $$Astro$e = createAstro("https://github.com/Jeet-u");
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const btnTitle = Astro2.currentLocale === "fr" ? "Continuer avec Github" : "Continue with Github";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 24 24"> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Github Button --> ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "GithubBtn", $$GithubBtn, { "url": url, "title": btnTitle })} </div>`} </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/landing/HeroSectionAlt.astro", undefined);

const $$Astro$d = createAstro("https://github.com/Jeet-u");
const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ClientsSection;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Title and description --> <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3"> <h2 class="text-balance text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty leading-tight text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <div class="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-24"> <!-- Clients Group SVGs --> <!-- First --> <img alt="" src="google.avif"> <!-- Second --> <img alt="" src="microsoft.avif"> <!-- Third --> <img alt="" src="linux.avif"> <!-- Fourth --> <img alt="" src="android.avif"> </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/landing/ClientsSection.astro", undefined);

const $$Astro$c = createAstro("https://github.com/Jeet-u");
const $$IconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/IconBlock.astro", undefined);

const $$Astro$b = createAstro("https://github.com/Jeet-u");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, src, alt, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Block to display the feature image --> <div class="relative mb-6 overflow-hidden md:mb-8"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full object-cover object-center", "draggable": "false", "format": "avif", "loading": "eager" })}`} </div> <!-- Displaying the main content consisting of title, subtitle, and several \`IconBlock\` components --> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <!-- Block for title and subtitle --> <div class="lg:col-span-1"> <!-- Rendering title --> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${title} </h2> <!-- Rendering subtitle --> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4"> ${subTitle} </p>`} </div> <!-- Block to display the IconBlock components --> <div class="lg:col-span-2"> <div class="grid ml-10 gap-8 sm:grid-cols-2 md:gap-12"> <!-- Injecting IconBlock components with different properties --> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content })}`)} </div> </div> </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/features/FeaturesGeneral.astro", undefined);

const $$Astro$a = createAstro("https://github.com/Jeet-u");
const $$TabNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> ${renderSlot($$result, $$slots["default"])} <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="block text-lg font-bold text-neutral-800 hs-tab-active:text-orange-400 dark:text-neutral-200 dark:hs-tab-active:text-orange-300">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/TabNav.astro", undefined);

const $$Astro$9 = createAstro("https://github.com/Jeet-u");
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  const secondClass = second ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`<!-- Container for tab content that controls visibility and accessibility -->${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": secondClass, "draggable": "false", "format": "avif", "loading": "eager" })} </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/TabContent.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro("https://github.com/Jeet-u");
const $$FeaturesNavs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative p-6 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> `, ` </h2> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> `, ` </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6"> <div class="relative"> <div> `, ' </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12"> <!-- Decorative background and sizing --> <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div> </div> </div> </section> <!--Import the necessary Tabs plugin--> <!--https://preline.co/plugins/html/tabs.html--> <script src="/scripts/vendor/preline/tabs/index.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` }), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first })}`), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`));
}, "/home/circuit/Technologies-Porject-5/src/components/sections/features/FeaturesNavs.astro", undefined);

const $$Astro$7 = createAstro("https://github.com/Jeet-u");
const $$TestimonialItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl italic text-neutral-800 dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/testimonials/TestimonialItem.astro", undefined);

const $$Astro$6 = createAstro("https://github.com/Jeet-u");
const $$StatsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/StatsGrid.astro", undefined);

const $$Astro$5 = createAstro("https://github.com/Jeet-u");
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const {
    title,
    subTitle,
    testimonials,
    statistics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Container for the testimonials --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1"> <!-- Title and Subtitle --> <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. --> ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/testimonials/TestimonialsSection.astro", undefined);

const $$Astro$4 = createAstro("https://github.com/Jeet-u");
const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PricingSection;
  const { pricing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Section heading and sub-heading --> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${pricing.title} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${pricing.subTitle} </p> </div> <!-- Contains two main product blocks --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-0"> <!-- Starter Kit product details --> <div class="w-full rounded-xl bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3"> <div class="mb-4"> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.starterKit.name} </h3> <p class="text-indigo-300">${pricing.starterKit.description}</p> </div> <div class="mb-4"> <span class="text-4xl font-bold text-neutral-200">${pricing.starterKit.price}</span> <span class="text-lg font-bold text-neutral-300">${pricing.starterKit.cents}</span> <span class="ms-3 text-sm text-indigo-200">${pricing.starterKit.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-neutral-300"> ${pricing.starterKit.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.starterKit.purchaseLink, "href")} class="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-bold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">${pricing.starterKit.purchaseBtnTitle}</a> </div> <!-- Professional Toolbox product details --> <div class="w-full rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#F09819] p-6 shadow-xl sm:w-1/2 sm:p-8"> <div class="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"> <div> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.professionalToolbox.name} </h3> <p class="text-orange-200">${pricing.professionalToolbox.description}</p> </div> <span class="order-first inline-block rounded-full bg-orange-200 bg-opacity-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-center text-orange-600 lg:order-none">${pricing.badge}</span> </div> <div class="mb-4"> <span class="text-6xl font-bold text-neutral-200">${pricing.professionalToolbox.price}</span> <span class="text-lg font-bold text-orange-100">${pricing.professionalToolbox.cents}</span> <span class="ms-3 text-orange-200">${pricing.professionalToolbox.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-orange-100"> ${pricing.professionalToolbox.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.professionalToolbox.purchaseLink, "href")} class="block rounded-lg bg-orange-200 bg-opacity-50 px-8 py-3 text-center text-sm font-bold text-neutral-100 outline-none ring-orange-300 transition duration-100 hover:bg-orange-300 hover:bg-opacity-50 focus-visible:ring active:bg-orange-400 md:text-base">${pricing.professionalToolbox.purchaseBtnTitle}</a> </div> </div> <!-- Call to action for Enterprise Solutions --> <div class="mt-8 flex items-center justify-center gap-x-3 md:mt-12"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${pricing.thirdOption} </p> ${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": pricing.btnText, "url": "#" })} </div> </section>`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/pricing/PricingSection.astro", undefined);

const $$Astro$3 = createAstro("https://github.com/Jeet-u");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/AccordionItem.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://github.com/Jeet-u");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate(_a || (_a = __template(["<!-- Main container that holds all content. Customized for different viewport sizes. -->", '<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ', ' </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ', ' </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ', ' </div> </div> </div> </section> <!--Import the necessary Accordion plugin--> <!--https://preline.co/plugins/html/accordion.html--> <script src="/scripts/vendor/preline/accordion/index.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` }), faqs.subTitle, faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  }));
}, "/home/circuit/Technologies-Porject-5/src/components/sections/FAQ.astro", undefined);

const $$Astro$1 = createAstro("https://github.com/Jeet-u");
const $$AnnouncementBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnnouncementBanner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed bottom-0 start-1/2 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl bg-neutral-800 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat p-4 text-center shadow-sm dark:bg-neutral-200"> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium text-neutral-50 dark:text-neutral-700"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 backdrop-brightness-75 sm:backdrop-brightness-100 px-3 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:backdrop-brightness-100 white:border-neutral-700 white:text-neutral-700 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none"${addAttribute(url, "href")} target="_blank"> ${btnTitle} <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} ${renderScript($$result, "/home/circuit/Technologies-Porject-5/src/components/ui/banners/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/banners/AnnouncementBanner.astro", undefined);

const heroImage = new Proxy({"src":"/_astro/hero-image.ChZZRo7L.avif","width":4505,"height":2552,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/hero-image.avif";
							}
							
							return target[name];
						}
					});

const subTitle$1 = "Ask us anything about our brand and products, and get factual responses.";
const faqs = [{"question":"What programming languages and frameworks are covered in the Starter Kit?","answer":"The Starter Kit includes resources and tools for learning and practicing popular programming languages such as JavaScript, Python, HTML/CSS, and more. Additionally, it provides introductory materials and hands-on exercises for popular frameworks like React, Vue.js, and Django. It's designed to provide a comprehensive foundation for aspiring developers to explore various programming languages and frameworks."},{"question":"Can I upgrade from the Starter Kit to the Professional Toolbox for advanced programming tools and networking resources?","answer":"Yes, you can seamlessly upgrade to the Professional Toolbox at any time to gain access to a broader range of advanced programming tools, libraries, and frameworks. Additionally, the Professional Toolbox includes networking resources and materials for aspiring network administrators. You'll also receive priority customer support and exclusive content to further enhance your development and networking experience."},{"question":"Are there discounts available for bulk orders of programming tools and networking equipment through the Professional Toolbox plan?","answer":"Professional Toolbox members can enjoy exclusive discounts on bulk orders of programming tools and networking equipment. The discounts may vary depending on the volume of the order. Feel free to reach out to us to discuss your requirements, and we'll provide you with a customized discount structure."},{"question":"What level of customer support can I expect as a SysForge customer?","answer":"As a SysForge customer, you'll receive dedicated email support. The Starter Kit comes with standard support, while upgrading to the Professional Toolbox grants you priority support. With priority support, you can expect faster response times and specialized assistance tailored to your programming and networking needs."},{"question":"How up-to-date are the online programming resources, tutorials, and networking guides provided by SysForge?","answer":"At SysForge, we continuously update our online programming resources, tutorials, and networking guides to reflect the latest trends and technologies in the industry. Our goal is to provide comprehensive and up-to-date material that caters to programmers and network administrators of all skill levels."},{"question":"Does SysForge offer services for large-scale development projects and network infrastructure?","answer":"Yes, SysForge provides Enterprise Solutions tailored for companies undertaking large-scale development projects and network infrastructure setups. Our services include consultation, planning, and supply of high-quality tools, resources, and networking equipment. Additionally, we offer staffing solutions to meet the demands of significant development and networking endeavors. Contact us today for a customized quote."}];
const faqs$1 = {
  subTitle: subTitle$1,
  faqs,
};

const features = [
	{
		heading: "Frontend Development",
		content: "Explore the latest tools and techniques in frontend development to create captivating user interfaces and delightful user experiences.",
		svg: "code"
	},
	{
		heading: "Backend Development",
		content: "Master backend technologies and frameworks to build robust, scalable, and secure web applications that handle complex business logic.",
		svg: "server"
	},
	{
		heading: "DevOps Practices",
		content: "Learn essential DevOps practices to optimize development workflows, automate deployments, and ensure reliability and performance of web services.",
		svg: "cog"
	},
	{
		heading: "System Administration",
		content: "Gain expertise in system administration to manage servers, networks, and infrastructure effectively, ensuring optimal performance and security.",
		svg: "network"
	}
];

const title = "Advanced Solutions for Modern Development";
const subTitle = "Elevate your projects with SysForge's innovative plans designed for cutting-edge development.";
const badge = "Premium Quality";
const thirdOption = "Enterprise Solutions?";
const btnText = "Request a Custom Quote";
const starterKit = {"name":"Professional Diagnosis","description":"Save money with an accurate diagnosis and fully guaranteed repairs","price":"$50","cents":".00","billingFrequency":"USD","features":["A comprehensive analysis of your device with no risk of data loss","Expert Recommendations for the best repair options at the most competitive prices","Trust our service to extend the life of your device with the best solutions"],"purchaseBtnTitle":"Get Started","purchaseLink":"#"};
const professionalToolbox = {"name":"Premium Complete Repair","description":"Comprehensive service to restore yout device with quality and guarantee","price":"$99","cents":".00","billingFrequency":"USD","features":["We use certified replacement parts to ensure the best performance for your device","Our skilled team provides precise and reliable repairs","Protect your device in top condition with our professional internal cleaning service"],"purchaseBtnTitle":"Upgrade Now","purchaseLink":"#"};
const pricing = {
  title,
  subTitle,
  badge,
  thirdOption,
  btnText,
  starterKit,
  professionalToolbox,
};

const construction = new Proxy({"src":"/_astro/pexels.BbuZdalI.avif","width":3936,"height":2624,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/pexels.avif";
							}
							
							return target[name];
						}
					});

const tools = new Proxy({"src":"/_astro/automated-tools.CqRvyNnr.avif","width":3936,"height":2624,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/automated-tools.avif";
							}
							
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dashboard-image.C5WZtXfx.avif","width":3936,"height":2624,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/dashboard-image.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://github.com/Jeet-u");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "Explore on GitHub", "url": "https://github.com/Jeet-u/" })} ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Your One Stop Shop for Repairs and Web Development <span
        class="text-yellow-500 dark:text-yellow-400">SysForge</span>`, "subTitle": "Expert microsoldering and precision repairs for your devices. Plus, modern web development to bring your ideas to life online.", "primaryBtn": "Get Started", "primaryBtnURL": "/products", "secondaryBtn": "Contact Sales Team", "secondaryBtnURL": "/contact", "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `From Over <span class="font-bold">12.8k</span> Reviews`, "src": heroImage, "alt": "Stack of SysForge product boxes containing assorted development tools" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Trusted by Leading Innovators", "subTitle": "Join industry giants who rely on SysForge to power their digital initiatives." })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Crafting Dynamic Web Experiences", "subTitle": "SysForge empowers you to create dynamic web applications that engage users and deliver immersive experiences. From interactive web pages to real-time data visualization, the possibilities are endless.", "src": featureImage, "alt": "SysForge products in floating boxes", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Tailor <span class="text-yellow-500 dark:text-yellow-400">SysForge Technologies</span> to Elevate Your Microsoldering Projects.`, "tabs": [
    {
      heading: "Board-Level Repairs",
      content: "Leverage PrecisionTech's advanced tools and guides to tackle board-level repairs with confidence. Whether you're fixing damaged traces, replacing components, or dealing with delicate connections, our platform equips you to restore devices to optimal performance.",
      svg: "automation",
      src: tools,
      alt: "Developers collaborating on game development",
      first: true
    },
    {
      heading: "Component-Level Diagnostics",
      content: "PrecisionTech offers a comprehensive suite of diagnostic tools for pinpointing issues at the component level. From identifying shorts to testing voltage levels, our solutions help you accurately diagnose and resolve complex hardware problems.",
      svg: "network",
      src: dashboard,
      alt: "Sustainable web development practices",
      second: true
    },
    {
      heading: "Training & Support",
      content: "With PrecisionTech's training resources and expert support, you can sharpen your microsoldering skills. From beginner tutorials to advanced techniques, our platform provides the knowledge and guidance needed to excel in every repair task.",
      svg: "devops",
      src: construction,
      alt: "Innovative development solutions"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Accelerate Your Development Projects", "subTitle": "SysForge ensures rapid development with instant setup. Experience the speed of development redefined.", ";": true, "testimonials": [
    {
      content: "SysForge dramatically boosted our project efficiency. Setup was instant, and their rapid response times are phenomenal. Truly a game-changer in web development and support!",
      author: "Samantha Ruiz",
      role: "Chief Operating Officer | DevelopIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "70k+",
      description: "customers equipped \u2014 from individual developers to major corporations"
    },
    {
      count: "35%",
      description: "uptick in project efficiency with SysForge tools and services"
    },
    {
      count: "15.3%",
      description: "reduction in maintenance costs reported by long-term clients"
    },
    {
      count: "2x",
      description: "quicker development using innovative solutions"
    }
  ] })} ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Frequently<br />asked questions", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Let's Build Together", "subTitle": "SysForge is an open-source template, meticulously crafted with Astro, Tailwind CSS, and Preline UI frameworks.", "url": "https://github.com/Jeet-u" })} ` })}`;
}, "/home/circuit/Technologies-Porject-5/src/pages/index.astro", undefined);

const $$file = "/home/circuit/Technologies-Porject-5/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
