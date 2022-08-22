import {HAppBlock} from "./src/core/core";
import HomePage from "./src/pages/home";

customElements.define("h-block", HAppBlock);

const container = document.getElementById("hroot");
const page = new HomePage();
page.mount(container!);