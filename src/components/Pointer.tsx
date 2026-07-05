import React from "react";

interface PointerProps {
  name: string;
  color?: string;
}

export default function Pointer({
  name,
  color = "#7C3AED",
}: PointerProps) {
  return (
    <div className="  items-center">
      {/* Cursor */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 32 32"
        className="drop-shadow-lg -mr-1 z-10"
      >
        <path
          d="M4 2L24 20L15.5 20.5L19.5 29L15.5 30.5L11.5 21.5L5 27L4 2Z"
          fill="black"
          stroke="white"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Name Badge */}
      <div
        className="px-2 py-2 ml-5  rounded-full text-white text-sm
         font-medium border border-white/30 shadow-xl backdrop-blur-md "
        style={{ backgroundColor: color }}
      >
        {name}
      </div>
    </div>
  );
}