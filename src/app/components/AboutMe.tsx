"use client";

import age from "@/utils";
import { motion } from "framer-motion";

export const AboutMe = () => {
	return (
		<motion.div
			className="p-3 max-w-xs lg:max-w-sm md:max-w-md max-h-[300px] h-[265px] rounded-lg shadow-lg bg-white dark:bg-black"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.5 }}
		>
			<h2 className="text-[250%] font-bold dark:text-[--dark-secondary] text-[--light-secondary]">
				about me
			</h2>
			<p className="text-[110%]">
				I’m a{" "}
				<span className="font-semibold text-blue-600 dark:text-blue-400">
					{age()}-year-old
				</span>
				, studying{" "}
				<span className="font-medium text-orange-600 dark:text-orange-400">
					Computer Science Operational Engineering
				</span>{" "}
				at{" "}
				<span className="font-medium text-green-600 dark:text-green-400">
					Óbuda University
				</span>{" "}
				in Hungary. I’m passionate about{" "}
				<span className="text-red-600 dark:text-red-400">
					systems engineering
				</span>
				, working on my{" "}
				<span className="italic text-green-700 dark:text-green-500">
					homelab
				</span>
				, and coding in{" "}
				<span className="font-medium text-purple-600 dark:text-purple-400">
					TypeScript
				</span>{" "}
				and{" "}
				<span className="font-medium text-purple-600 dark:text-purple-400">
					Go
				</span>
				.
			</p>
		</motion.div>
	);
};
