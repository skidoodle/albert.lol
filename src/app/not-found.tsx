"use client";

import Particles from "@/components/Particles";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="relative h-screen justify-center w-full group min-h-screen flex items-start bg-lightbackground dark:bg-darkbackground text-lighttext dark:text-darktext z-10">
			<div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
				<Particles
					speed={0.1}
					sizeRandomness={0.5}
					particleColors={["#ffffff", "#ff0000", "#00ff00", "#0000ff"]}
				/>
			</div>
			<ThemeSwitcher />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="absolute top-6 left-6"
			>
				<Link href="/" className="text-lighttext dark:text-darktext">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<title>Arrow</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
				</Link>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex max-w-3xl flex-col z-10 relative mt-24 lg:mt-40">
					<motion.div
						className="flex flex-col"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-[10rem] leading-none text-center font-bold dark:text-darktext text-lighttext">
							404
						</h1>
						<h2 className="text-3xl text-center font-semibold dark:text-darksecondary text-lightsecondary mb-4">
							Page Not Found
						</h2>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
