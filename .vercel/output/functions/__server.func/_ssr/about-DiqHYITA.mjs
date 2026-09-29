import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button } from "./projects-Cqn5UvRJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteLayout, d as site, o as Container } from "./router-XPLMX7Ym.mjs";
import { t as CTASection } from "./CTASection-Dt02AEom.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DiqHYITA.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl",
					children: site.owner
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted",
					children: "I build practical websites and digital experiences for businesses that need to look credible and make it easier for customers to get in touch."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl space-y-6 text-base leading-relaxed text-fg-muted lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The work on this site is not a list of frameworks. It is a way for a business owner to see how a website can explain the offer, build trust and collect an enquiry, booking or WhatsApp message." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My background is B.Tech in Computer Science and Engineering, with full-stack web development experience. That technical training sits behind the work — it is how sites are built — but the conversation with you stays in business terms: pages, customers, contact paths and ownership." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"I have worked on the live education platform",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-fg underline-offset-4 hover:underline",
								href: "https://www.studentschoice.in/",
								target: "_blank",
								rel: "noreferrer",
								children: "Students Choice"
							}),
							", which helps students move from exploring education-loan and study-abroad options toward an application."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you run a small or mid-size business in India and the current website is missing, outdated, or not bringing conversations, that is the problem this practice is set up to solve." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-medium",
								children: "Approach"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm leading-relaxed text-fg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Understand the business before choosing a layout." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Design for phones first, because that is how most people arrive." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Keep domain and hosting under the client’s account when possible." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quote before building. Advance before development." })
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
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { AboutPage as component };
