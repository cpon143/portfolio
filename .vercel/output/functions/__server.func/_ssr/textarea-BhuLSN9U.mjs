import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as cn } from "./projects-Cqn5UvRJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-BhuLSN9U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = (0, import_react.forwardRef)(function Input({ className, type = "text", ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref,
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface px-3.5 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-fg-subtle", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
});
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
var Textarea = (0, import_react.forwardRef)(function Textarea({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		ref,
		className: cn("flex min-h-28 w-full rounded-md bg-surface px-3.5 py-3 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-fg-subtle", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
});
//#endregion
export { Label as n, Textarea as r, Input as t };
