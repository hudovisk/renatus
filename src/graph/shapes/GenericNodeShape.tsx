import React from "react";
import { Rect } from "react-konva";

import ShapeProps from "./Shape";

const GenericNodeShape = (props: ShapeProps) => {
  const x = Math.round(props.center.x - props.width / 2);
  const y = Math.round(props.center.y - props.height / 2);

  return (
    <Rect 
      x={x} 
      y={y} 
      width={props.width}
      height={props.height}
      onClick={props.onClick}
      {...props.style}
    />
  )
};

export default GenericNodeShape;
