import {
  useLoaderData
} from "/build/_shared/chunk-CCKK764F.js";
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
  const actionData = useLoaderData();
  console.log(actionData);
  return /* @__PURE__ */ React.createElement("section", {
    className: "container root-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Sun Status! Enter the IP address of a location where you would like to determine the Sunset and Sunrise."), /* @__PURE__ */ React.createElement("form", {
    action: "/sun-status",
    method: "post"
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
var root_view_default = "/build/_assets/root-view-F6HHXRH2.css";

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
//# sourceMappingURL=/build/routes/index-K34OWUUH.js.map
