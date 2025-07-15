"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import age from "@/utils";

export const AboutMe = () => (
	<motion.div
		className="p-4 w-full max-w-[325px] h-[265px] rounded-lg shadow-lg bg-lightprimary dark:bg-darkprimary flex flex-col justify-center items-start"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		whileHover={{ scale: 1.05 }}
		transition={{ duration: 0.5 }}
	>
		<h2 className="text-4xl font-bold dark:text-darksecondary text-lightsecondary mb-6">
			About Me
		</h2>
		<p className="text-xl leading-relaxed">
			I’m a{" "}
			<span className="font-semibold text-blue-600 dark:text-blue-400">
				{age()}-year-old
			</span>{" "}
			<span className="font-semibold text-gray-800 dark:text-gray-200">
				developer
			</span>{" "}
			and{" "}
			<span className="font-medium text-cyan-600 dark:text-cyan-400">
				tech enthusiast
			</span>
			. I enjoy working on my{" "}
			<span className="italic text-indigo-700 dark:text-indigo-500">
				<Link href="homelab">homelab</Link>
			</span>{" "}
			and coding in{" "}
			<span className="font-medium text-purple-600 dark:text-purple-400">
				<Link href="https://www.typescriptlang.org/" target="_blank">
					TypeScript
				</Link>
			</span>{" "}
			and{" "}
			<span className="font-medium text-purple-600 dark:text-purple-400">
				<Link href="https://go.dev/" target="_blank">
					Go
				</Link>
				.
			</span>
		</p>
	</motion.div>
);
