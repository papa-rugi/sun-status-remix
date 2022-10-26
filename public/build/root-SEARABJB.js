import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom
} from "/build/_shared/chunk-AZFOPEV3.js";
import "/build/_shared/chunk-VQY6G2KO.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/sun-status-remix/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/components/layout/Layout.jsx
init_react();

// app/components/layout/Navbar.jsx
init_react();
function Navbar() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-expand-lg "
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, "Sun Status \u{1F305}"), /* @__PURE__ */ React.createElement("button", {
    className: "ml-auto"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-brand",
    href: "/"
  }, "Try a new IP"))));
}

// app/components/layout/Footer.jsx
init_react();
function Footer() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-expand-lg "
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "Sun Status \u{1F305}"), /* @__PURE__ */ React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-icon"
  }))));
}

// app/components/layout/Layout.jsx
var import_react = __toModule(require_react());
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer, null));
}

// app/root.jsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    }
  ];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("h1", null, "Oh no! You've hit the custom error boundary. Please try again."), /* @__PURE__ */ React.createElement(Scripts, null)));
}
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-SEARABJB.js.map
