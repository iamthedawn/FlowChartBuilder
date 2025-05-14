export const addNode = (name, type, nodes, setNodes) => {
  const newNodeId = (name + nodes.length).toString();

  const newNode = {
    id: newNodeId,
    position: { x: 250, y: nodes.length * 10 },
    data: { label: "Label" },
    type: type,
  };

  setNodes((nds) => [...nds, newNode]);
};

export const handleDeleteNode = (id, setNodes, setEdges) => {
  setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  setEdges((prevEdges) =>
    prevEdges.filter((edge) => edge.source !== id && edge.target !== id)
  );
};
