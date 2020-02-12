import { ShapeConfig } from "konva/types/Shape";
import { KonvaEventObject } from "konva/types/Node";

interface ShapeProps {
  center: {
    x: number;
    y: number;
  };
  style: Partial<ShapeConfig>;
  width: number;
  height: number;
  onClick: (e: KonvaEventObject<MouseEvent>) => void;
}

export default ShapeProps;
