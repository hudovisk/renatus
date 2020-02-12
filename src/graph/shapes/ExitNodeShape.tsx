import React from "react";
import { Circle } from "react-konva";
import ShapeProps from "./Shape";

const WIDTH_FACTOR = Math.sqrt(2) / 2;

const ExitNodeShape = (props: ShapeProps) => (
  <Circle 
    x={props.center.x} 
    y={props.center.y}
    radius={props.width * WIDTH_FACTOR} 
    onClick={props.onClick}
    {...props.style}
  />
);

export default ExitNodeShape;
