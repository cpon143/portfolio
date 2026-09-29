import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as SiteLayout, d as site, o as Container } from "./router-XPLMX7Ym.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-BoWMYRVH.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		stickyCta: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl sm:text-5xl",
						children: "Terms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-fg-muted",
						children: "Last updated: 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-6 text-base leading-relaxed text-fg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "These notes describe the usual working arrangement for website projects. A written quote confirms the actual scope, timeline and fee for each job." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "Quotes and payment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Published prices are starting points, not fixed packages. Work begins after the quote is agreed. The proposed structure is",
								" ",
								site.payment.advancePercent,
								"% before development and",
								" ",
								site.payment.remainderPercent,
								"% before launch and handover.",
								" ",
								site.payment.note
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "Ownership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Domain names and hosting accounts can be purchased and held by the client. After final payment, the completed website files for the agreed scope are handed over for the client’s use." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "Website concepts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pages under /work for education, real estate, fitness, beauty and professional services are fictional demonstration websites. They are not live client businesses and their testimonials, prices and contact details are examples only." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-fg underline-offset-4 hover:underline",
								href: `mailto:${site.email}`,
								children: site.email
							}) })
						]
					})
				]
			})
		})
	});
}
//#endregion
export { TermsPage as component };
