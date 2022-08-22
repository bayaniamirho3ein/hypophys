import { HypophysSupportedNode } from "@/core/component";
import React, { useEffect, useRef } from "react";
import { mount } from "../core/core";

interface GetMountableComponentProps {
  component: HypophysSupportedNode;
}

export default function GetMountableComponent(
  props: GetMountableComponentProps
) {
  const thisRef = useRef<HTMLElement>();
  const { component } = props;

  useEffect(() => {
    if (thisRef.current) {
      mount(component, thisRef.current);
    }
  }, [thisRef, component]);

  return <h-block ref={thisRef} />;
}
