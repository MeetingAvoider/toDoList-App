import store from "./store.js";
function render() {
  addEventListener("DOMContentLoaded", (event) => {
    console.log(store);
  });
}
export default render;
