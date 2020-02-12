import React from "react";
import { Star } from "react-konva";

interface ShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const WIDTH_FACTOR = Math.sqrt(2) / 2;

const ConditionalBranchShape = (props: ShapeProps) => {
  return (
    <Star {...props} numPoints={5} outerRadius={props.width * WIDTH_FACTOR} innerRadius={props.width * WIDTH_FACTOR * 0.7 } fill="red" shadowBlur={10} />
  )
};

export default ConditionalBranchShape;
