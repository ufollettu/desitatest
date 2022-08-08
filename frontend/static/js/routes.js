import Index from "./views/Index.js";
import Login from "./views/Login.js";
import Privacy from "./views/Privacy.js";
import GeneralData from "./views/GeneralData.js";
import SpecificData from "./views/SpecificData.js";
import Payment from "./views/Payment.js";
import Summary from "./views/Summary.js";

export const routes = [
  { path: "/", view: Index },
  { path: "/accedi", view: Login },
  { path: "/privacy", view: Privacy },
  { path: "/general-data", view: GeneralData },
  { path: "/specific-data", view: SpecificData },
  { path: "/specific-data/:variant", view: SpecificData },
  { path: "/payment", view: Payment },
  { path: "/summary", view: Summary },
];
