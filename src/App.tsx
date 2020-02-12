import React from "react";
import LayoutRender from "./graph/components/LayoutRender";
import workflow from "./workflow/workflow.json";

import "./App.css";
import useGraph from "./graph/useGraph";
import graphToLayout from "./graph/graph-to-layout";
import { Node } from "./graph/graph";

const App = () => {
  const [graph, addNode, removeNode] = useGraph(workflow);
  const [selectedNode, setSelectedNode] = React.useState<Node | null>(null);
  const layout = graphToLayout(graph);

  console.log("selectedNode", selectedNode);

  return (
    <div className="App">
      <LayoutRender layout={layout} selectedNode={selectedNode} onNodeSelect={setSelectedNode} />
    </div>
  );
};

export default App;
