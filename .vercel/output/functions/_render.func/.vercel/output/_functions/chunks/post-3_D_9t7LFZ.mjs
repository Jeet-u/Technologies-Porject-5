import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CDlkp_ya.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Streamline Procurement and Stay Within Budget with SysForge on Linux","description":"Cost-effective, reliable tools for efficient development projects on Linux","author":"Olga Zabegina","role":"Strategic Marketing Manager","authorImage":"@/images/blog/anna.avif","authorImageAlt":"Avatar Description","pubDate":"2024-02-18T00:00:00.000Z","cardImage":"@/images/blog/post-3.avif","cardImageAlt":"Side view worker wearing gloves","readTime":3,"tags":["procurement","affordable","efficiency","Linux"],"contents":["Managing a development project on Linux can be complex, especially when it comes to tool procurement. That's why SysForge is committed to simplifying the process and keeping your projects within budget.","With our line of cost-effective tools and software solutions designed for Linux environments, you can find everything you need without overspending. Our user-centric design ensures that our products are easy to use, saving you time and effort in your development workflow.","But affordability doesn't mean compromising on quality. SysForge products are built to meet the rigorous demands of Linux development, providing reliable performance and durability. And with our extensive documentation and tutorials tailored for Linux users, you can seamlessly integrate our products into your workflow, maximizing efficiency and productivity.","Whether you're a seasoned Linux developer or just starting out, SysForge has the solutions you need to succeed. Experience the difference for yourself and discover why SysForge is the trusted choice for development tools on Linux."]};
				const file = "/home/circuit/Technologies-Porject-5/src/content/blog/en/post-3.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
