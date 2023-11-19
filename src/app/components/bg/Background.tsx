"use client";

import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const GRID_SIZE = 40;

const GRID_HEIGHT = 29;
const GRID_WIDTH = 20;

function Background() {
  useEffect(() => {
    anime({
      targets: ".selector",
      translateX: 10,
    });
  }, []);



  const Grid = () => {
    return (
      <div className="grid grid-cols-12 w-full gap-4">
        {Array.from(Array(GRID_HEIGHT).keys()).map((i) => {
          return Array.from(Array(GRID_WIDTH).keys()).map((j) => {
            return (
              <div key={i + j}>
                <Motif />
              </div>
            );
          });
        })}
      </div>
    );
  };

  return (
    <div className="absolute z-0 w-full h-full overflow-hidden">
      <Grid />
    </div>
  );
}

function Motif() {
  return (
    <svg className="fill-secondary">
      <circle cx="20" cy="20" r="20" color="red" className="selector" />
    </svg>
  );
}

export default Background;