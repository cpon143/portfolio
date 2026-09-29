import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as realProjects, t as concepts } from "./projects-Cqn5UvRJ.mjs";
import { a as SiteLayout, o as Container } from "./router-XPLMX7Ym.mjs";
import { t as CTASection } from "./CTASection-Dt02AEom.mjs";
import { t as ProjectCard } from "./ProjectCard-ClfrQ6xK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-CYNgHVRi.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
					children: "Work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl",
					children: "Selected Work & Website Concepts"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-fg-muted",
					children: "Real project experience and purpose-built concepts for businesses across different industries."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium uppercase tracking-[0.16em] text-fg-subtle",
					children: "Real project"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-2",
					children: realProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project,
						featured: true
					}, project.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-16 text-sm font-medium uppercase tracking-[0.16em] text-fg-subtle",
					children: "Website concepts"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-fg-muted",
					children: "These are fictional demonstration businesses. They are not client websites. They show how a site for your industry could be structured to generate enquiries."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: concepts.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.slug))
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { WorkPage as component };
