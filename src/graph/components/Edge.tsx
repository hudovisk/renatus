import React from "react";
import { GraphLayoutEdge } from "../graph-layout";
import { Line } from "react-konva";

interface Props {
  edge: GraphLayoutEdge;
}

const Edge = ({ edge }: Props) => {
  const points = edge.points.flatMap(point => [point.x, point.y]);
  return <Line points={points} fill="transparent" stroke="black" />;
};

export default Edge;
