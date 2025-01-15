/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, j as renderSlot, d as renderComponent, u as unescapeHTML, F as Fragment, e as renderScript } from '../chunks/astro/server_C95AHqwB.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from '../chunks/MainLayout_CTGQTF77.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://github.com/Jeet-u");
const $$AuthBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AuthBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:bg-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const disabledClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  return renderTemplate`<!-- Styled submit button with dynamic title -->${maybeRenderHead()}<button type="submit"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`, "class")}>${title}</button>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/buttons/AuthBtn.astro", undefined);

const $$Astro$4 = createAstro("https://github.com/Jeet-u");
const $$ContactIconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`<!-- Root container, which arranges the heading and content -->${maybeRenderHead()}<div class="flex gap-x-7 py-6"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3 class="font-bold text-neutral-700 dark:text-neutral-300"> ${heading} </h3> <!-- Content of the section --> <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">${content}</p> <!-- Conditional rendering of address content if isAddressVisible is true --> ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm italic text-neutral-500">${addressContent}</p>` : null} <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true --> ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 "${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/blocks/ContactIconBlock.astro", undefined);

const $$Astro$3 = createAstro("https://github.com/Jeet-u");
const $$TextInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TextInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(name, "name")}${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/forms/input/TextInput.astro", undefined);

const $$Astro$2 = createAstro("https://github.com/Jeet-u");
const $$EmailContactInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EmailContactInput;
  const { label = Astro2.currentLocale === "fr" ? "E-mail" : "Email", id } = Astro2.props;
  return renderTemplate`<!-- Container for the label and email input field -->${maybeRenderHead()}<div> <!-- Label for the email input field, visually hidden but accessible to screen readers --> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <!-- Email input field --> <input type="email" name="email"${addAttribute(id, "id")} autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1" placeholder="Email"> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/forms/input/EmailContactInput.astro", undefined);

const $$Astro$1 = createAstro("https://github.com/Jeet-u");
const $$PhoneInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PhoneInput;
  const { label = Astro2.currentLocale === "fr" ? "Num\xE9ro de t\xE9l\xE9phone" : "Phone Number", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="tel" name="phone"${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/forms/input/PhoneInput.astro", undefined);

const $$Astro = createAstro("https://github.com/Jeet-u");
const $$TextAreaInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextAreaInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")} rows="4" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}></textarea> </div>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/forms/input/TextAreaInput.astro", undefined);

const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Contact us";
  const subTitle = "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.";
  const formTitle = "Fill in the form below";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> <form id="contactForm" method="POST"> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "firstname", "label": "First Name", "name": "firstName" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "lastname", "label": "Last Name", "name": "lastName" })} </div> ${renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "name": "email", "id": "email" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "name": "phone", "id": "phone" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "message", "label": "Details", "name": "message" })} </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Send Message" })} </div> </form> </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Knowledgebase", "content": "Technology is rapidly changing the way we live and work", "isLinkVisible": true, "linkTitle": "Visit guides & tutorials", "linkURL": "services", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "question" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "FAQ", "content": "Explore our FAQ for quick, clear answers to common queries.", "isLinkVisible": true, "linkTitle": "Visit FAQ", "linkURL": "#", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chatBubble" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Visit our office", "content": "US SysForge.Technologies", "isAddressVisible": true, "addressContent": "Houston, Texas" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contact us by email", "content": "Prefer the written word? Drop us an email at", "isLinkVisible": true, "linkTitle": "SysForge.Technologies@proton.me", "linkURL": "#" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "envelopeOpen" })} ` })} </div> </div> </div> </section> ${renderScript($$result, "/home/circuit/Technologies-Porject-5/src/components/sections/ContactSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/circuit/Technologies-Porject-5/src/components/sections/ContactSection.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Contact | ${SITE.title}`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sysforge.uk/contact",
    "url": "https://sysforge.uk/contact",
    "name": "Contact Us | SysForge",
    "description": "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://sysforge.uk",
      "name": "SysForge",
      "description": "SysForge offers top-tier software tools and expert services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "/home/circuit/Technologies-Porject-5/src/pages/contact.astro", undefined);

const $$file = "/home/circuit/Technologies-Porject-5/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
