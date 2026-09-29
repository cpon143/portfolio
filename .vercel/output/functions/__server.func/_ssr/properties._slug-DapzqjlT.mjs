import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, n as getConcept } from "./projects-Cqn5UvRJ.mjs";
import { R as notFound, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as properties, n as Route, r as getProperty } from "./router-XPLMX7Ym.mjs";
import { a as IntentBar, i as DemoNav, n as DemoEnquiry, r as DemoFooter, t as ConceptFrame } from "./ConceptFrame-ByZpfS83.mjs";
import { t as PropertyCard } from "./RealEstateSite-B_YOpfB1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._slug-DapzqjlT.js
var import_jsx_runtime = require_jsx_runtime();
var project = getConcept("real-estate");
function PropertyDetailPage() {
	const { slug } = Route.useParams();
	const property = getProperty(slug);
	if (!property) throw notFound();
	const cta = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoEnquiry, {
		title: "Schedule a site visit",
		subtitle: "Demo only — no real agency receives this request.",
		submitLabel: "Schedule a Site Visit",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Schedule a Site Visit" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptFrame, {
		project,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
							href: "/work/real-estate#properties",
							label: "Properties"
						},
						{
							href: "/work/real-estate#why",
							label: "Why UrbanNest"
						},
						{
							href: "/work/real-estate#contact",
							label: "Contact"
						}
					],
					cta
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: property.image,
							alt: `${property.title} in ${property.location}`,
							className: "aspect-[16/10] w-full rounded-xl object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-fg-subtle",
								children: [property.type, " · Demo listing"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display mt-3 text-4xl",
								children: property.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-fg-muted",
								children: property.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-2xl font-medium",
								children: property.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-fg-subtle",
								children: "Fictional demo price"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 grid grid-cols-3 gap-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "Beds"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1",
										children: property.bedrooms
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "Baths"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1",
										children: property.bathrooms
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "Area"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1",
										children: property.area
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-fg-muted",
								children: property.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: cta
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work/real-estate",
								className: "mt-6 inline-block text-sm text-fg-muted hover:text-fg",
								children: "Back to listings"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-5 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Other demo listings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-6 md:grid-cols-3",
							children: properties.filter((item) => item.slug !== property.slug).slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: item }, item.slug))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoFooter, {
					brand: "UrbanNest Realty",
					note: "Fictional property agency. This listing is demonstration content."
				})
			]
		})
	});
}
//#endregion
export { PropertyDetailPage as component };
