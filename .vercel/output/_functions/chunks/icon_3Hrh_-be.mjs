const icon = new Proxy({"src":"/_astro/icon.CzwfLEs8.png","width":50,"height":49,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/circuit/Technologies-Porject-5/src/images/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as i };
