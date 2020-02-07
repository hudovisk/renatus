import React from "react";
import StartNodeShape from "../shapes/StartNodeShape";
import GenericNodeShape from "../shapes/GenericNodeShape";
import { Node as GraphNode } from "../graph";
import { GraphLayoutNode } from "../graph-layout";

interface ShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
  onContextMenu: () => void;
}

const getNodeShape = (node: GraphNode): React.ComponentType<ShapeProps> => {
  switch (node.meta.type) {
    case "start":
      return StartNodeShape;
    default:
      return GenericNodeShape;
  }
};

interface Props {
  node: GraphLayoutNode;
  onContextMenu: (node: GraphNode) => void;
}

const Node = ({ node, onContextMenu }: Props) => {
  const x = Math.round(node.center.x - node.width / 2);
  const y = Math.round(node.center.y - node.height / 2);

  const Shape = getNodeShape(node);
  return (
    <Shape
      x={x}
      y={y}
      width={node.width}
      height={node.height}
      onContextMenu={() => onContextMenu(node)}
    />
  );
};

export default Node;
