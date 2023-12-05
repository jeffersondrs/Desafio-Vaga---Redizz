import React from "react";
import { CircleProps } from "@/types/globalTypes";

const CircleComponent = ({ x, y }: CircleProps) => {
  const circleStyle: React.CSSProperties = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div
      style={circleStyle}
        className={`w-10 h-10 rounded-full bg-blue-500 absolute transform -translate-x-1/2 -translate-y-1/2 border-[.5px] border-white`}
    ></div>
  );
};

export default CircleComponent;
