import { Component, HypophysNode } from "./component";

export class Page {
  render(): HypophysNode {
    throw new Error("Method not implemented.");
  }

  mount(ref: HTMLElement): void {
    const node = this.render();
    if (node instanceof Component) {
      node.mount(ref);
    } else {
      ref.appendChild(node);
    }
  }
}
