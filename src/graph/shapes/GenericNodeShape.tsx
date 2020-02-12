import React from "react";
import { Rect } from "react-konva";

interface ShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const GenericNodeShape = (props: ShapeProps) => {
  const x = Math.round(props.x - props.width / 2);
  const y = Math.round(props.y - props.height / 2);

  return (
    <Rect x={x} y={y} width={props.width} height={props.height} fill="red" shadowBlur={10} />
  )
};

export default GenericNodeShape;
