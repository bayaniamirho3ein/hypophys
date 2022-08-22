import { Component, HypophysSupportedNode } from "./component";
import React from "react";

export function mount(node: HypophysSupportedNode, parent: HTMLElement): void {
  parent.innerHTML = "";
  if (node instanceof Component) {
    node.mount(parent);
  } else {
    parent.appendChild(node);
  }
}

export function createELement(
  type: string,
  node: HypophysSupportedNode=null,
  children: HypophysSupportedNode[]=[]
): HypophysSupportedNode {
  return new Component(node, children, type);
}

export class HAppBlock extends HTMLElement {}

export default {
  mount,
  createELement,
  HAppBlock,
};
