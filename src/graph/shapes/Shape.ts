import { ShapeConfig } from "konva/types/Shape";

interface ShapeProps {
  center: {
    x: number;
    y: number;
  };
  style: Partial<ShapeConfig>;
  width: number;
  height: number;
  onClick: () => void;
}

export default ShapeProps;
