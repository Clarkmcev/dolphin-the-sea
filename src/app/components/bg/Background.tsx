"use client"

import React, { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

const GRID_SIZE = 2000

function Background() {
  useEffect(() => { 
    anime({
      targets: '.selector',
      translateX: 20
    });
  }, []);

  return (
    <div className="">
      
    </div>
  );
}

function Motif() {
  return (
    <div className="h-full w-full bg-red-500">
      <svg className="fill-secondary/20">
        <circle cx="50" cy="50" r="40" color="red" className="selector" />
      </svg>
    </div>
  );
}

export default Background;
