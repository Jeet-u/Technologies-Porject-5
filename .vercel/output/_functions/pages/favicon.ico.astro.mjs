import { loadImage, createCanvas } from 'canvas';
import pngToIco from 'png-to-ico';
import nodePath from 'node:path';
export { renderers } from '../renderers.mjs';

const faviconSrc = nodePath.resolve("src/images/icon.png");
const GET = async () => {
  const sizes = [16, 32];
  const buffers = await Promise.all(
    sizes.map(async (size) => {
      const image = await loadImage(faviconSrc);
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, size, size);
      return canvas.toBuffer("image/png");
    })
  );
  const icoBuffer = await pngToIco(buffers);
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
