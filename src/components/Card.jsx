"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { fadeIn } from "../../variants";
const Card = ({ img, url }) => {

  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="shadow-xl relative border-2  h-96 w-full bg-white p-4 rounded-lg cursor-pointer group overflow-hidden"
    >
      <div className="absolute bottom-0  left-0 top-0 right-0  flex justify-center items-center rounded-lg group-hover:bg-slate-300/80 z-20">
        <motion.p         
          className="invisible group-hover:visible text-center text-white font-bold text-4xl text-shadow-custom"
        >
          {url}
        </motion.p>
      </div>
      <Image
        src={img}
        width={800}
        height={800}
        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
      />{" "}
    </motion.div>
  );
};

export default Card;
