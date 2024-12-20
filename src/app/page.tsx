"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { NowPlayingCard } from "@/components/SpotifyCard";
import { SocialLayout } from "@/components/SocialLayout";
import { AboutMe } from "@/components/AboutMe";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Highlight } from "@/components/Highlight";
import { Fragment } from "react";

export default function Home() {
	return (
		<Fragment>
			<Highlight containerClassName="min-h-screen flex items-start">
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
			</Highlight>
		</Fragment>
	);
}
