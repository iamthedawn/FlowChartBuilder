import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Handle, Position } from "@xyflow/react";
import "./CommonNode.scss";

const CommonNode = ({ type,data, id, handleDeleteNode,setShowEditBox }) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div
      className={`Node_container ${type}_bgColor`}
      onMouseOver={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="headerFlex">
        <div className="subHeading">{data?.label}</div>
      </div>
      <div style={{
        position: "absolute",
        right: "0px",
        top: "0px",
      }}>
        <EditNoteIcon
          style={{ cursor: "pointer" }}
          onClick={() =>  setShowEditBox((prev) => {
            return {
              ...prev,
              id: id,
              label: data?.label,
              show: !prev.show,
            };
          })}
        />
      </div>

      <>
        <Handle
          id="Yes"
          type="source"
          position={Position.Right}
          className={`${type}_bgColor actionSrc1`}
          
        />

        <Handle
          id="immediate"
          type="target"
          position={Position.Left}
          className={`${type}_bgColor Duo_Target1`}
        />
        <Handle
          id="bottomSrc"
          type="source"
          position={Position.Bottom}
          className={`${type}_bgColor bottom_source`}
        />
         <Handle
          id="topTarget"
          type="target"
          position={Position.Top}
          className={`${type}_bgColor bottom_target`}
        />
      </>

      {showDelete && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteNode(id);
          }}
          className="deleteBtn"
        >
          Delete
        </div>
      )}
      
    </div>
  );
};
export default CommonNode;
