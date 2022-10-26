import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/sun-status-remix/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/views/Root/RootView.jsx
init_react();
function RootView() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "container root-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Sun Status! Enter the IP address of a location where you would like to determine the Sunset and Sunrise."));
}

// app/components/views/Root/root-view.css
var root_view_default = "/build/_assets/root-view-XIWCTCIA.css";

// app/routes/index.jsx
function links() {
  return [{ rel: "stylesheet", href: root_view_default }];
}
var meta = () => {
  return {
    title: "My Posts"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(RootView, null);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-K7X3UAYL.js.map
