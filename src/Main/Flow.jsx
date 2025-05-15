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

import CustomControls from "../Components/CustomControls";
import CommonNode from "../Components/CommonNode";
import CommonEdge from "../Components/CommonEdge";
import domtoimage from "dom-to-image";
import { addNode, handleDeleteNode } from "../Config/Config";

import "./Flow.scss";

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    [
    {
      id: "historical_initial",
      position: {
        x: 1156.8870301466868,
        y: 219.12779790231588,
      },
      data: {
        label: "Sample Flow Chart: ",
      },
      type: "initialCustomNode1",
      measured: {
        width: 152,
        height: 62,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeA1",
      position: {
        x: 1161.162990641385,
        y: 342.82481198463466,
      },
      data: {
        label: "Projects",
      },
      type: "custom1",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB2",
      position: {
        x: 1163.0426274173442,
        y: 464.7396336554048,
      },
      data: {
        label: "Project 2",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB3",
      position: {
        x: 1659.349166631103,
        y: 471.8192201797088,
      },
      data: {
        label: "Project 3",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB4",
      position: {
        x: 819.4157109348399,
        y: 465.3609100931067,
      },
      data: {
        label: "Project 1",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeC5",
      position: {
        x: 626.1351126748974,
        y: 566.5886851261546,
      },
      data: {
        label: "FrontEnd",
      },
      type: "custom3",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeC6",
      position: {
        x: 906.9084241716176,
        y: 567.9819124583596,
      },
      data: {
        label: "Backend",
      },
      type: "custom3",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeC7",
      position: {
        x: 1128.9312617576893,
        y: 566.3129474756627,
      },
      data: {
        label: "FrontEnd",
      },
      type: "custom3",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeC8",
      position: {
        x: 1390.5765139757248,
        y: 564.1163947506855,
      },
      data: {
        label: "Backend",
      },
      type: "custom3",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeC9",
      position: {
        x: 1625.0603745996466,
        y: 560.9155723984867,
      },
      data: {
        label: "FrontEnd",
      },
      type: "custom3",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeC10",
      position: {
        x: 1905.2766651713218,
        y: 564.4170256086857,
      },
      data: {
        label: "Backend",
      },
      type: "custom3",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB11",
      position: {
        x: 377.90243179976324,
        y: 674.8440517517124,
      },
      data: {
        label: "Resources Assigned",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 62,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD12",
      position: {
        x: 531.2270661580309,
        y: 811.4560554652464,
      },
      data: {
        label: "Alwin",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD13",
      position: {
        x: 517,
        y: 904,
      },
      data: {
        label: "Philip",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD14",
      position: {
        x: 519,
        y: 996.125,
      },
      data: {
        label: "John",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD15",
      position: {
        x: 759.0579882803949,
        y: 811.1143467261774,
      },
      data: {
        label: "Washington",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD16",
      position: {
        x: 756.4485628597988,
        y: 899.1610329850749,
      },
      data: {
        label: "Chris Paul",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD17",
      position: {
        x: 756.7263057684845,
        y: 996.6818998823899,
      },
      data: {
        label: "Gayle",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD18",
      position: {
        x: 1116.2014510065826,
        y: 826.7114772748446,
      },
      data: {
        label: "Stephen",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: true,
      dragging: false,
    },
    {
      id: "NodeD19",
      position: {
        x: 1117.2056955578275,
        y: 907.213098423965,
      },
      data: {
        label: "Adwin",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD20",
      position: {
        x: 1108.6645531609856,
        y: 980.2672753371434,
      },
      data: {
        label: "Saezal",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD21",
      position: {
        x: 1420.0622300235657,
        y: 886.7847899439533,
      },
      data: {
        label: "Ponting",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD22",
      position: {
        x: 1407.7328071571424,
        y: 788.1269640087088,
      },
      data: {
        label: "Andrew",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD23",
      position: {
        x: 1423.7610568834925,
        y: 975.8199841461441,
      },
      data: {
        label: "Clarke",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD24",
      position: {
        x: 2115.536707000712,
        y: 859.3172236337795,
      },
      data: {
        label: "Dean Ambrose",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD25",
      position: {
        x: 1765.776277769778,
        y: 864.4788532999015,
      },
      data: {
        label: "Tom Curran",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD26",
      position: {
        x: 2121.934671737058,
        y: 949.8567138663004,
      },
      data: {
        label: "Richard",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD27",
      position: {
        x: 2116.0222638272585,
        y: 768.0448939898658,
      },
      data: {
        label: "Jos Buttler",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD28",
      position: {
        x: 1769.7274081531168,
        y: 951.2738701995818,
      },
      data: {
        label: "Roman",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeD29",
      position: {
        x: 1766.5046130095973,
        y: 779.0869634517904,
      },
      data: {
        label: "Sam Curran",
      },
      type: "custom4",
      measured: {
        width: 152,
        height: 42,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB30",
      position: {
        x: 1134.8735132701217,
        y: 685.0764561436298,
      },
      data: {
        label: "Resources Assigned",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 62,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB31",
      position: {
        x: 912.1978333826466,
        y: 693.5579175511342,
      },
      data: {
        label: "Resources Assigned",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 62,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB32",
      position: {
        x: 1625.0729231394096,
        y: 661.3622460272229,
      },
      data: {
        label: "Resources Assigned",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 62,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB33",
      position: {
        x: 1407.680367163677,
        y: 642.1733967357585,
      },
      data: {
        label: "Resources Assigned",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 62,
      },
      selected: false,
      dragging: false,
    },
    {
      id: "NodeB34",
      position: {
        x: 1910.6407431496193,
        y: 676.2936259492815,
      },
      data: {
        label: "Resources Assigned",
      },
      type: "custom2",
      measured: {
        width: 152,
        height: 62,
      },
      selected: false,
      dragging: false,
    },
  ]
);
  const [edges, setEdges, onEdgesChange] = useEdgesState([
    {
      source: "NodeA1",
      sourceHandle: "bottomSrc",
      target: "NodeB4",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeA1bottomSrc-NodeB4topTarget",
    },
    {
      source: "NodeA1",
      sourceHandle: "bottomSrc",
      target: "NodeB2",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeA1bottomSrc-NodeB2topTarget",
    },
    {
      source: "NodeA1",
      sourceHandle: "bottomSrc",
      target: "NodeB3",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeA1bottomSrc-NodeB3topTarget",
    },
    {
      source: "NodeB4",
      sourceHandle: "bottomSrc",
      target: "NodeC5",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeB4bottomSrc-NodeC5topTarget",
    },
    {
      source: "NodeB4",
      sourceHandle: "bottomSrc",
      target: "NodeC6",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeB4bottomSrc-NodeC6topTarget",
    },
    {
      source: "NodeB2",
      sourceHandle: "bottomSrc",
      target: "NodeC7",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeB2bottomSrc-NodeC7topTarget",
    },
    {
      source: "NodeB2",
      sourceHandle: "bottomSrc",
      target: "NodeC8",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeB2bottomSrc-NodeC8topTarget",
    },
    {
      source: "NodeB3",
      sourceHandle: "bottomSrc",
      target: "NodeC9",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeB3bottomSrc-NodeC9topTarget",
    },
    {
      source: "NodeB3",
      sourceHandle: "bottomSrc",
      target: "NodeC10",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeB3bottomSrc-NodeC10topTarget",
    },
    {
      source: "NodeC5",
      sourceHandle: "bottomSrc",
      target: "NodeB11",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeC5bottomSrc-NodeB11topTarget",
    },
    {
      source: "NodeB11",
      sourceHandle: "bottomSrc",
      target: "NodeD12",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB11bottomSrc-NodeD12immediate",
    },
    {
      source: "NodeB11",
      sourceHandle: "bottomSrc",
      target: "NodeD13",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB11bottomSrc-NodeD13immediate",
    },
    {
      source: "NodeB11",
      sourceHandle: "bottomSrc",
      target: "NodeD14",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB11bottomSrc-NodeD14immediate",
    },
    {
      source: "NodeC8",
      sourceHandle: "bottomSrc",
      target: "NodeD22",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeC8bottomSrc-NodeD22immediate",
    },
    {
      source: "NodeC8",
      sourceHandle: "bottomSrc",
      target: "NodeD21",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeC8bottomSrc-NodeD21immediate",
    },
    {
      source: "NodeC8",
      sourceHandle: "bottomSrc",
      target: "NodeD23",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeC8bottomSrc-NodeD23immediate",
    },
    {
      source: "NodeC6",
      sourceHandle: "bottomSrc",
      target: "NodeB31",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeC6bottomSrc-NodeB31topTarget",
    },
    {
      source: "NodeB31",
      sourceHandle: "bottomSrc",
      target: "NodeD15",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB31bottomSrc-NodeD15immediate",
    },
    {
      source: "NodeB31",
      sourceHandle: "bottomSrc",
      target: "NodeD16",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB31bottomSrc-NodeD16immediate",
    },
    {
      source: "NodeB31",
      sourceHandle: "bottomSrc",
      target: "NodeD17",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB31bottomSrc-NodeD17immediate",
    },
    {
      source: "NodeC7",
      sourceHandle: "bottomSrc",
      target: "NodeB30",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeC7bottomSrc-NodeB30topTarget",
    },
    {
      source: "NodeB30",
      sourceHandle: "bottomSrc",
      target: "NodeD18",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB30bottomSrc-NodeD18immediate",
    },
    {
      source: "NodeB30",
      sourceHandle: "bottomSrc",
      target: "NodeD19",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB30bottomSrc-NodeD19immediate",
    },
    {
      source: "NodeB30",
      sourceHandle: "bottomSrc",
      target: "NodeD20",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB30bottomSrc-NodeD20immediate",
    },
    {
      source: "NodeC9",
      sourceHandle: "bottomSrc",
      target: "NodeB32",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeC9bottomSrc-NodeB32topTarget",
    },
    {
      source: "NodeB32",
      sourceHandle: "bottomSrc",
      target: "NodeD29",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB32bottomSrc-NodeD29immediate",
    },
    {
      source: "NodeB32",
      sourceHandle: "bottomSrc",
      target: "NodeD25",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB32bottomSrc-NodeD25immediate",
    },
    {
      source: "NodeB32",
      sourceHandle: "bottomSrc",
      target: "NodeD28",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB32bottomSrc-NodeD28immediate",
    },
    {
      source: "NodeC10",
      sourceHandle: "bottomSrc",
      target: "NodeB34",
      targetHandle: "topTarget",
      type: "custom-edge",
      id: "xy-edge__NodeC10bottomSrc-NodeB34topTarget",
    },
    {
      source: "NodeB34",
      sourceHandle: "bottomSrc",
      target: "NodeD27",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB34bottomSrc-NodeD27immediate",
    },
    {
      source: "NodeB34",
      sourceHandle: "bottomSrc",
      target: "NodeD24",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB34bottomSrc-NodeD24immediate",
    },
    {
      source: "NodeB34",
      sourceHandle: "bottomSrc",
      target: "NodeD26",
      targetHandle: "immediate",
      type: "custom-edge",
      id: "xy-edge__NodeB34bottomSrc-NodeD26immediate",
    },
  ]);
  const [renderSaved, setRenderSaved] = useState(false);
  const [showEditBox, setShowEditBox] = useState({
    id: "",
    show: false,
    label: "",
  });
  const [showLoader, setShowLoader] = useState(true);

  const handleDomToImageScreenshot = () => {
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
