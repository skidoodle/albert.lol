"use client";

import { AboutMe } from "@/components/AboutMe";
import Particles from "@/components/Particles";
import { SocialLayout } from "@/components/SocialLayout";
import { NowPlayingCard } from "@/components/SpotifyCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

export default function Home() {
	return (
		<div className="relative h-screen justify-center w-full group min-h-screen flex items-start">
			<div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
				<Particles
					speed={0.1}
					sizeRandomness={0.5}
					particleColors={["#ffffff", "#ff0000", "#00ff00", "#0000ff"]}
				/>
			</div>
			<ThemeSwitcher />
			<Toaster position="top-left" />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex max-w-3xl flex-col z-10 relative mt-24 lg:mt-56">
					<motion.div
						className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-10 lg:space-y-5 lg:space-x-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<motion.div
							className="flex flex-col items-center text-center"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5 }}
						>
							<h1 className="text-[7.5rem] leading-none font-bold dark:text-[--dark-text] text-[--light-text]">
								albert
							</h1>
							<SocialLayout />
							<NowPlayingCard />
						</motion.div>
						<AboutMe />
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
