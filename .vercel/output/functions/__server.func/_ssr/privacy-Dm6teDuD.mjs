import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as SiteLayout, d as site, o as Container } from "./router-XPLMX7Ym.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-Dm6teDuD.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		stickyCta: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl sm:text-5xl",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-fg-muted",
						children: "Last updated: 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-6 text-base leading-relaxed text-fg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"This website is operated by ",
								site.owner,
								" (",
								site.name,
								"). It is a business website for web design and development services."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "What is collected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you submit the contact form, the details you enter — such as name, business name, email, WhatsApp number and project notes — are used to reply about a possible website project." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "How it is used"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Enquiries are used only to discuss, quote and deliver website work. They are not sold. Email and WhatsApp may be used to continue the conversation you started." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "Storage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Until an email or form backend is connected, form submissions on this preview may be stored only in your browser session and are not delivered as email. When a delivery method is connected, the same fields will be sent to ",
								site.email,
								" or the configured inboxes."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-medium text-fg",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Questions about this notice can be sent to",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-fg underline-offset-4 hover:underline",
									href: `mailto:${site.email}`,
									children: site.email
								}),
								"."
							] })
						]
					})
				]
			})
		})
	});
}
//#endregion
export { PrivacyPage as component };
