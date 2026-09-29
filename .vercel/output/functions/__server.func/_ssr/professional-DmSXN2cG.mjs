import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, n as getConcept, r as images } from "./projects-Cqn5UvRJ.mjs";
import { a as IntentBar, i as DemoNav, n as DemoEnquiry, r as DemoFooter, t as ConceptFrame } from "./ConceptFrame-ByZpfS83.mjs";
import { t as FAQ } from "./FAQ-CUZdlSqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/professional-DmSXN2cG.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		title: "GST",
		body: "Registrations, filings and a calmer monthly close."
	},
	{
		title: "Income Tax",
		body: "Returns, notices and planning conversations before the deadline."
	},
	{
		title: "Accounting",
		body: "Books that a founder can actually read, not a dump of ledgers."
	},
	{
		title: "Business Registration",
		body: "Company, LLP or proprietorship — explained before the paperwork."
	},
	{
		title: "Compliance",
		body: "A calendar of what is due, so surprises become reminders."
	}
];
var expertise = [
	["Growing companies", "Work scoped for founders who need a named advisor, not a 40-person firm."],
	["Filing calendar", "GST, TDS and returns sit on one page so the next deadline is obvious."],
	["Written scope", "Every engagement starts with what is included — and what is billed separately."]
];
function enquiry(label, variant = "default") {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoEnquiry, {
		title: "Book a consultation",
		subtitle: "A live practice would reply with a slot. This is a demonstration.",
		submitLabel: "Book a Consultation",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant,
			children: label
		})
	});
}
function ProfessionalSite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "demo-professional",
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentBar, {
				industry: "Professional Services",
				goal: "Consultation enquiries",
				cta: "Book a Consultation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNav, {
				brand: "FINEDGE",
				links: [
					{
						href: "#services",
						label: "Services"
					},
					{
						href: "#why",
						label: "Why us"
					},
					{
						href: "#faq",
						label: "FAQ"
					},
					{
						href: "#contact",
						label: "Contact"
					}
				],
				cta: enquiry("Book a Consultation")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-fg-subtle",
							children: "Business & financial consultancy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-4 text-4xl leading-tight sm:text-6xl",
							children: "Smarter Financial Decisions. Better Business."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg text-fg-muted",
							children: "Practical accounting, tax and compliance support for growing businesses."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: enquiry("Book a Consultation")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.professionalOffice,
						alt: "Quiet consulting office with a long table and daylight",
						className: "aspect-[4/5] w-full rounded-xl object-cover"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "anchor-section border-t border-border bg-bg-elevated py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-fg-muted",
								children: item.body
							})]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "why",
				className: "anchor-section py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Why clients choose a practice like this"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3 text-fg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plain-language advice before the filing." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A named person to call, not a ticket queue." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Work scoped in writing so the invoice is never a surprise." })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.professionalDesk,
						alt: "Desk with notebook, pen and calculator",
						className: "aspect-[4/3] w-full rounded-xl object-cover",
						loading: "lazy"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "expertise",
				className: "anchor-section border-y border-border bg-bg-elevated py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Expertise"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-3",
						children: expertise.map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-fg-muted",
								children: body
							})]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-fg-subtle",
						children: "Demo reviews — fictional"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg-muted",
								children: "“I booked a consultation because the services were named the way I search for them — GST, tax, registration.”"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-3 text-sm font-medium",
								children: "Founder, demo review"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg-muted",
								children: "“It looked like a firm I could send my CA questions to, not a template with stock smiles.”"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-3 text-sm font-medium",
								children: "Operator, demo review"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "anchor-section py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl px-5 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: [
						{
							question: "Do you work with first-year companies?",
							answer: "A live practice would say yes or no here. The demo is written for growing businesses that need a named advisor."
						},
						{
							question: "Is the first conversation billed?",
							answer: "On a real site this would be explicit. The demo uses a consultation request as the conversion."
						},
						{
							question: "Can this be remote?",
							answer: "Most of this work can start on a call. Location would be published on a live contact block."
						}
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "anchor-section bg-accent py-16 text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl",
							children: "Book a consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-accent-fg/80",
							children: "Send the company type and what is due this quarter. A live practice would reply with a time."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: enquiry("Book a Consultation", "invert")
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoFooter, {
				brand: "FinEdge Advisors",
				note: "Fictional consultancy. Reviews and service copy are demonstration content."
			})
		]
	});
}
var project = getConcept("professional");
function ProfessionalConceptPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptFrame, {
		project,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfessionalSite, {})
	});
}
//#endregion
export { ProfessionalConceptPage as component };
