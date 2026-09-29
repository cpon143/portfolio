import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, o as cn } from "./projects-Cqn5UvRJ.mjs";
import { c as Mail } from "../_libs/lucide-react.mjs";
import { a as string, i as object, n as literal, t as _enum } from "../_libs/zod.mjs";
import { a as SiteLayout, c as businessTypes, d as site, f as whatsappHref, l as hasWhatsApp, o as Container, s as budgetOptions, u as needOptions } from "./router-XPLMX7Ym.mjs";
import { n as Label, r as Textarea, t as Input } from "./textarea-BhuLSN9U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-QYvdOflt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("flex h-11 w-full appearance-none rounded-md bg-surface bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 fill=%22none%22 stroke=%22%231a1916%22 stroke-width=%221.5%22><path d=%22m1 1 5 5 5-5%22/></svg>')] bg-[length:12px_8px] bg-[right_14px_center] bg-no-repeat px-3.5 pr-10 text-base text-fg shadow-[var(--shadow-border)]", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children
	});
}
var enquirySchema = object({
	name: string().trim().min(2, "Please enter your name."),
	businessName: string().trim().min(2, "Please enter your business name."),
	email: string().trim().email("Enter a valid email address."),
	whatsapp: string().trim().min(10, "Enter a WhatsApp number we can reach you on."),
	businessType: _enum(businessTypes),
	currentWebsite: string().trim().optional().or(literal("")),
	need: _enum(needOptions),
	budget: _enum(budgetOptions),
	message: string().trim().optional().or(literal(""))
});
/**
* Placeholder integration layer.
* Replace `submitEnquiry` with an email provider, form backend or CRM later.
* Submissions are stored in the browser for this session only — nothing is emailed yet.
*/
async function submitEnquiry(input) {
	const record = {
		...enquirySchema.parse(input),
		submittedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (typeof window !== "undefined") {
		const existing = readStoredEnquiries();
		window.sessionStorage.setItem("mazharul.dev.enquiries", JSON.stringify([...existing, record]));
	}
	return { ok: true };
}
function readStoredEnquiries() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.sessionStorage.getItem("mazharul.dev.enquiries");
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function enquiryToWhatsApp(input) {
	return [
		"Hello Mazharul, I’d like to start a website project.",
		`Name: ${input.name}`,
		`Business: ${input.businessName}`,
		`Type: ${input.businessType}`,
		`Need: ${input.need}`,
		`Budget: ${input.budget}`,
		input.currentWebsite ? `Current website: ${input.currentWebsite}` : null,
		input.message ? `Notes: ${input.message}` : null
	].filter(Boolean).join("\n");
}
var empty = {
	name: "",
	businessName: "",
	email: "",
	whatsapp: "",
	businessType: "Other",
	currentWebsite: "",
	need: "New Website",
	budget: "Not Sure",
	message: ""
};
function ContactForm({ defaultNeed }) {
	const initialNeed = needOptions.includes(defaultNeed) ? defaultNeed : empty.need;
	const [values, setValues] = (0, import_react.useState)({
		...empty,
		need: initialNeed
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	function update(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	}
	async function onSubmit(event) {
		event.preventDefault();
		const result = enquirySchema.safeParse(values);
		if (!result.success) {
			const next = {};
			for (const issue of result.error.issues) {
				const field = issue.path[0];
				if (typeof field === "string" && !next[field]) next[field] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		setStatus("submitting");
		try {
			await submitEnquiry(result.data);
			setStatus("success");
		} catch {
			setStatus("error");
		}
	}
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle",
				children: "Received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl",
				children: "Thank you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-fg-muted",
				children: "I’ll review what you sent and get back to you with questions or a suggested next step. Nothing is launched until we agree on the work and the quote."
			}),
			hasWhatsApp() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappHref(enquiryToWhatsApp(values)),
					children: "Continue on WhatsApp"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-fg-muted",
				children: "Prefer a quicker reply? Mention a good time to talk in a follow-up email."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-8",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						htmlFor: "name",
						error: errors.name,
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							autoComplete: "name",
							value: values.name,
							onChange: (e) => update("name", e.target.value),
							required: true,
							"aria-invalid": Boolean(errors.name),
							"aria-describedby": errors.name ? "name-error" : void 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business name",
						htmlFor: "businessName",
						error: errors.businessName,
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "businessName",
							name: "businessName",
							value: values.businessName,
							onChange: (e) => update("businessName", e.target.value),
							required: true,
							"aria-invalid": Boolean(errors.businessName),
							"aria-describedby": errors.businessName ? "businessName-error" : void 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						htmlFor: "email",
						error: errors.email,
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							value: values.email,
							onChange: (e) => update("email", e.target.value),
							required: true,
							"aria-invalid": Boolean(errors.email),
							"aria-describedby": errors.email ? "email-error" : void 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "WhatsApp number",
						htmlFor: "whatsapp",
						error: errors.whatsapp,
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "whatsapp",
							name: "whatsapp",
							type: "tel",
							autoComplete: "tel",
							inputMode: "tel",
							value: values.whatsapp,
							onChange: (e) => update("whatsapp", e.target.value),
							required: true,
							"aria-invalid": Boolean(errors.whatsapp),
							"aria-describedby": errors.whatsapp ? "whatsapp-error" : void 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Business type",
						htmlFor: "businessType",
						error: errors.businessType,
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "businessType",
							name: "businessType",
							value: values.businessType,
							onChange: (e) => update("businessType", e.target.value),
							children: businessTypes.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option,
								children: option
							}, option))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Current website",
						htmlFor: "currentWebsite",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "currentWebsite",
							name: "currentWebsite",
							placeholder: "https://",
							value: values.currentWebsite,
							onChange: (e) => update("currentWebsite", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "What do you need?",
						htmlFor: "need",
						error: errors.need,
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "need",
							name: "need",
							value: values.need,
							onChange: (e) => update("need", e.target.value),
							children: needOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option,
								children: option
							}, option))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Budget",
						htmlFor: "budget",
						error: errors.budget,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "budget",
							name: "budget",
							value: values.budget,
							onChange: (e) => update("budget", e.target.value),
							children: budgetOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option,
								children: option
							}, option))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Message",
							htmlFor: "message",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								rows: 4,
								placeholder: "Services, customers, and what you want the website to do.",
								value: values.message,
								onChange: (e) => update("message", e.target.value)
							})
						})
					})
				]
			}),
			status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-danger",
				role: "alert",
				children: "Something went wrong. Please try again or email instead."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-6 w-full sm:w-auto",
				disabled: status === "submitting",
				children: status === "submitting" ? "Sending…" : "Send enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-fg-subtle",
				children: "I’ll use this only to reply about your project."
			})
		]
	});
}
function Field({ label, htmlFor, error, required, children }) {
	const errorId = `${htmlFor}-error`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor,
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg-subtle",
					children: " *"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-normal text-fg-subtle",
					children: " (optional)"
				})]
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: errorId,
				className: "text-sm text-danger",
				role: "alert",
				children: error
			}) : null
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		stickyCta: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-4 text-4xl leading-tight sm:text-5xl",
							children: "Start a Project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-fg-muted",
							children: "Share a little about the business. I’ll come back with clarifying questions if needed, then a recommended approach and a quote."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-4 text-sm text-fg-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No work starts until the quote is agreed." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Proposed payment structure: ",
									site.payment.advancePercent,
									"% advance before development, ",
									site.payment.remainderPercent,
									"% before launch. ",
									site.payment.note
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Domain and hosting can remain in your own accounts." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${site.email}`,
								className: "flex items-center gap-2 text-sm text-fg hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), site.email]
							}), hasWhatsApp() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappHref(),
								className: "text-sm text-fg hover:underline",
								children: "Message on WhatsApp"
							}) : null]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
				})]
			})
		})
	});
}
//#endregion
export { ContactPage as component };
