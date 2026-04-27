import Header from "./components/Header.jsx";
import { createElement as h, useEffect, useState } from "react";

const socialLinks = [
  { name: "GitHub", icon: "/icons/github.svg", href: "#github" },
  { name: "Telegram", icon: "/icons/telegram.svg", href: "#telegram" },
  { name: "Discord", icon: "/icons/discord.svg", href: "#discord" },
  { name: "Reddit", icon: "/icons/reddit.svg", href: "#reddit" },
];

const serverLocations = [
  ["de", "Germany", "Frankfurt", "45.87.214.18", "14 ms", "10 Gbps"],
  ["nl", "Netherlands", "Amsterdam", "185.199.108.42", "18 ms", "10 Gbps"],
  ["gb", "United Kingdom", "London", "51.89.12.77", "22 ms", "8 Gbps"],
  ["us", "United States", "New York", "198.51.100.24", "31 ms", "10 Gbps"],
  ["sg", "Singapore", "Singapore", "203.0.113.19", "46 ms", "5 Gbps"],
  ["jp", "Japan", "Tokyo", "192.0.2.86", "52 ms", "5 Gbps"],
];

const faqs = [
  {
    question: "Will SURO slow down my connection?",
    answer: "Every VPN adds a small route cost, but SURO is built around short paths, fast exits, and automatic server quality checks.",
  },
  {
    question: "Can I choose a country manually?",
    answer: "Yes. Use quick connect for the fastest route or pick a specific location when you need content from one region.",
  },
  {
    question: "Does SURO work on public Wi-Fi?",
    answer: "Yes. SURO encrypts your traffic before it leaves your device, which helps keep browsing private on shared networks.",
  },
  {
    question: "What happens if a server is overloaded?",
    answer: "The app can move you to a healthier route, keeping connection quality stable without manual switching.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return h(
    "main",
    { className: "app-shell" },
    h(Header),
    h(
      "section",
      { className: "hero", "aria-labelledby": "hero-title" },
      h(
        "div",
        { className: "hero-inner" },
        h(
          "h1",
          { id: "hero-title" },
          h("span", null, "Use the internet"),
          h("span", null, "without limits"),
        ),
        h(
          "p",
          { className: "hero-copy" },
          "SURO gives you fast encrypted access to global servers, keeps your traffic private, and removes borders from the sites, apps, and communities you use every day.",
        ),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { className: "hero-button hero-button-primary", href: "#pricing" }, "Start now"),
          h("a", { className: "hero-button hero-button-secondary", href: "#servers" }, "Explore servers"),
        ),
        h(
          "div",
          { className: "social-strip", "aria-label": "Community links" },
          socialLinks.map((item) =>
            h(
              "a",
              {
                className: "social-link",
                href: item.href,
                key: item.name,
                "aria-label": item.name,
              },
              h("img", { src: item.icon, alt: "", "aria-hidden": "true" }),
            ),
          ),
        ),
      ),
    ),
    h(
      "section",
      { className: "content-section servers-section reveal", id: "servers", "aria-labelledby": "servers-title" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "section-kicker" }, "Servers"),
        h("h2", { id: "servers-title" }, "Pick a country. Keep the speed."),
        h(
          "p",
          null,
          "SURO keeps latency visible and routes clean. Choose a location by ping, country, city, or raw speed before you connect.",
        ),
      ),
      h(
        "div",
        { className: "server-board reveal" },
        h(
          "aside",
          { className: "network-panel" },
          h("span", { className: "panel-label" }, "Network quality"),
          h(
            "div",
            { className: "orbit-visual", "aria-hidden": "true" },
            h("span", { className: "orbit-ring orbit-ring-one" }),
            h("span", { className: "orbit-ring orbit-ring-two" }),
            h("span", { className: "orbit-dot orbit-dot-one" }),
            h("span", { className: "orbit-dot orbit-dot-two" }),
            h("strong", null, "10"),
            h("small", null, "Gbps"),
          ),
          h(
            "div",
            { className: "route-stack", "aria-label": "Network metrics" },
            h(
              "div",
              { className: "route-metric route-metric-left" },
              h("span", null, "Uptime"),
              h("strong", null, "99.95%"),
            ),
            h(
              "div",
              { className: "route-metric route-metric-right" },
              h("span", null, "Jitter"),
              h("strong", null, "< 4 ms"),
            ),
            h(
              "div",
              { className: "route-metric route-metric-bottom" },
              h("span", null, "Routing"),
              h("strong", null, "Auto clean exit"),
            ),
          ),
        ),
        h(
          "div",
          { className: "server-list", "aria-label": "Server locations" },
          serverLocations.map(([code, country, city, ip, ping, speed]) =>
            h(
              "article",
              { className: "server-row", key: `${country}-${city}` },
              h(
                "span",
                { className: "server-flag" },
                h("img", { src: `/flags/${code}.svg`, alt: `${country} flag` }),
              ),
              h(
                "div",
                { className: "server-main" },
                h("h3", null, country),
                h("p", null, `${city} - ${ip}`),
              ),
              h("span", { className: "server-speed" }, speed),
              h("strong", { className: "server-ping" }, ping),
            ),
          ),
        ),
      ),
    ),
    h(
      "section",
      { className: "content-section faq-section reveal", id: "features", "aria-labelledby": "faq-title" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "section-kicker" }, "Questions"),
        h("h2", { id: "faq-title" }, "Answers before you connect."),
      ),
      h(
        "div",
        { className: "faq-list" },
        faqs.map((item, index) =>
          h(
            "article",
            { className: `faq-item${openFaq === index ? " is-open" : ""}`, key: item.question },
            h(
              "button",
              {
                type: "button",
                className: "faq-question",
                "aria-expanded": openFaq === index,
                "aria-controls": `faq-answer-${index}`,
                onClick: () => setOpenFaq(openFaq === index ? null : index),
              },
              h("span", null, item.question),
              h("span", { className: "faq-icon", "aria-hidden": "true" }, openFaq === index ? "-" : "+"),
            ),
            h(
              "div",
              {
                className: "faq-answer",
                id: `faq-answer-${index}`,
              },
              h("div", null, h("p", null, item.answer)),
            ),
          ),
        ),
      ),
    ),
    h(
      "section",
      { className: "content-section final-section reveal", id: "pricing", "aria-labelledby": "final-title" },
      h("h2", { id: "final-title" }, "Do not wait. Join the free internet."),
      h(
        "p",
        null,
        "Start with SURO today and keep your connection private, fast, and open wherever the network tries to slow you down.",
      ),
      h(
        "div",
        { className: "hero-actions final-actions" },
        h("a", { className: "hero-button hero-button-primary", href: "#sign-up" }, "Join SURO"),
        h("a", { className: "hero-button hero-button-secondary", href: "#servers" }, "See servers"),
      ),
    ),
    h(
      "footer",
      { className: "site-footer" },
      h("span", null, "design by "),
      h("a", { href: "https://t.me/hencio", target: "_blank", rel: "noreferrer" }, "@hencio"),
    ),
  );
}
