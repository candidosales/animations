"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FirstExample() {
  return (
    <div className="grid w-full h-[100vh] place-items-center bg-black">
      <motion.div
        className="size-12 bg-yellow-500 rounded-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      />
    </div>
  );
}
