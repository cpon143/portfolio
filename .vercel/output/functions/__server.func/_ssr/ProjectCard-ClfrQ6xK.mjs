import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as cn } from "./projects-Cqn5UvRJ.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-ClfrQ6xK.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ project, featured = false }) {
	const cta = project.kind === "real" ? "View case study" : "View Concept";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-250 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]", featured && "sm:col-span-2"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: project.href,
			className: "block h-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative overflow-hidden bg-border", featured ? "aspect-[16/9]" : "aspect-[16/10]"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.imageAlt,
					className: "size-full object-cover transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.03]",
					width: 1600,
					height: featured ? 900 : 1e3,
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 rounded-sm bg-bg/92 px-2 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-fg",
					children: project.kind === "real" ? "Real project" : "Website concept"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-[calc(100%-0px)] flex-col justify-between gap-6 p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.14em] text-fg-subtle",
						children: project.industry
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-xl font-medium sm:text-2xl",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg-muted",
						children: project.kind === "real" ? project.summary : `Goal: ${project.goal}`
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 text-sm font-medium",
					children: [cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				})]
			})]
		})
	});
}
//#endregion
export { ProjectCard as t };
