import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/sun-status-remix/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var meta = () => {
  return {
    title: "My Posts"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", {
    action: "/sun-status",
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    for: "exampleInputEmail1"
  }, "Email address"), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email",
    name: "ipAddress"
  }), /* @__PURE__ */ React.createElement("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "We'll never share your email with anyone else.")), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    for: "exampleInputPassword1"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Password"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-check"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck1"
  }), /* @__PURE__ */ React.createElement("label", {
    className: "form-check-label",
    for: "exampleCheck1"
  }, "Check me out")), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: "Get sun status",
    className: "btn btn-primary"
  }, "Submit")), /* @__PURE__ */ React.createElement("form", {
    action: "/sun-status",
    method: "GET"
  }, "IP: ", /* @__PURE__ */ React.createElement("input", {
    name: "ipAddress"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Get sun status"
  })));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-SAWNYORH.js.map
