import React from "react";
import StartNodeShape from "../shapes/StartNodeShape";
import GenericNodeShape from "../shapes/GenericNodeShape";
import ConditionalBranchShape from "../shapes/ConditionalBranchShape";
import ExitNodeShape from "../shapes/ExitNodeShape";
import { Node as GraphNode } from "../graph";
import { GraphLayoutNode } from "../graph-layout";
import ShapeProps from "../shapes/Shape";

const getNodeShape = (node: GraphNode): React.ComponentType<ShapeProps> => {
  switch (node.meta.type) {
    case "start":
      return StartNodeShape;
    case "conditional_branch":
      return ConditionalBranchShape;
    case "final":
      return ExitNodeShape;
    default:
      return GenericNodeShape;
  }
};

interface Props {
  node: GraphLayoutNode;
  selected: boolean;
  onClick: () => void;
}

const Node = ({ node, selected, onClick }: Props) => {
  console.log(node);

  const Shape = getNodeShape(node);
  return (
    <Shape
      center={node.center}
      width={node.width}
      height={node.height}
      onClick={onClick}
      style={{
        fill: selected ? "blue" : "red",
        shadowBlur: 10
      }}
    />
  );
};

export default Node;
