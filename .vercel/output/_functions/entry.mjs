import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_dXtKVO5i.mjs';
import { manifest } from './manifest_DPVN7uOO.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/favicon.ico.astro.mjs');
const _page8 = () => import('./pages/insights/_---slug_.astro.mjs');
const _page9 = () => import('./pages/manifest.json.astro.mjs');
const _page10 = () => import('./pages/products.astro.mjs');
const _page11 = () => import('./pages/robots.txt.astro.mjs');
const _page12 = () => import('./pages/services.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/favicon.ico.ts", _page7],
    ["src/pages/insights/[...slug].astro", _page8],
    ["src/pages/manifest.json.ts", _page9],
    ["src/pages/products/index.astro", _page10],
    ["src/pages/robots.txt.ts", _page11],
    ["src/pages/services.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d9b55fd2-3e5a-43d8-a74b-7661d2d5589f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
