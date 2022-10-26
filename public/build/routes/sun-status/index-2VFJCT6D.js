import {
  import_react
} from "/build/_shared/chunk-JBM2AQXC.js";
import {
  require_axios
} from "/build/_shared/chunk-K5W66GHZ.js";
import "/build/_shared/chunk-BZ6O6PW3.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-7V5EBD6C.js";

// browser-route-module:/Users/telos/sun-status-remix/app/routes/sun-status/index.jsx?browser
init_react();

// app/routes/sun-status/index.jsx
init_react();
var import_axios = __toModule(require_axios());
function Index() {
  const data = (0, import_react.useLoaderData)();
  let sunset = new Date(`${data.body.sunset}`).toLocaleString();
  let sunrise = new Date(`${data.body.sunrise}`).toLocaleString();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, data.ipAddress, " "), /* @__PURE__ */ React.createElement("h2", null, "'sunset'", sunset), /* @__PURE__ */ React.createElement("h4", null, "'sunrise'", sunrise));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/sun-status/index-2VFJCT6D.js.map
