"use client";

import React from "react";
import { motion } from "framer-motion";

export const Background = () => {
	return (
		<div className="fixed inset-0 w-screen h-screen overflow-hidden z-[-1] flex justify-center items-center">
			<motion.div
				className="absolute w-[800px] h-[800px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"
				style={{ willChange: "transform, opacity" }}
				animate={{
					scale: [1.5, 1.2, 1, 1.2, 1.5],
					x: [0, 200, 0, -200, 0],
					y: [0, -80, 150, -150, 0],
					opacity: [0.6, 1, 0.6],
				}}
				transition={{
					duration: 18,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-400 to-red-500 rounded-full blur-3xl"
				style={{ willChange: "transform, opacity" }}
				animate={{
					scale: [1, 1.3, 1.5, 1.3, 1],
					x: [-150, 150, -150, 150, -150],
					y: [180, -180, 180, -180, 180],
					opacity: [0.6, 1, 0.6],
				}}
				transition={{
					duration: 22,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
};
