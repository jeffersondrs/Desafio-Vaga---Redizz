"use client";

import React, { useState } from "react";
import CircleComponent from "./Circle";
import { CircleProps } from "@/types/globalTypes";

const CircleContainer = () => {
  const [circles, setCircles] = useState<CircleProps[]>([]);
  const [undoneCircles, setUndoneCircles] = useState<CircleProps[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newCircle: CircleProps = { x: e.clientX, y: e.clientY };
    setCircles((prevCircles) => [...prevCircles, newCircle]);
    setUndoneCircles([]);
  };

  const handleUndo = () => {
    if (circles.length > 0) {
      const lastCircle = circles[circles.length - 1];
      setUndoneCircles((prevUndoneCircles) => [
        ...prevUndoneCircles,
        lastCircle,
      ]);
      setCircles((prevCircles) => prevCircles.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (undoneCircles.length > 0) {
      const lastUndoneCircle = undoneCircles[undoneCircles.length - 1];
      setCircles((prevCircles) => [...prevCircles, lastUndoneCircle]);
      setUndoneCircles((prevUndoneCircles) => prevUndoneCircles.slice(0, -1));
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="relative w-screen h-screen border-2 border-black z-30"
      >
        {circles.map((circle, index) => (
          <CircleComponent key={index} x={circle.x} y={circle.y} />
        ))}
        <div className="bg-white absolute z-50">
          <button
            onClick={handleUndo}
            className="px-5 py-3 bg-red-600 hover:bg-red-500"
          >
            Desfazer
          </button>
          <button
            onClick={handleRedo}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500"
          >
            Refazer
          </button>
        </div>
      </div>
    </>
  );
};

export default CircleContainer;
