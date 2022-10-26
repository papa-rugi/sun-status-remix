import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/sun-status-remix/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/views/RootView.jsx
init_react();
function RootView() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("form", {
    action: "/sun-status",
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    for: "exampleInputEmail1"
  }, "Enter IP ", /* @__PURE__ */ React.createElement("address", null)), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter IP address",
    name: "ipAddress"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: "Get sun status",
    className: "btn btn-primary"
  }, "Submit")));
}

// app/routes/index.jsx
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
  meta
};
//# sourceMappingURL=/build/routes/index-JQTE4HM3.js.map
