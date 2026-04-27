import { createElement as h } from "react";

const navItems = ["Servers", "Features", "Pricing"];

export default function Header() {
  return h(
    "header",
    { className: "site-header", "aria-label": "Primary navigation" },
    h(
      "a",
      { className: "brand", href: "/", "aria-label": "SURO VPN home" },
      "SURO",
    ),
    h(
      "nav",
      { className: "nav-links", "aria-label": "Main menu" },
      navItems.map((item) =>
        h("a", { href: `#${item.toLowerCase()}`, key: item }, item),
      ),
    ),
    h(
      "div",
      { className: "auth-links" },
      h("a", { className: "sign-in", href: "#sign-in" }, "Sign in"),
      h("a", { className: "sign-up", href: "#sign-up" }, "Sign up"),
    ),
  );
}
