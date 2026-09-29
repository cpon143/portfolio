import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, r as images } from "./projects-Cqn5UvRJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as properties } from "./router-XPLMX7Ym.mjs";
import { a as IntentBar, i as DemoNav, n as DemoEnquiry, r as DemoFooter } from "./ConceptFrame-ByZpfS83.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RealEstateSite-B_YOpfB1.js
var import_jsx_runtime = require_jsx_runtime();
function PropertyCard({ property }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/work/real-estate/properties/$slug",
			params: { slug: property.slug },
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: property.image,
				alt: `${property.title} in ${property.location}`,
				className: "aspect-[16/10] w-full object-cover",
				width: 1200,
				height: 750,
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.14em] text-fg-subtle",
						children: [
							property.type,
							" · ",
							property.location
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-lg font-medium",
						children: property.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted",
						children: property.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex flex-wrap gap-3 text-sm text-fg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [property.bedrooms, " beds"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: property.area }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-fg",
								children: property.price
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-medium",
						children: "View Property"
					})
				]
			})]
		})
	});
}
function RealEstateSite() {
	const cta = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoEnquiry, {
		title: "Schedule a site visit",
		subtitle: "A live agency would confirm a viewing slot. This is a demonstration.",
		submitLabel: "Schedule a Site Visit",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Schedule a Site Visit" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "demo-real-estate",
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentBar, {
				industry: "Real Estate",
				goal: "Property enquiries / site visits",
				cta: "Schedule a Site Visit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNav, {
				brand: "URBANNEST",
				links: [
					{
						href: "#properties",
						label: "Properties"
					},
					{
						href: "#buy-rent",
						label: "Buy & Rent"
					},
					{
						href: "#why",
						label: "Why UrbanNest"
					},
					{
						href: "#contact",
						label: "Contact"
					}
				],
				cta
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.realEstate,
						alt: "Contemporary residence with a pool at dusk",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-fg/45" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 py-16 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl text-accent-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-4xl leading-tight sm:text-6xl",
									children: "Find a Place You’ll Love to Call Home."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg text-accent-fg/85",
									children: "Explore carefully selected residential properties in Bengaluru."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "invert",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#properties",
											children: "Explore Properties"
										})
									}), cta]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "properties",
				className: "py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl",
							children: "Featured properties"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-fg-subtle",
							children: "Demo listings and prices — fictional examples only."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2",
							children: properties.map((property) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property }, property.slug))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "buy-rent",
				className: "border-y border-border bg-bg-elevated py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-medium",
							children: "Buy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-fg-muted",
							children: "Apartments and villas with enough detail to decide whether a site visit is worth the morning."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-medium",
							children: "Rent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-fg-muted",
							children: "A parallel path for tenants: photos, area, and a request to view — without a cluttered classifieds layout."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "why",
				className: "py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Why UrbanNest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-5 md:grid-cols-3",
						children: [
							["Inspected listings", "Each home is presented with the facts a buyer actually asks for."],
							["Local context", "Neighbourhood notes sit next to the floor area, not in a separate brochure."],
							["A real next step", "Every property ends in a site-visit request, not a dead-end gallery."]
						].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-fg-muted",
								children: body
							})]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-bg-elevated py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-fg-subtle",
						children: "Demo reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg-muted",
								children: "“We booked a visit from the listing page instead of chasing the agent on three different apps.”"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-3 text-sm font-medium",
								children: "Priya & Arjun — demo review"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg-muted",
								children: "“The prices were labelled clearly as examples. The layout still felt like a proper agency.”"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-3 text-sm font-medium",
								children: "Karthik S. — demo review"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "bg-accent py-16 text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl",
							children: "Schedule a site visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-accent-fg/80",
							children: "Tell us which home you want to walk through. A live desk would confirm a slot the same day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: cta
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoFooter, {
				brand: "UrbanNest Realty",
				note: "Fictional property agency. Listings, prices and reviews are demonstration content."
			})
		]
	});
}
//#endregion
export { RealEstateSite as n, PropertyCard as t };
