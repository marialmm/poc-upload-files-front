import reactDom from "react-dom";

import App from "./App";

const root = document.querySelector(".root");
const app = App();

reactDom.render(app, root);