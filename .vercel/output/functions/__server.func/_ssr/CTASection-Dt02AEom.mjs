import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button } from "./projects-Cqn5UvRJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Container } from "./router-XPLMX7Ym.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-Dt02AEom.js
var import_jsx_runtime = require_jsx_runtime();
function CTASection({ title = "Have a business that needs a better website?", description = "Tell me what you're building. I'll help you figure out what the website actually needs—not just what looks good.", primary = {
	to: "/contact",
	label: "Start a Project"
}, secondary = {
	to: "/work",
	label: "View Work"
} }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-accent text-accent-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl leading-tight sm:text-4xl lg:text-5xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-accent-fg/80 sm:text-lg",
						children: description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "invert",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: primary.to,
								children: primary.label
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "border border-accent-fg/20 bg-transparent text-accent-fg hover:bg-accent-fg/8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: secondary.to,
								children: secondary.label
							})
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { CTASection as t };
