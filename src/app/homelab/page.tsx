"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import { Highlight } from "@/components/Highlight";
import { Fragment } from "react";
import { specs } from "@/utils";
import Link from 'next/link';

export default function Homelab() {
	return (
		<Fragment>
			<Highlight containerClassName="min-h-screen flex items-start">
				<ThemeSwitcher />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="absolute top-6 left-6"
				>
					<Link href="/" className="text-[--text-secondary] dark:[--text-primary]">
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
							<h1 className="text-[4.5rem] leading-none text-center font-bold dark:text-[--dark-text] text-[--light-text]">
								My Homelab
							</h1>
							<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mx-4">
								{specs.map((spec, index) => (
									<motion.div
										key={spec.title}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 + index * 0.1 }}
										className="bg-white dark:bg-black backdrop-blur-sm rounded-xl p-6 shadow-lg"
									>
										<h3 className="text-lg font-medium text-gray-400">
											{spec.title}
										</h3>
										<p className="text-xl mt-2 dark:text-[--dark-text] text-[--light-text]">
											{spec.value}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</Highlight>
		</Fragment>
	);
}
