interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export interface Node {
  name: string;
  meta: {
    type: string;
    [key: string]: any;
  };
}

export interface Edge {
  from: string;
  to: string;
  label: string;
}

export default Graph;
