"use client";

import { Icon } from "@/components/Icon";
import { Socials } from "@/components/data/Socials";
import { motion } from "framer-motion";
import { memo } from "react";

export const SocialLayout = memo(() => {
	return (
		<motion.div
			className="mt-3 grid w-fit grid-flow-col gap-8 pl-1 text-[1.7rem]"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0 },
				visible: {
					opacity: 1,
					transition: { staggerChildren: 0.2 },
				},
			}}
		>
			{Socials.map(({ id, ref, copyValue, icon: IconComponent, ariaLabel }) => (
				<motion.div
					key={id}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<Icon reference={ref} copyValue={copyValue} ariaLabel={ariaLabel}>
						<IconComponent
							className="fill-current transition-transform duration-300 ease-in-out hover:text-[#ad87ed] hover:scale-105 focus:outline-none"
							aria-hidden="true"
						/>
					</Icon>
				</motion.div>
			))}
		</motion.div>
	);
});

SocialLayout.displayName = "SocialLayout";
