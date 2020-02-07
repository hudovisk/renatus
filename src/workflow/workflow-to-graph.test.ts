import workflowToGraph from "./workflow-to-graph";
import workflow from "./workflow.json";

describe("useGraph", () => {
  it("should convert workflow to graph", () => {
    const graph = workflowToGraph(workflow);

    expect(graph.nodes.length).toBeGreaterThan(0);
    expect(graph.edges.length).toBeGreaterThan(0);
  });
});
