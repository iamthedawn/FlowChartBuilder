import AddBoxIcon from "@mui/icons-material/AddBox";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Panel, useReactFlow } from "@xyflow/react";
import { useState } from "react";
import "../Main/Flow.scss";
import { Tooltip } from "@mui/material";

const CustomControls = ({
  addNode,
  setNodes,
  setEdges,
  nodes,
  edges,
  setRenderSaved,
  renderSaved,
  setShowEditBox,
  showEditBox,
  handleEditSubmit,
  handleDomToImageScreenshot,
  exportNodesAndEdgesAsTxt,
}) => {
  const { zoomIn, zoomOut } = useReactFlow();
  const [showAddBox, setShowAddBox] = useState(false);
  const [showExportBox, setExportBox] = useState(false);
  const [showImportBox, setImportBox] = useState(false);

  const handleHideBoxes = () => {
    setShowAddBox(false);
    setImportBox(false);
  };
  const handleSaveFlow = () => {
    alert("You have saved current flow");

    localStorage.setItem("flow_nodes", JSON.stringify(nodes));
    localStorage.setItem("flow_edges", JSON.stringify(edges));
  };

  return (
    <Panel position="left" className="customControlPanel">
      <div className="panelBtn" onClick={() => setShowAddBox((prev) => !prev)}>
        <Tooltip title="Add New Nodes" arrow followCursor>
          <AddBoxIcon style={{ fontSize: "xxx-large" }} />
        </Tooltip>
      </div>
      <hr className="panelBrk" />
      <div className="panelBtn" onClick={() => zoomIn()}>
        <Tooltip title="Zoom In" arrow followCursor>
          <ZoomInIcon style={{ fontSize: "xxx-large" }} />
        </Tooltip>
      </div>

      <div className="panelBtn" onClick={() => zoomOut()}>
        <Tooltip title="Zoom Out" arrow followCursor>
          <ZoomOutIcon style={{ fontSize: "xxx-large" }} />
        </Tooltip>
      </div>
      <hr className="panelBrk" />
      <div
        className="panelBtn"
        onClick={() => {
          setRenderSaved(false);
          setNodes([]);
          setEdges([]);
        }}
      >
        <Tooltip title="Clear Screen" arrow followCursor>
          <DeleteIcon style={{ fontSize: "xxx-large" }} />
        </Tooltip>
      </div>
      <hr className="panelBrk" />
      <div className="panelBtn" onClick={() => handleSaveFlow()}>
        <Tooltip title="Save" arrow followCursor>
          <SaveIcon style={{ fontSize: "xxx-large" }} />
        </Tooltip>
      </div>
      <hr className="panelBrk" />
      <div
        className="panelBtn"
        style={{
          border: "2px solid",
        }}
        onClick={() => {
          alert("You are rendering previous saved flow");
          setRenderSaved(true);
        }}
      >
        Render Saved
      </div>
      <hr className="panelBrk" />
      <div className="panelBtn" onClick={() => setExportBox((prev) => !prev)}>
        <Tooltip title="Export" arrow followCursor>
          <SaveAltIcon style={{ fontSize: "xxx-large" }} />
        </Tooltip>
      </div>

      {showAddBox && (
        <div
          className="optionsBox"
          onMouseLeave={() => setShowAddBox((prev) => !prev)}
        >
          <button
            className="optionBtn"
            onClick={() => setImportBox((prev) => !prev)}
          >
            Add Previous Created Flow
          </button>
          <button
            className="optionBtn"
            onClick={() => addNode("NodeA", "custom1")}
          >
            Node 🔴
          </button>
          <button
            className="optionBtn"
            onClick={() => addNode("NodeB", "custom2")}
          >
            Node 🔵
          </button>
          <button
            className="optionBtn"
            onClick={() => addNode("NodeC", "custom3")}
          >
            Node 🟢
          </button>
          <button
            className="optionBtn"
            onClick={() => addNode("NodeD", "custom4")}
          >
            Node 🟣
          </button>
        </div>
      )}
      {showImportBox && (
        <div
          className="optionsBox4"
          onMouseLeave={() => handleHideBoxes()}
          onMouseOver={() => setShowAddBox(true)}
        >
          <textarea
            id="importTextArea"
            placeholder="Paste exported JSON here"
            style={{ width: "100%", height: "100px" }}
                onKeyDown={(e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // prevent newline
        const input = e.target.value.trim();
        try {
          const nodesMatch = input.match(/nodes:\s*(\[[\s\S]*?\])/);
          const edgesMatch = input.match(/edges:\s*(\[[\s\S]*?\])/);
          if (nodesMatch && edgesMatch) {
            const nodes = JSON.parse(nodesMatch[1]);
            const edges = JSON.parse(edgesMatch[1]);
            setNodes(nodes);
            setEdges(edges);
            alert("Nodes and edges have been successfully imported!");
          } else {
            alert(
              "Invalid format. Please ensure the text contains 'nodes: [...]' and 'edges: [...]'."
            );
          }
        } catch (error) {
          alert("Error parsing nodes or edges. Please check your input.");
        }
      }
    }}
          />
          <button
            className="optionBtn2"
            onClick={() => {
              const input = document
                .getElementById("importTextArea")
                .value.trim(); // Get the value from the textarea
              try {
                // Extract nodes and edges using regex
                const nodesMatch = input.match(/nodes:\s*(\[[\s\S]*?\])/); // Match the nodes array
                const edgesMatch = input.match(/edges:\s*(\[[\s\S]*?\])/); // Match the edges array
                console.log("my_hii nodesMatch",nodesMatch)
                if (nodesMatch && edgesMatch) {
                  const nodes = JSON.parse(nodesMatch[1]); // Parse the nodes array
                  const edges = JSON.parse(edgesMatch[1]); // Parse the edges array

                  setNodes(nodes); // Update nodes state
                  setEdges(edges); // Update edges state
                  alert("Nodes and edges have been successfully imported!");
                } else {
                  alert(
                    "Invalid format. Please ensure the text contains 'nodes: [...]' and 'edges: [...]'."
                  );
                }
              } catch (error) {
                alert("Error parsing nodes or edges. Please check your input.");
              }
            }}
          >
            Submit
          </button>
        </div>
      )}

      {showEditBox?.show && (
        <div className="optionsBox2">
          <input
            type="text"
            placeholder="Enter Node Label"
            value={showEditBox?.label}
            onChange={(e) =>
              setShowEditBox((prev) => ({
                ...prev,
                label: e.target.value,
              }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEditSubmit();
              }
            }}
          />
          <button className="optionBtn2" onClick={() => handleEditSubmit()}>
            Submit
          </button>
        </div>
      )}
      {showExportBox && (
        <div
          className="optionsBox3"
          onMouseLeave={() => setExportBox((prev) => !prev)}
        >
          <button className="optionBtn2" onClick={exportNodesAndEdgesAsTxt}>
            Export as Json Txt
          </button>
          <button className="optionBtn2" onClick={handleDomToImageScreenshot}>
            Export as Image
          </button>
        </div>
      )}
    </Panel>
  );
};
export default CustomControls;
