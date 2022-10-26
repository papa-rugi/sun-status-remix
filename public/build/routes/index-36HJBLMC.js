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

// app/components/common/Form.jsx
init_react();
var Form_default = Form = ({ name, buttonValue, label, placeholder, action, method }) => {
  console.log(action);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", {
    action,
    method
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "exampleInputEmail1"
  }, label), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder,
    name
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: buttonValue,
    className: "btn btn-primary"
  }, "Submit")));
};

// app/components/views/Root/RootView.jsx
function RootView() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "container root-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Sun Status! Enter the IP address of a location where you would like to determine the Sunset and Sunrise."), /* @__PURE__ */ React.createElement(Form_default, {
    name: "ipAddress",
    buttonValue: "Get sun status",
    label: "Enter IP address",
    placeholder: "Enter IP address",
    action: "/sun-status",
    method: "GET"
  }));
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
//# sourceMappingURL=/build/routes/index-36HJBLMC.js.map
