import {
  React,
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// browser-route-module:/Users/telos/sun-status-remix/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/views/Root/RootView.jsx
init_react();

// app/components/common/Form.jsx
init_react();
var Form_default = Form = ({ name, buttonValue, label, placeholder, action, method }) => {
  console.log(action, method);
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};

// app/components/views/Root/RootView.jsx
function RootView({ children }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "container root-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Sun Status! Enter the IP address of a location where you would like to determine the Sunset and Sunrise."), /* @__PURE__ */ React.createElement(Form_default, {
    name: "ipAddress",
    buttonValue: "Get sun status",
    label: "Enter IP address",
    placeholder: "Enter IP address",
    action: "/sun-status",
    method: "GET"
  }), children);
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
//# sourceMappingURL=/build/routes/index-S75THJSW.js.map
