"use client";

import { useMemo, useState } from "react";
import { Ring } from "./ring";
import { motion } from "framer-motion";
import { Timer } from "./timer";

export default function DynamicIsland() {
  const [view, setView] = useState("idle");

  const content = useMemo(() => {
    switch (view) {
      case "ring":
        return <Ring />;
      case "timer":
        return <Timer/>;
	  case "idle":
        return <div className="h-7" />;
    }
  }, [view]);

  return (
    <div>
      <div className="flex h-[160px] justify-center">
        <motion.div
          layout
          className="h-fit min-w-[100px] overflow-hidden bg-black"
          style={{ borderRadius: 32 }}
        >
          {content}
        </motion.div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="rounded-full w-32 h-10 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setView("idle")}
        >
          Idle
        </button>
        <button
          type="button"
          className="rounded-full w-32 h-10 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setView("ring")}
        >
          Ring
        </button>
		<button
          type="button"
          className="rounded-full w-32 h-10 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setView("timer")}
        >
          Timer
        </button>
      </div>
    </div>
  );
}
