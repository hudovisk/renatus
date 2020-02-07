import React from "react";
import { Rect } from "react-konva";

import ShapeProps from "./Shape";

const StartNodeShape = (props: ShapeProps) => (
  <Rect {...props} fill="red" shadowBlur={10} />
);

export default StartNodeShape;
