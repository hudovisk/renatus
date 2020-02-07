import Graph, { Node, Edge } from "./graph";

export interface Point {
  x: number;
  y: number;
}

export interface GraphLayoutNode extends Node {
  width: number;
  height: number;
  center: Point;
}

export interface GraphLayoutEdge extends Edge {
  points: Point[];
}

interface GraphLayout extends Graph {
  nodes: GraphLayoutNode[];
  edges: GraphLayoutEdge[];
}

export default GraphLayout;
