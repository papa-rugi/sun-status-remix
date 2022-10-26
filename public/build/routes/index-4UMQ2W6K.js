import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/telos/Documents/remix-demo/app/routes/index.jsx?browser
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
    method: "GET"
  }, "Post Id: ", /* @__PURE__ */ React.createElement("input", {
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
//# sourceMappingURL=/build/routes/index-4UMQ2W6K.js.map
