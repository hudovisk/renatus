import Graph, { Node, Edge } from "../graph/graph";

interface States {
  [key: string]: {
    type: string;
    on?: Record<string, string>;
    [key: string]: any;
  };
}

const getNodes = (states: States): Node[] => {
  const nodes: Node[] = [];
  for (const [name, state] of Object.entries(states)) {
    const { on, ...meta } = state;
    nodes.push({ name, meta });
  }

  return nodes;
};

const getEdges = (states: States): Edge[] => {
  const edges: Edge[] = [];
  for (const [name, state] of Object.entries(states)) {
    for (const [label, target] of Object.entries(state.on || {})) {
      edges.push({ from: name, to: target, label });
    }
  }

  return edges;
};

const workflowToGraph = (workflow: any): Graph => ({
  nodes: getNodes(workflow.states),
  edges: getEdges(workflow.states)
});

export default workflowToGraph;
