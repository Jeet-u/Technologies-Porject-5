/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderScript } from '../chunks/astro/server_C95AHqwB.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout, S as SITE } from '../chunks/MainLayout_CTGQTF77.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://github.com/Jeet-u");
const $$Btn404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Btn404;
  const { title, id, noArrow } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-none";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Button with dynamic title, id, and optional arrow -->${maybeRenderHead()}<button${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(id, "id")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </button>`;
}, "/home/circuit/Technologies-Porject-5/src/components/ui/buttons/Btn404.astro", undefined);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Page Not Found | ${SITE.title}`;
  const title = "404";
  const subTitle = "Oops, this isn't the tool you were looking for!";
  const content = "Don't let this hiccup slow you down. Let's get you back to building your masterpiece.";
  const btnTitle = "Go Back";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid h-svh place-content-center"> <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16"> <div class="mx-auto max-w-screen-sm text-center"> <h1 class="text-dark mb-4 text-7xl font-extrabold text-yellow-500 dark:text-yellow-400 lg:text-9xl"> ${title} </h1> <p class="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 md:text-4xl"> ${subTitle} </p> <p class="mb-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${content} </p> <!--Display a button that navigates user back to the previous page--> ${renderComponent($$result2, "Btn404", $$Btn404, { "title": btnTitle, "id": "go-back" })} </div> </div> </section> ` })} <!--JavaScript code that adds click event to the Button, resulting in going back to the previous page in history--> ${renderScript($$result, "/home/circuit/Technologies-Porject-5/src/pages/404.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/circuit/Technologies-Porject-5/src/pages/404.astro", undefined);

const $$file = "/home/circuit/Technologies-Porject-5/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
