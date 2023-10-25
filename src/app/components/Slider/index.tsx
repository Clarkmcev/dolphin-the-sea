import React, { useEffect, useRef, useState } from "react";

interface Props {
  min: number;
  max: number;
  onChange: (value: number) => void;
}

function Slider({ min, max, onChange }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [value, setValue] = useState(20)

    const ref = useRef()

  const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const trackStyle = ` h-10 ${
    isDragging ? "cursor-grabbing bg-red-500" : "cursor-pointer bg-primary"
  }`;

  const handleDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const percentage = (event.clientX - left) / width;
    const newValue = Math.round(min + percentage * (max - min));
    onChange(newValue);
  };

  return (
    <div className="flex items-center bg-ternary">
      <div className="w-full h-10 bg-gray-800">
        <div
          className={trackStyle}
          style={{ width: `${getPercentage(value)}%` }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDrag}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
