import React from "react";
import { Stage, Layer } from "react-konva";
import { KonvaEventObject } from "konva/types/Node";
import Layout from "../graph-layout";
import { Node as GraphNode } from "../graph";
import Node from "./Node";
import Edge from "./Edge";

const LayoutRender = ({ layout, selectedNode, onNodeSelect }: Props) => {
  const selectNode = (node: GraphNode) => (e: KonvaEventObject<MouseEvent>) => {
    e.cancelBubble = true;
    onNodeSelect(node)
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} onClick={() => onNodeSelect(null)}>
      <Layer>
        {layout.edges.map(edge => (
          <Edge key={edge.from + "-" + edge.to} edge={edge} />
        ))}

        {layout.nodes.map(node => (
          <Node 
            key={node.name} 
            node={node} 
            selected={node.name === selectedNode?.name} 
            onClick={selectNode(node)}
          />
        ))}
      </Layer>
    </Stage>
  );
};

interface Props {
  layout: Layout;
  selectedNode: GraphNode | null;
  onNodeSelect: (node: GraphNode | null) => void;
}

export default LayoutRender;
