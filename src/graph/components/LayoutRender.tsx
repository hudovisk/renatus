import React from "react";
import { Stage, Layer } from "react-konva";
import Layout from "../graph-layout";
import { Node as GraphNode, Edge as GraphEdge } from "../graph";
import Node from "./Node";
import Edge from "./Edge";

const LayoutRender = ({ layout, onAddNode }: Props) => {
  const onNodeClicked = (node: GraphNode) => () => {
    const NEW_NODE: GraphNode = {
      name: "new_node",
      meta: {
        type: "send_event"
      }
    };

    onAddNode(NEW_NODE, {
      from: node.name,
      to: NEW_NODE.name,
      label: "continue"
    });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {layout.nodes.map(node => (
          <Node key={node.name} node={node} onContextMenu={e => alert(e)} />
        ))}

        {layout.edges.map(edge => (
          <Edge key={edge.from + "-" + edge.to} edge={edge} />
        ))}
      </Layer>
    </Stage>
  );
};

interface Props {
  layout: Layout;
  onAddNode: (node: GraphNode, edge: GraphEdge) => void;
}

export default LayoutRender;
