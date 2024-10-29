import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import type { IconType } from "@/utils/types";
import { useEffect, useState } from "react";

export const Icon = ({
	children,
	reference,
	copyValue,
	ariaLabel,
}: IconType) => {
	const { theme } = useTheme() as { theme: "light" | "dark" | "system" };
	const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		if (!localStorage.getItem("theme")) {
			localStorage.setItem("theme", "system");
		}

		if (theme === "system") {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			setResolvedTheme(prefersDark ? "dark" : "light");
		} else {
			setResolvedTheme(theme);
		}
	}, [theme]);

	const toastStyle = {
		light: {
			background: "var(--light-primary)",
			color: "var(--light-text)",
		},
		dark: {
			background: "var(--dark-primary)",
			color: "var(--dark-text)",
		},
	};

	const handleCopy = () => {
		toast.remove();
		toast.success("Copied to clipboard", {
			style: {
				...toastStyle[resolvedTheme],
				fontSize: "1em",
			},
		});
		copy(reference);
	};

	return (
		<motion.div
			className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 text-[1.25em] text-[--light-text] dark:text-[--dark-text]"
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			role={copyValue ? "button" : undefined}
			aria-label={ariaLabel}
			onClick={copyValue ? handleCopy : undefined}
		>
			<Link
				href={copyValue ? "" : reference}
				target={copyValue ? undefined : "_blank"}
			>
				{children}
			</Link>
		</motion.div>
	);
};
