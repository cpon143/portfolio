import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, o as cn, s as formatInrCompact } from "./projects-Cqn5UvRJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RefreshCw, l as LayoutTemplate, r as Store, u as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { o as Container } from "./router-XPLMX7Ym.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProcessSection-D_n7SLxO.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left", invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-xs font-medium uppercase tracking-[0.18em]", invert ? "text-accent-fg/70" : "text-fg-subtle"),
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("font-display mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]", invert ? "text-accent-fg" : "text-fg"),
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 text-base leading-relaxed sm:text-lg", invert ? "text-accent-fg/80" : "text-fg-muted"),
				children: description
			}) : null
		]
	});
}
var services = [
	{
		slug: "business-websites",
		title: "Business Websites",
		startingFrom: 3999,
		summary: "Professional websites designed around your business, customers and goals.",
		included: [
			"Mobile-first layout for phones, tablets and desktops",
			"Clear structure for services, trust and contact",
			"WhatsApp and enquiry actions",
			"Basic on-page SEO setup",
			"Handover of the finished website"
		],
		suitableFor: "Shops, clinics, consultancies, local service businesses."
	},
	{
		slug: "landing-pages",
		title: "Landing Pages",
		startingFrom: 2999,
		summary: "Focused pages for services, campaigns, offers and lead generation.",
		included: [
			"Single-purpose page around one offer",
			"Strong headline, proof and call to action",
			"Lead form or WhatsApp conversion",
			"Fast load on mobile"
		],
		suitableFor: "Campaigns, new services, ads, and one-offer businesses."
	},
	{
		slug: "website-redesign",
		title: "Website Redesign",
		startingFrom: 4999,
		summary: "Modernize an outdated website while preserving the information and functionality that matter.",
		included: [
			"Review of the current site and what to keep",
			"New structure and visual direction",
			"Improved mobile experience",
			"Clearer enquiry paths"
		],
		suitableFor: "Businesses with a website that looks dated or is hard to use on a phone."
	},
	{
		slug: "business-dashboards",
		title: "Business Dashboards",
		startingFrom: 4999,
		summary: "Simple dashboards for tracking leads, sales, operations, inventory or other business data.",
		included: [
			"A focused set of screens for your workflow",
			"Clear tables, filters and status views",
			"Desktop-first with usable mobile layouts",
			"Quoted to the data and tools you already use"
		],
		suitableFor: "Owners who need a simple internal tool, not a complex custom product."
	}
];
var icons = {
	"business-websites": Store,
	"landing-pages": LayoutTemplate,
	"website-redesign": RefreshCw,
	"business-dashboards": LayoutDashboard
};
function ServiceCard({ service }) {
	const Icon = icons[service.slug] ?? Store;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-md bg-accent/8 text-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-xl font-medium",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-fg-muted",
				children: service.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-fg",
				children: ["Starting from ", formatInrCompact(service.startingFrom)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex-1 space-y-2 text-sm text-fg-muted",
				children: service.included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "secondary",
				className: "mt-6 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "Start a Project"
				})
			})
		]
	});
}
var steps = [
	{
		n: "01",
		title: "Tell Me About Your Business",
		body: "We understand your services, customers and goals."
	},
	{
		n: "02",
		title: "Plan & Design",
		body: "We define the structure, content and visual direction."
	},
	{
		n: "03",
		title: "Build",
		body: "The approved direction is developed into a responsive website."
	},
	{
		n: "04",
		title: "Launch",
		body: "Your website is configured and prepared for real customers."
	}
];
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Process",
			title: "How it works",
			description: "A straightforward sequence so you always know what happens next."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-12 grid gap-px overflow-hidden rounded-xl bg-border shadow-[var(--shadow-border)] sm:grid-cols-2 lg:grid-cols-4",
			children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "bg-surface p-6 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-fg-subtle",
						children: step.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-lg font-medium",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg-muted",
						children: step.body
					})
				]
			}, step.n))
		})] })
	});
}
//#endregion
export { services as i, SectionHeading as n, ServiceCard as r, ProcessSection as t };
