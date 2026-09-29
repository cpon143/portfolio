import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, n as getConcept, r as images } from "./projects-Cqn5UvRJ.mjs";
import { a as IntentBar, i as DemoNav, n as DemoEnquiry, r as DemoFooter, t as ConceptFrame } from "./ConceptFrame-ByZpfS83.mjs";
import { t as FAQ } from "./FAQ-CUZdlSqd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fitness-Cas4oZZQ.js
var import_jsx_runtime = require_jsx_runtime();
var programs = [
	{
		title: "Personal Training",
		body: "One-to-one coaching with a written plan, not a random circuit."
	},
	{
		title: "Strength Training",
		body: "Barbell work, progressive loading and enough space to lift properly."
	},
	{
		title: "Transformation",
		body: "A 12-week block with check-ins, so the trial has somewhere to go."
	}
];
var gallery = [
	{
		src: images.fitness,
		alt: "Strength floor"
	},
	{
		src: images.fitnessWeights,
		alt: "Free weights"
	},
	{
		src: images.fitnessTraining,
		alt: "Coached session"
	},
	{
		src: images.fitnessStudio,
		alt: "Studio floor"
	}
];
function enquiry(label, variant = "default") {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoEnquiry, {
		dark: true,
		title: "Start a free trial",
		subtitle: "A live gym would book you in. This form is a demonstration.",
		submitLabel: "Start Your Free Trial",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant,
			children: label
		})
	});
}
function FitnessSite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "demo-fitness",
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentBar, {
				industry: "Fitness",
				goal: "Trial bookings / memberships",
				cta: "Start Your Free Trial"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNav, {
				dark: true,
				brand: "IRONCORE",
				links: [
					{
						href: "#programs",
						label: "Programs"
					},
					{
						href: "#trainers",
						label: "Trainers"
					},
					{
						href: "#membership",
						label: "Membership"
					},
					{
						href: "#faq",
						label: "FAQ"
					}
				],
				cta: enquiry("Start Your Free Trial")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[78vh] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.fitness,
					alt: "Strength floor in a gym",
					className: "absolute inset-0 size-full object-cover opacity-50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto flex min-h-[78vh] max-w-6xl items-end px-5 py-20 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-5xl leading-tight sm:text-7xl",
								children: "Build Strength. Build Discipline."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-lg text-lg text-fg-muted",
								children: "Strength training, personal coaching and structured fitness programs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [enquiry("Start Your Free Trial"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#programs",
										children: "Explore Programs"
									})
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "programs",
				className: "anchor-section py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-5xl",
						children: "Programs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-3",
						children: programs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-fg-muted",
								children: item.body
							})]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "trainers",
				className: "anchor-section border-y border-border bg-bg-elevated py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.fitnessTraining,
						alt: "Coach working with a member",
						className: "aspect-[4/3] w-full rounded-xl object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Coaches who program, not pose."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-fg-muted",
						children: "The page introduces people and a method before asking for a membership. A trial is the conversion, not a price dump."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "membership",
				className: "anchor-section py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Membership"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-3",
						children: [
							[
								"Trial week",
								"Seven days on the floor with a coach intro.",
								"Demo"
							],
							[
								"Strength club",
								"Open gym plus two coached sessions a week.",
								"Demo"
							],
							[
								"Personal coaching",
								"A dedicated plan and weekly review.",
								"Demo"
							]
						].map(([title, body, price]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.14em] text-fg-subtle",
									children: [price, " pricing"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-xl font-medium",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-fg-muted",
									children: body
								})
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "gallery",
				className: "anchor-section border-t border-border py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Gallery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-4",
						children: gallery.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							className: "aspect-square w-full rounded-lg object-cover",
							loading: "lazy"
						}, item.src))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-fg-subtle",
						children: "Demo reviews — fictional"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-3",
						children: [
							"I booked a trial because the program names were specific.",
							"The page made it obvious what happens after the first week.",
							"Dark, quiet, no neon. It felt like a serious room."
						].map((quote, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-xl bg-surface p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-fg-muted",
								children: [
									"“",
									quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-3 text-sm",
								children: [
									"Member ",
									i + 1,
									" — demo"
								]
							})]
						}, quote))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "anchor-section border-t border-border py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl px-5 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: [
						{
							question: "Do I need experience?",
							answer: "No. A trial week is the point of the page — show up, get a plan, decide after."
						},
						{
							question: "Where are you?",
							answer: "A live gym would publish the map pin here. This demo keeps the location as a placeholder for Whitefield, Bengaluru."
						},
						{
							question: "Is the trial paid?",
							answer: "On a real site that would be stated clearly. The demo only shows the booking action."
						}
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "anchor-section border-t border-border bg-bg-elevated py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Visit the floor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-fg-muted",
						children: "IronCore Fitness — demo location, Whitefield, Bengaluru. A live site would embed a map. The conversion is still the trial booking."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-accent py-16 text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Start a free trial this week."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: enquiry("Start Your Free Trial", "invert")
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoFooter, {
				brand: "IronCore Fitness",
				note: "Fictional gym. Memberships, trainers and reviews are demonstration content."
			})
		]
	});
}
var project = getConcept("fitness");
function FitnessConceptPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptFrame, {
		project,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitnessSite, {})
	});
}
//#endregion
export { FitnessConceptPage as component };
