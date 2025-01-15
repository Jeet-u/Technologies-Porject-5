const featureImage = new Proxy({"src":"/_astro/features-image.BjN0zaDK.avif","width":1080,"height":720,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/features-image.avif";
							}
							
							return target[name];
						}
					});

export { featureImage as f };
