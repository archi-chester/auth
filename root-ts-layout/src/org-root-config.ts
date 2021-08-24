// import * as css from 'css.js';
import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(
    document.querySelector("#single-spa-layout") as HTMLTemplateElement
);

// const routes2 = constructRoutes(
//     document.querySelector("#single-spa-layout-auth") as HTMLTemplateElement
// );

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
// const applications2 = constructApplications({
//   routes: routes2,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
const layoutEngine = constructLayoutEngine({ routes, applications });
// const layoutEngine2 = constructLayoutEngine({ routes: routes2, applications: applications2 });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
