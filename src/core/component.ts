import React from "react";
import ReactDOM from "react-dom/client";
import { h as vueCreateElement, render as vueRender } from "vue";

export type HypophysNode = Component | Element;
export type HypophysSupportedNode = any;

export class Component {
  _node: HypophysSupportedNode;
  _children: HypophysSupportedNode[];
  type: string | null;

  constructor(
    node: HypophysSupportedNode = null,
    children: HypophysNode[] = [],
    type: string | null = null
  ) {
    this._node = node;
    this._children = children;
    this.type = type;
  }

  render(): HypophysNode {
    return new Component();
  }

  mount(parent: HTMLElement): void {
    if (this.type === "fragment") {
      for (const child of this._children) {
        if (child instanceof Component) {
          child.mount(parent);
        }
      }
    } else if (this.type === "react") {
      this.mountReact(parent, this._node);
    } else if (this.type === "vue") {
      this.mountVue(parent, this._node);
    } else {
      this.mountNode(parent, this._node);
    }
  }

  mountNode(parent: HTMLElement, node: HypophysSupportedNode): void {
    if (node instanceof Element) {
      parent.appendChild(node);
    } else {
      // TODO something wrong
      throw new Error("Unsupported node type");
    }
  }

  mountReact(parent: HTMLElement, node: any) {
    const reactElementBlock = document.createElement("h-block");
    const reactElement = React.createElement(node);
    const root = ReactDOM.createRoot(reactElementBlock);
    root.render(reactElement);
    parent.appendChild(reactElementBlock);
  }

  mountVue(parent: HTMLElement, node: any) {
    const vueElementBlock = document.createElement("h-block");
    const vueElement = vueCreateElement(node);
    vueRender(vueElement, vueElementBlock);
    parent.appendChild(vueElementBlock);
  }
}
