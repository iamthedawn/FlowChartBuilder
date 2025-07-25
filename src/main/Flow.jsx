import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  ReactFlow,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { addNode, handleDeleteNode } from "../utils/helper";
import CustomControls from "../components/CustomControls";
import CommonNode from "../components/CommonNode";
import CommonEdge from "../components/CommonEdge";
import domtoimage from "dom-to-image";
import "./Flow.scss";
import { initialNodes, initialEdges } from "../utils/config";

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [renderSaved, setRenderSaved] = useState(false);
  const [showEditBox, setShowEditBox] = useState({
    id: "",
    show: false,
    label: "",
  });
  const [showLoader, setShowLoader] = useState(true);

  const handleDomToImageScreenshot = (setExportBox) => {
    setExportBox(false);
    domtoimage
      .toPng(document.body)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "flowchart-domtoimage.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("dom-to-image screenshot failed:", error);
      });
  };

  const handleEditSubmit = () => {
    const updatedNodes = nodes.map((node) =>
      node.id === showEditBox.id
        ? {
            ...node,
            data: {
              ...node.data,
              label: showEditBox.label,
            },
          }
        : node
    );

    setNodes(updatedNodes);
    setShowEditBox({ id: "", label: "", show: false });
  };

  const exportNodesAndEdgesAsTxt = () => {
    const data = {
      nodes: nodes, // Include nodes array
      edges: edges, // Include edges array
    };

    const formattedData = `nodes: ${JSON.stringify(
      data.nodes,
      null,
      2
    )}\n\nedges: ${JSON.stringify(data.edges, null, 2)}`;
    const blob = new Blob([formattedData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "flowchart-data.txt";
    link.click();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      alert(
        "Below is a sample flow chart, you can clear the screen and create your own flow chart"
      );
    }, 2500); // Delay of 0ms ensures it runs after the render
    const timeout2 = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // Delay of 2 seconds to show the loader
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
    // return () => clearTimeout(timeout);
  }, []);

  const nodeTypes = useMemo(
    () => ({
      initialCustomNode1: (props) => (
        <CommonNode
          {...props}
          handleDeleteNode={(id) => handleDeleteNode(id, setNodes, setEdges)}
          setShowEditBox={setShowEditBox}
        />
      ),
      custom1: (props) => (
        <CommonNode
          {...props}
          handleDeleteNode={(id) => handleDeleteNode(id, setNodes, setEdges)}
          setShowEditBox={setShowEditBox}
        />
      ),
      custom2: (props) => (
        <CommonNode
          {...props}
          handleDeleteNode={(id) => handleDeleteNode(id, setNodes, setEdges)}
          setShowEditBox={setShowEditBox}
        />
      ),
      custom3: (props) => (
        <CommonNode
          {...props}
          handleDeleteNode={(id) => handleDeleteNode(id, setNodes, setEdges)}
          setShowEditBox={setShowEditBox}
        />
      ),
      custom4: (props) => (
        <CommonNode
          {...props}
          handleDeleteNode={(id) => handleDeleteNode(id, setNodes, setEdges)}
          setShowEditBox={setShowEditBox}
        />
      ),
    }),
    [setNodes, setEdges, setShowEditBox]
  );

  useEffect(() => {
    if (renderSaved) {
      const savedEdges = localStorage.getItem("flow_edges");
      const savedNodes = localStorage.getItem("flow_nodes");

      setEdges(savedEdges ? JSON.parse(savedEdges) : []);
      setNodes(savedNodes ? JSON.parse(savedNodes) : []);
    }
  }, [renderSaved]);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "custom-edge" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [nodes, setEdges, setNodes]
  );

  return showLoader ? (
    <div className="spinner"></div>
  ) : (
    <div className="container">
      <ReactFlow
        style={{ backgroundColor: "#000000ad" }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={{ "custom-edge": CommonEdge }}
      >
        <CustomControls
          setNodes={setNodes}
          setEdges={setEdges}
          setShowEditBox={setShowEditBox}
          handleEditSubmit={handleEditSubmit}
          showEditBox={showEditBox}
          addNode={(name, type) => addNode(name, type, nodes, setNodes)}
          nodes={nodes}
          edges={edges}
          setRenderSaved={setRenderSaved}
          renderSaved={renderSaved}
          handleDomToImageScreenshot={handleDomToImageScreenshot}
          exportNodesAndEdgesAsTxt={exportNodesAndEdgesAsTxt}
        />
        <Background color="#ffffff" gap={20} size={1} />
        <MiniMap className="minimap" />
      </ReactFlow>
    </div>
  );
};

export default Flow;
