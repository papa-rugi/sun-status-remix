import {
  useActionData
} from "/build/_shared/chunk-QNE4XEER.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-LCDQANFG.js";

// browser-route-module:/Users/telos/sun-status-remix/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/views/Root/RootView.jsx
init_react();
function RootView() {
  const actionData = useActionData();
  return /* @__PURE__ */ React.createElement("section", {
    className: "container root-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Sun Status! Enter the IP address of a location where you would like to determine the Sunset and Sunrise."), /* @__PURE__ */ React.createElement("form", {
    action: "/sun-status",
    method: "GET"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "exampleInputEmail1"
  }, "Enter IP address"), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter IP address",
    name: "ipAddress",
    defaultValue: actionData?.values.name
  })), actionData?.errors.name ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, actionData.errors.name) : null, actionData?.errors.description ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, actionData.errors.description) : null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: "Get sun status",
    className: "btn btn-primary"
  }, "Submit")));
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
//# sourceMappingURL=/build/routes/index-G4TWOWOB.js.map
