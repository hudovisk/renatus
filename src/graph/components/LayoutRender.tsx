import React from "react";
import { Stage, Layer } from "react-konva";
import Layout, { GraphLayoutNode } from "../graph-layout";
import { Node as GraphNode } from "../graph";
import Node from "./Node";
import Edge from "./Edge";

const LayoutRender = ({ layout, selectedNode, onNodeSelect }: Props) => {
  // const onNodeClicked = (node: GraphNode) => () => {
  //   const NEW_NODE: GraphNode = {
  //     name: "new_node",
  //     meta: {
  //       type: "send_event"
  //     }
  //   };

  //   onAddNode(NEW_NODE, {
  //     from: node.name,
  //     to: NEW_NODE.name,
  //     label: "continue"
  //   });
  // };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {layout.edges.map(edge => (
          <Edge key={edge.from + "-" + edge.to} edge={edge} />
        ))}

        {layout.nodes.map(node => (
          <Node 
            key={node.name} 
            node={node} 
            selected={node.name === selectedNode?.name} 
            onClick={() => onNodeSelect(node)} 
          />
        ))}
      </Layer>
    </Stage>
  );
};

interface Props {
  layout: Layout;
  selectedNode: GraphLayoutNode;
  onNodeSelect: (node: GraphNode) => void;
}

export default LayoutRender;
