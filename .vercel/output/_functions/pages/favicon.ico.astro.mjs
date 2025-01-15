import sharp from 'sharp';
import ico from 'sharp-ico';
import nodePath from 'node:path';
export { renderers } from '../renderers.mjs';

const faviconSrc = nodePath.resolve("src/images/icon.png");
const GET = async () => {
  const sizes = [16, 32];
  const buffers = await Promise.all(
    sizes.map(async (size) => {
      return await sharp(faviconSrc).resize(size).toFormat("png").toBuffer();
    })
  );
  const icoBuffer = ico.encode(buffers);
  return new Response(icoBuffer, {
    headers: { "Content-Type": "image/x-icon" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
