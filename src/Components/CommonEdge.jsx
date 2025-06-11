import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  useReactFlow,
} from "@xyflow/react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import "../main/Flow.scss";

const CommonEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const { setEdges } = useReactFlow();
  const [hovered, setHovered] = useState(false);
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className="edgeLabel"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <CloseIcon
              className="nodrag nopan edgeLabel_icon"
              onClick={() => setEdges((es) => es.filter((e) => e.id !== id))}
            />
          )}
        </div>
      
      </EdgeLabelRenderer>
    </>
  );
};
export default CommonEdge;
