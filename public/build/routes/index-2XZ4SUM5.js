import { e as t, f as e } from "/build/_shared/chunk-AKSB5QXU.js";
e();
e();
var s = () => ({ title: "My Posts" });
function o() {
  return t.createElement(
    "div",
    null,
    t.createElement(
      "form",
      { action: "/sun-status", method: "GET" },
      "Post Id: ",
      t.createElement("input", { name: "postId" }),
      t.createElement("input", { type: "submit", value: "Get Posts" })
    )
  );
}
export { o as default, s as meta };
