import {
  require_main2 as require_main
} from "/build/_shared/chunk-VOADKNFO.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/sun-status-remix/app/routes/sun-status.jsx?browser
init_react();

// app/routes/sun-status.jsx
init_react();
var import_react_router = __toModule(require_main());

// app/components/views/SunStatus/SunStatus.jsx
init_react();
function RootView({ children }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "masthead",
    role: "img",
    "aria-label": "Image Description"
  }, /* @__PURE__ */ React.createElement("h1", null, children));
}

// app/components/views/SunStatus/sun-status-view.css
var sun_status_view_default = "/build/_assets/sun-status-view-NHIIXH37.css";

// app/routes/sun-status.jsx
function links() {
  return [{ rel: "stylesheet", href: sun_status_view_default }];
}
function SunStatus() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RootView, null, /* @__PURE__ */ React.createElement(import_react_router.Outlet, null)));
}
export {
  SunStatus as default,
  links
};
//# sourceMappingURL=/build/routes/sun-status-7ZOT7GI5.js.map
