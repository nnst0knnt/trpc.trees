"use client";

import { useEffect, useState } from "react";

export const Animated = () => {
  const [expression, setExpression] = useState("🌱");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const treeStages = ["🌱", "🪴", "🌿", "🌲", "🌳"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % treeStages.length;
      setProgress((index / (treeStages.length - 1)) * 100);

      const stage = treeStages[index];
      if (stage) {
        setExpression(stage);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="w-full bg-emerald-100 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full bg-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-center">
        <div className="relative group">
          <div className="text-7xl transition-all duration-500 ease-in-out transform group-hover:scale-110">
            {expression}
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};
