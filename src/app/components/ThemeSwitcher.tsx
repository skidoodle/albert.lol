"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		if (!localStorage.getItem("theme")) {
			localStorage.setItem("theme", "system");
		}
	}, []);

	const toggleTheme = useCallback(() => {
		const newTheme =
			theme === "light" ? "dark" : theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	}, [theme, setTheme]);

	if (!mounted) return null;

	return (
		<motion.button
			aria-label="Switch Theme"
			type="button"
			className="fixed top-5 right-5 p-3 rounded-full z-50"
			onClick={toggleTheme}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<motion.div
				initial={{ rotate: 0 }}
				animate={{ rotate: theme === "light" ? 0 : 180 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<VscColorMode size={35} />
			</motion.div>
		</motion.button>
	);
};
