import dagre from "dagre";
import Graph, { Node, Edge } from "./graph";
import GraphLayout from "./graph-layout";

type DagreNode = dagre.Node & Node["meta"];

type DagreEdge = dagre.GraphEdge & Omit<Edge, "from" | "to">;

interface Size {
  width: number;
  height: number;
}

const NODE_SIZES: Record<string, Size> = {
  start: { width: 50, height: 50 },
  final: { width: 50, height: 50 }
};

const DEFAULT_NODE_SIZE: Size = {
  width: 100,
  height: 100
};

const setNodes = (graph: dagre.graphlib.Graph, nodes: Node[]) => {
  nodes.forEach(node =>
    graph.setNode(node.name, {
      ...node.meta,
      ...(NODE_SIZES[node.meta.type] || DEFAULT_NODE_SIZE)
    })
  );
};

const setEdges = (graph: dagre.graphlib.Graph, edges: Edge[]) => {
  // Default to assigning a new object as a label for each new edge.
  graph.setDefaultEdgeLabel(() => ({}));

  edges.forEach(({ from, to, ...rest }) => graph.setEdge(from, to, rest));
};

const graphToLayout = (graph: Graph): GraphLayout => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setGraph({
    rankdir: "TB",
    align: undefined,
    nodesep: 50,
    ranksep: 50
  });

  setNodes(dagreGraph, graph.nodes);
  setEdges(dagreGraph, graph.edges);

  dagre.layout(dagreGraph);

  const layoutNodes = dagreGraph.nodes().map(name => {
    const { x, y, width, height, ...meta } = dagreGraph.node(name) as DagreNode;

    return {
      name,
      meta,
      center: { x, y },
      width,
      height
    };
  });

  const layoutEdges = dagreGraph.edges().map(edge => {
    const { points, ...rest } = dagreGraph.edge(edge) as DagreEdge;
    return { from: edge.v, to: edge.w, points, ...rest };
  });

  return {
    nodes: layoutNodes,
    edges: layoutEdges
  };
};

export default graphToLayout;
