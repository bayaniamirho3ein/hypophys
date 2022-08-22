import { Component, HypophysNode } from "../core/component";
import { createELement } from "../core/core";
import { Page } from "../core/page";
import ReactHypophys from "../apps/react/hypophys";
import VueHypophys from "../apps/vue/hypophys";

class HomePage extends Page {
  render(): HypophysNode {
    return createELement("fragment", null, [
      createELement("react", ReactHypophys),
      createELement("vue", VueHypophys),
    ]);
  }
}

export default HomePage;
