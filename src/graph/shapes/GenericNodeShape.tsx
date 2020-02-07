import React from "react";
import { Rect } from "react-konva";

interface ShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const GenericNodeShape = (props: ShapeProps) => (
  <Rect {...props} fill="red" shadowBlur={10} />
);

export default GenericNodeShape;
