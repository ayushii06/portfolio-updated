"use client";

import React from "react";
import { motion } from "framer-motion";

function Seperator({ text }) {
  return (
    <div className="text-center text-lg font-semibold mt-24 mb-4">
      <div className="relative inline-block">
        
        <span className="text-white">
          {text}
        </span>

        {/* Animated Underline */}
        <motion.span
          initial={{ scaleX: 0}}
          whileInView={{ scaleX: 1 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            absolute 
            left-0 
            -bottom-1 
            h-[2px] 
            w-full 
            bg-gradient-to-r from-blue-500 to-purple-500
            origin-left
          "
        />
        
      </div>
    </div>
  );
}

export default Seperator;