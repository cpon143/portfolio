import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, n as getConcept, r as images } from "./projects-Cqn5UvRJ.mjs";
import { a as IntentBar, i as DemoNav, n as DemoEnquiry, r as DemoFooter, t as ConceptFrame } from "./ConceptFrame-ByZpfS83.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/beauty-Cpphpl1d.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		title: "Hair",
		body: "Cut, colour and finish with a consultation before the chair.",
		image: images.beauty
	},
	{
		title: "Skin",
		body: "Facials and calm treatments planned around skin, not a menu dump.",
		image: images.beautySpa
	},
	{
		title: "Makeup",
		body: "Event and everyday looks with a test slot when it matters.",
		image: images.beautyMakeup
	},
	{
		title: "Bridal",
		body: "Trials, timeline and a single coordinator on the day.",
		image: images.beautyBridal
	},
	{
		title: "Nails",
		body: "Clean work, durable finish, easy rebooking.",
		image: images.beauty
	}
];
function enquiry(label, variant = "default") {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoEnquiry, {
		title: "Book an appointment",
		subtitle: "A live studio would confirm the slot. This is a demonstration.",
		submitLabel: "Book Appointment",
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant,
			children: label
		})
	});
}
function BeautySite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "demo-beauty",
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentBar, {
				industry: "Beauty",
				goal: "Appointment bookings",
				cta: "Book Appointment"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNav, {
				brand: "AURA LUXE",
				links: [
					{
						href: "#services",
						label: "Services"
					},
					{
						href: "#pricing",
						label: "Pricing"
					},
					{
						href: "#gallery",
						label: "Gallery"
					},
					{
						href: "#about",
						label: "About"
					}
				],
				cta: enquiry("Book Appointment")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl leading-tight sm:text-6xl",
						children: "Where Beauty Meets Confidence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-fg-muted",
						children: "Premium hair, skin, makeup and beauty experiences designed around you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [enquiry("Book Appointment"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								children: "Explore Services"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.beautySpa,
					alt: "Quiet treatment room with soft daylight",
					className: "aspect-[4/5] w-full rounded-xl object-cover"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "anchor-section border-t border-border py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "aspect-[16/10] w-full object-cover",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-medium",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-fg-muted",
									children: item.body
								})]
							})]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "pricing",
				className: "anchor-section border-y border-border bg-bg-elevated py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "Starting prices"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-fg-subtle",
							children: "Demo figures — replace with the studio’s real menu."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 divide-y divide-border rounded-xl bg-surface px-5 shadow-[var(--shadow-border)]",
							children: [
								["Haircut & finish", "from ₹1,800"],
								["Signature facial", "from ₹2,400"],
								["Makeup", "from ₹3,200"],
								["Bridal trial", "from ₹8,500"],
								["Nails", "from ₹1,200"]
							].map(([name, price]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between py-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg-muted",
									children: price
								})]
							}, name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "gallery",
				className: "anchor-section py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 sm:px-6 md:grid-cols-4",
					children: [
						images.beauty,
						images.beautyMakeup,
						images.beautyBridal,
						images.beautySpa
					].map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						className: "aspect-square w-full rounded-lg object-cover",
						loading: "lazy"
					}, src))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "anchor-section border-t border-border py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "The studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-fg-muted",
							children: "Aura Luxe is a fictional salon used to show how a beauty business can present services, starting prices and a booking action without a noisy template."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs uppercase tracking-[0.16em] text-fg-subtle",
							children: "Demo reviews — fictional"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 text-fg-muted",
							children: "“I booked from the service list because I could see what happens next.” — Maya, demo review"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-accent py-16 text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl",
							children: "Book your appointment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg text-accent-fg/80",
							children: "A live studio would confirm by WhatsApp. This demo stops at the enquiry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: enquiry("Book Appointment", "invert")
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoFooter, {
				brand: "Aura Luxe Studio",
				note: "Fictional salon. Services, prices and reviews are demonstration content."
			})
		]
	});
}
var project = getConcept("beauty");
function BeautyConceptPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConceptFrame, {
		project,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeautySite, {})
	});
}
//#endregion
export { BeautyConceptPage as component };
