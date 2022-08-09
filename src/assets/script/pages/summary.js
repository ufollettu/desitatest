import { store } from "./store";

window.addEventListener("DOMContentLoaded", (event) => {
  store.remove("code");
  store.remove("date");
  store.remove("amount");
  store.remove("privacyPolicy");
});
