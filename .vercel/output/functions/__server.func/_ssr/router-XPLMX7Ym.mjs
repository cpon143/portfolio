import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Button, o as cn, r as images } from "./projects-Cqn5UvRJ.mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as string, i as object, n as literal, o as union, r as number } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-CUNN3Kku.js
var site = {
	name: "Mazharul.dev",
	shortName: "MAZHARUL.DEV",
	owner: "Md Mazharul Haque",
	domain: "https://mazharul.dev",
	tagline: "Websites that turn visitors into enquiries.",
	description: "Business website designer in India. Modern, mobile-first websites, landing pages and redesigns for small businesses that want more enquiries, bookings and WhatsApp conversations.",
	email: "hello@mazharul.dev",
	/**
	* International WhatsApp number, digits only (e.g. "9198XXXXXXXX").
	* Leave empty until the live number is confirmed — CTAs then fall back to /contact.
	*/
	whatsappNumber: "",
	social: {
		instagram: "",
		linkedin: "",
		x: ""
	},
	startingPrices: {
		website: 3999,
		landing: 2999,
		redesign: 4999,
		dashboard: 4999
	},
	payment: {
		advancePercent: 50,
		remainderPercent: 50,
		note: "Proposed business policy, not a legal requirement."
	}
};
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function absoluteUrl(path = "/") {
	if (path.startsWith("http")) return path;
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${site.domain}${normalized === "/" ? "/" : normalized}`;
}
function whatsappHref(message) {
	if (!site.whatsappNumber) return "/contact";
	const text = message ?? "Hello Mazharul, I’d like to talk about a website for my business.";
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
function hasWhatsApp() {
	return Boolean(site.whatsappNumber);
}
var businessTypes = [
	"Education / Study Abroad",
	"Real Estate",
	"Fitness / Gym",
	"Beauty / Salon",
	"Professional Services",
	"Other"
];
var needOptions = [
	"New Website",
	"Website Redesign",
	"Landing Page",
	"Business Dashboard",
	"Not Sure"
];
var budgetOptions = [
	"Under ₹5,000",
	"₹5,000–₹10,000",
	"₹10,000–₹25,000",
	"₹25,000+",
	"Not Sure"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-XPLMX7Ym.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-danger",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-8",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-fg-muted",
				children: errorMessage(error)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-sm font-medium underline-offset-4 hover:underline",
				children: "Back to home"
			})
		]
	});
}
function Container({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className),
		...props
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-10 py-14 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.8125rem] font-semibold tracking-[0.18em]",
						children: site.shortName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-fg-muted",
						children: "Websites for businesses that want to look credible and get more enquiries."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm text-fg-muted transition-colors hover:text-fg",
							children: item.label
						}) }, item.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-fg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-fg",
								href: `mailto:${site.email}`,
								children: site.email
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-fg",
								children: "Start a Project"
							}) }),
							site.social.instagram ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-fg",
								href: site.social.instagram,
								children: "Instagram"
							}) }) : null,
							site.social.linkedin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-fg",
								href: site.social.linkedin,
								children: "LinkedIn"
							}) }) : null
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col gap-3 border-t border-border py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["© 2026 ", site.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/privacy",
					className: "hover:text-fg",
					children: "Privacy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/terms",
					className: "hover:text-fg",
					children: "Terms"
				})]
			})]
		})]
	});
}
var HIDDEN = ["/contact"];
function MobileStickyCta() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (HIDDEN.includes(pathname)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "w-full",
			size: "lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				children: "Start a Project"
			})
		})
	});
}
function Navbar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const menuId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8",
				"aria-label": "Primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-[0.8125rem] font-semibold tracking-[0.18em] text-fg",
						children: site.shortName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-8 md:flex",
						children: navLinks.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("relative py-1 text-sm transition-colors duration-150", active ? "text-fg" : "text-fg-muted hover:text-fg"),
								"aria-current": active ? "page" : void 0,
								children: [item.label, active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 -bottom-1 h-px bg-fg" }) : null]
							}) }, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Start a Project"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden",
							"aria-expanded": open,
							"aria-controls": menuId,
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: menuId,
				className: "fixed inset-0 top-16 z-40 bg-bg md:hidden",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Site menu",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col px-6 pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col",
						children: navLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "font-display block py-4 text-4xl leading-none text-fg",
								onClick: () => setOpen(false),
								children: item.label
							})
						}, item.to))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									onClick: () => setOpen(false),
									children: "Start a Project"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-fg-muted",
								children: site.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "mt-2 inline-block text-sm text-fg underline-offset-4 hover:underline",
								children: site.email
							})
						]
					})]
				})
			}) : null
		]
	});
}
function SiteLayout({ children, stickyCta = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				className: cn("flex-1", stickyCta && "pb-20 md:pb-0"),
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			stickyCta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileStickyCta, {}) : null
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, {
		stickyCta: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-5 py-28 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-fg-subtle",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 text-4xl sm:text-6xl",
					children: "This page isn’t here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-md text-fg-muted",
					children: "The link may be old, or the page may have moved. The work and contact pages are a reliable next step."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Start a Project"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							children: "View Work"
						})
					})]
				})
			]
		})
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-DqMWBZFR.css";
var Route$14 = createRootRoute({
	notFoundComponent: NotFound,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${site.name} — ${site.tagline}` },
			{
				name: "description",
				content: site.description
			},
			{
				name: "theme-color",
				content: "#1E3A32"
			},
			{
				name: "application-name",
				content: site.name
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,400..700;1,400..700&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: site.name,
		url: site.domain,
		email: site.email,
		description: site.description,
		areaServed: "IN",
		founder: {
			"@type": "Person",
			name: site.owner
		},
		serviceType: [
			"Business website design",
			"Landing page design",
			"Website redesign",
			"Business dashboards"
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-bg font-sans text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function pageHead({ title, description, path }) {
	const url = absoluteUrl(path);
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "author",
				content: site.owner
			},
			{
				name: "robots",
				content: "index,follow"
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
`${site.name}${site.tagline}`;
site.description;
var $$splitComponentImporter$13 = () => import("./routes-CxUA-5gu.mjs");
var Route$13 = createFileRoute("/")({
	head: () => pageHead({
		title: `${site.name} — Websites that turn visitors into enquiries`,
		description: site.description,
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-DiqHYITA.mjs");
var Route$12 = createFileRoute("/about")({
	head: () => pageHead({
		title: `About — ${site.name}`,
		description: "Md Mazharul Haque builds practical websites and digital experiences for small businesses in India that need credibility and more enquiries.",
		path: "/about"
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./contact-QYvdOflt.mjs");
var Route$11 = createFileRoute("/contact")({
	head: () => pageHead({
		title: `Start a Project — ${site.name}`,
		description: "Tell me about your business and what the website needs to do. I’ll reply with questions or a suggested next step and a quote.",
		path: "/contact"
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./privacy-Dm6teDuD.mjs");
var Route$10 = createFileRoute("/privacy")({
	head: () => pageHead({
		title: `Privacy — ${site.name}`,
		description: `How ${site.name} handles information submitted through this website.`,
		path: "/privacy"
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./services-BXCmrsFl.mjs");
var Route$9 = createFileRoute("/services")({
	head: () => pageHead({
		title: `Services — ${site.name}`,
		description: "Business websites, landing pages, website redesigns and simple dashboards for small businesses in India. Transparent starting prices.",
		path: "/services"
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./terms-BoWMYRVH.mjs");
var Route$8 = createFileRoute("/terms")({
	head: () => pageHead({
		title: `Terms — ${site.name}`,
		description: `Working terms for website projects with ${site.name}.`,
		path: "/terms"
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./work-CYNgHVRi.mjs");
var Route$7 = createFileRoute("/work/")({
	head: () => pageHead({
		title: `Work — ${site.name}`,
		description: "A live education project and website concepts for education, real estate, fitness, beauty and professional services.",
		path: "/work"
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./beauty-Cpphpl1d.mjs");
var Route$6 = createFileRoute("/work/beauty")({
	head: () => pageHead({
		title: `Beauty website concept — ${site.name}`,
		description: "A salon website concept that makes services, pricing and booking immediately clear.",
		path: "/work/beauty"
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./education-DYPMEXnj.mjs");
var Route$5 = createFileRoute("/work/education")({
	head: () => pageHead({
		title: `Education website concept — ${site.name}`,
		description: "A study-abroad consultancy website concept designed to turn research into counselling bookings.",
		path: "/work/education"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./fitness-Cas4oZZQ.mjs");
var Route$4 = createFileRoute("/work/fitness")({
	head: () => pageHead({
		title: `Fitness website concept — ${site.name}`,
		description: "A gym website concept structured around programmes, proof and trial sign-ups.",
		path: "/work/fitness"
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./professional-DmSXN2cG.mjs");
var Route$3 = createFileRoute("/work/professional")({
	head: () => pageHead({
		title: `Professional services website concept — ${site.name}`,
		description: "A consultancy website concept that builds trust before asking for a meeting.",
		path: "/work/professional"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./students-choice-DfhB3xsN.mjs");
var Route$2 = createFileRoute("/work/students-choice")({
	head: () => pageHead({
		title: `Students Choice — ${site.name}`,
		description: "Case study of Students Choice, a live education-loan and study-abroad platform.",
		path: "/work/students-choice"
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./real-estate-1xc45PKK.mjs");
var Route$1 = createFileRoute("/work/real-estate/")({
	head: () => pageHead({
		title: `Real estate website concept — ${site.name}`,
		description: "A property website concept designed to move buyers from browsing to a site visit.",
		path: "/work/real-estate"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var properties = [
	{
		slug: "maple-residences",
		title: "Maple Residences",
		type: "Apartment",
		location: "Koramangala, Bengaluru",
		bedrooms: 3,
		bathrooms: 3,
		area: "1,780 sq.ft",
		price: "₹1.85 Cr",
		image: images.realEstateApt,
		blurb: "A quiet 3 BHK with a park-facing living room and a usable balcony."
	},
	{
		slug: "oak-house",
		title: "The Oak House",
		type: "Villa",
		location: "Whitefield, Bengaluru",
		bedrooms: 4,
		bathrooms: 4,
		area: "3,240 sq.ft",
		price: "₹4.20 Cr",
		image: images.realEstateVilla,
		blurb: "A four-bedroom villa with a private garden and a separate family lounge."
	},
	{
		slug: "harbour-view",
		title: "Harbour View",
		type: "Apartment",
		location: "Indiranagar, Bengaluru",
		bedrooms: 2,
		bathrooms: 2,
		area: "1,210 sq.ft",
		price: "₹1.42 Cr",
		image: images.realEstateInterior,
		blurb: "A 2 BHK planned for light, storage and a short walk to daily needs."
	},
	{
		slug: "green-court",
		title: "Green Court",
		type: "Apartment",
		location: "HSR Layout, Bengaluru",
		bedrooms: 3,
		bathrooms: 2,
		area: "1,560 sq.ft",
		price: "₹1.68 Cr",
		image: images.realEstateNight,
		blurb: "A 3 BHK with a larger kitchen and a layout that works for a growing family."
	}
];
function getProperty(slug) {
	return properties.find((item) => item.slug === slug);
}
var $$splitComponentImporter = () => import("./properties._slug-DapzqjlT.mjs");
var Route = createFileRoute("/work/real-estate/properties/$slug")({
	head: ({ params }) => {
		const property = getProperty(params.slug);
		return pageHead({
			title: `${property?.title ?? "Property"} — UrbanNest concept — ${site.name}`,
			description: property?.blurb ?? "A fictional property listing inside the UrbanNest website concept.",
			path: `/work/real-estate/properties/${params.slug}`
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$12.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var PrivacyRoute = Route$10.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$14
});
var ServicesRoute = Route$9.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$14
});
var TermsRoute = Route$8.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$14
});
var WorkIndexRoute = Route$7.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$14
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PrivacyRoute,
	ServicesRoute,
	TermsRoute,
	WorkBeautyRoute: Route$6.update({
		id: "/work/beauty",
		path: "/work/beauty",
		getParentRoute: () => Route$14
	}),
	WorkEducationRoute: Route$5.update({
		id: "/work/education",
		path: "/work/education",
		getParentRoute: () => Route$14
	}),
	WorkFitnessRoute: Route$4.update({
		id: "/work/fitness",
		path: "/work/fitness",
		getParentRoute: () => Route$14
	}),
	WorkProfessionalRoute: Route$3.update({
		id: "/work/professional",
		path: "/work/professional",
		getParentRoute: () => Route$14
	}),
	WorkStudentsChoiceRoute: Route$2.update({
		id: "/work/students-choice",
		path: "/work/students-choice",
		getParentRoute: () => Route$14
	}),
	WorkIndexRoute,
	WorkRealEstateIndexRoute: Route$1.update({
		id: "/work/real-estate/",
		path: "/work/real-estate/",
		getParentRoute: () => Route$14
	}),
	WorkRealEstatePropertiesSlugRoute: Route.update({
		id: "/work/real-estate/properties/$slug",
		path: "/work/real-estate/properties/$slug",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound,
		scrollRestoration: true
	});
}
//#endregion
export { SiteLayout as a, businessTypes as c, site as d, whatsappHref as f, properties as i, hasWhatsApp as l, Route as n, Container as o, getProperty as r, budgetOptions as s, router_exports as t, needOptions as u };
