import React from "react";
import { Circle } from "react-konva";

interface ShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const WIDTH_FACTOR = Math.sqrt(2) / 2;

const ExitNodeShape = (props: ShapeProps) => {
  return <Circle {...props} radius={props.width * WIDTH_FACTOR} fill="red" shadowBlur={10} />;
};

export default ExitNodeShape;
