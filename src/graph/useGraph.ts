import React from "react";
import Graph, { Node, Edge } from "./graph";
import workflowToGraph from "../workflow/workflow-to-graph";

type AddNodeFn = (node: Node, edge: Edge) => void;

type RemoveNodeFn = (node: Node) => void;

const useGraph = (
  workflow: any = { states: {} }
): [Graph, AddNodeFn, RemoveNodeFn] => {
  const [graph, setGraph] = React.useState(workflowToGraph(workflow));

  const addNodeFn = (node: Node, edge: Edge) => {
    console.log("add node called");
    const newGraph = {
      nodes: graph.nodes.concat([node]),
      edges: graph.edges.concat([edge])
    };

    setGraph(newGraph);
  };

  const removeNodeFn = (removedNode: Node) => {
    const newNodes = graph.nodes.filter(node => node !== removedNode);
    const newEdges = graph.edges.filter(
      edge => edge.from !== removedNode.name && edge.to !== removedNode.name
    );

    setGraph({
      nodes: newNodes,
      edges: newEdges
    });
  };

  return [graph, addNodeFn, removeNodeFn];
};

export default useGraph;
