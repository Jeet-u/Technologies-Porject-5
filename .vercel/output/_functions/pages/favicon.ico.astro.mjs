import nodePath from 'node:path';
import fs from 'fs';
export { renderers } from '../renderers.mjs';

const faviconSrc = nodePath.resolve("src/images/icon.png");
const GET = async () => {
  const favicon = fs.readFileSync(faviconSrc);
  return new Response(favicon, {
    headers: { "Content-Type": "image/x-icon" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
