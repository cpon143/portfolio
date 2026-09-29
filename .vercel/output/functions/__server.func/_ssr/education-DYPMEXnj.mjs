import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, n as getConcept, r as images } from "./projects-Cqn5UvRJ.mjs";
import { a as IntentBar, i as DemoNav, n as DemoEnquiry, r as DemoFooter, t as ConceptFrame } from "./ConceptFrame-ByZpfS83.mjs";
import { t as FAQ } from "./FAQ-CUZdlSqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/education-DYPMEXnj.js
var import_jsx_runtime = require_jsx_runtime();
var destinations = [
	{
		name: "United Kingdom",
		image: images.educationUk,
		note: "Universities, foundation years and post-study work routes."
	},
	{
		name: "United States",
		image: images.educationUsa,
		note: "Undergraduate and graduate pathways with application planning."
	},
	{
		name: "Canada",
		image: images.educationCanada,
		note: "Study permits, college and university options."
	},
	{
		name: "Australia",
		image: images.educationAustralia,
		note: "Course selection and intake planning for the academic year."
	}
];
var services = [
	{
		title: "University Selection",
		body: "Shortlists based on academics, budget and the kind of campus life a student actually wants."
	},
	{
		title: "Application Support",
		body: "Documents, deadlines and a clear sequence so applications do not stall."
	},
	{
		title: "Visa Guidance",
		body: "A structured checklist for interviews, financials and appointment timing."
	},
	{
		title: "Scholarship Guidance",
		body: "Where funding is realistic, and what evidence a committee expects to see."
	}
];
var journey = [
	"Share academics and destination preference",
	"Receive a shortlist and counselling call",
	"Apply with a complete file",
	"Prepare visa and departure steps"
];
var reasons = [
	["Clear first step", "The page does not dump every country at once. It asks for a consultation after the visitor understands the offer."],
	["Parents can follow it", "Services, journey and FAQs are written so a family can decide together — not only a student who already knows the jargon."],
	["Proof before paperwork", "Demo reviews and a named process sit above the form, so the enquiry feels like the next step, not a leap."]
];
function enquiry(label, variant = "default") {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoEnquiry, {
		title: "Book a free consultation",
		subtitle: "A counsellor would reply on a live site. This is a demonstration only.",
		submitLabel: "Book Free Consultation",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant,
			children: label
		})
	});
}
function EducationSite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "demo-education",
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentBar, {
				industry: "Education",
				goal: "Generate student enquiries",
				cta: "Book Free Consultation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNav, {
				brand: "GLOBALPATH",
				links: [
					{
						href: "#destinations",
						label: "Destinations"
					},
					{
						href: "#services",
						label: "Services"
					},
					{
						href: "#journey",
						label: "Journey"
					},
					{
						href: "#faq",
						label: "FAQ"
					}
				],
				cta: enquiry("Book Free Consultation")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-fg-subtle",
							children: "Study abroad consultancy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-4 text-4xl leading-tight sm:text-6xl",
							children: "Your Journey to Study Abroad Starts Here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-lg text-fg-muted",
							children: "Expert guidance for university selection, applications and your international education journey."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [enquiry("Book Free Consultation"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#destinations",
									children: "Explore Destinations"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.educationHero,
						alt: "Sunlit university courtyard",
						className: "aspect-[4/3] w-full rounded-xl object-cover",
						width: 1600,
						height: 1200
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "destinations",
				className: "anchor-section border-t border-border py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl",
							children: "Study destinations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-fg-muted",
							children: "Start with a country, then a course. The website should make that choice feel organised, not overwhelming."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
							children: destinations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: "",
									className: "aspect-[4/3] w-full object-cover",
									width: 800,
									height: 600,
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-medium",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-fg-muted",
										children: item.note
									})]
								})]
							}, item.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "anchor-section border-t border-border bg-bg-elevated py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Our services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-2",
						children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-fg-muted",
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
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Why choose a consultancy like this"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-3",
						children: reasons.map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-fg-muted",
								children: body
							})]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "journey",
				className: "anchor-section border-t border-border py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Student journey"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-4 md:grid-cols-4",
						children: journey.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-fg-subtle",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium",
								children: step
							})]
						}, step))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-bg-elevated py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-fg-subtle",
						children: "Demo reviews — fictional"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-3",
						children: [
							["Aisha K.", "The counselling call was the first time someone mapped a shortlist to my budget."],
							["Rohan M.", "I knew which documents to prepare before the appointment, not during it."],
							["Neha S.", "The destination pages made the options feel real instead of a long brochure."]
						].map(([name, quote]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed text-fg-muted",
								children: [
									"“",
									quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-4 text-sm font-medium",
								children: [name, " · demo"]
							})]
						}, name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "anchor-section py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Questions families usually ask"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: [
							{
								question: "Is the consultation actually free?",
								answer: "On a live consultancy site, this would be a real booking. In this demo it only shows the conversion flow."
							},
							{
								question: "Do you work with first-time applicants?",
								answer: "The page is written for students and parents who have not applied abroad before."
							},
							{
								question: "What happens after I submit the form?",
								answer: "A counsellor would reply to schedule a call. Here, you will see a demo confirmation instead."
							}
						] })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-accent py-16 text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl",
							children: "Book a free consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-accent-fg/80",
							children: "Tell us the destination and intake. A counsellor would take it from there."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: enquiry("Book Free Consultation", "invert")
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoFooter, {
				brand: "GlobalPath Education",
				note: "Fictional study-abroad consultancy created to show how a counselling-led website can convert visitors into enquiries."
			})
		]
	});
}
var project = getConcept("education");
function EducationConceptPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptFrame, {
		project,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationSite, {})
	});
}
//#endregion
export { EducationConceptPage as component };
