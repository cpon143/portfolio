import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, s as formatInrCompact } from "./projects-Cqn5UvRJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteLayout, d as site, o as Container } from "./router-XPLMX7Ym.mjs";
import { t as CTASection } from "./CTASection-Dt02AEom.mjs";
import { i as services, r as ServiceCard, t as ProcessSection } from "./ProcessSection-D_n7SLxO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BXCmrsFl.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
					children: "Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl",
					children: "Websites and simple tools built around enquiries."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-fg-muted",
					children: "Starting prices are published so you can plan. The quote always matches the pages, content and functionality your business actually needs."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service }, service.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 max-w-3xl rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-medium",
						children: "What is not included"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg-muted",
						children: "Domain registration, hosting and third-party subscriptions are paid separately and can stay in your own accounts. Complex custom software, mobile apps and ongoing ads management are outside this service list and would be discussed as a different kind of project."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-fg",
						children: [
							"Business websites start from ",
							formatInrCompact(site.startingPrices.website),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Start a Project"
						})
					})
				]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Not sure which of these you need?",
			description: "Send a short note about the business. I’ll recommend a website, a landing page, a redesign or a dashboard — without forcing a package."
		})
	] });
}
//#endregion
export { ServicesPage as component };
