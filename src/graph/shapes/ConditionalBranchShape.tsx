import React from "react";
import { Star } from "react-konva";
import ShapeProps from "./Shape";

const WIDTH_FACTOR = Math.sqrt(2) / 2;

const ConditionalBranchShape = (props: ShapeProps) => {
  return (
    <Star 
      x={props.center.x} 
      y={props.center.y} 
      numPoints={5} 
      outerRadius={Math.round(props.width * WIDTH_FACTOR)} 
      innerRadius={Math.round(props.width * WIDTH_FACTOR * 0.7)} 
      onClick={props.onClick}
      {...props.style}
    />
  )
};

export default ConditionalBranchShape;
