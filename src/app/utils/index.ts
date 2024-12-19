import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function age() {
	const BIRTHDATE = process.env.NEXT_PUBLIC_BIRTHDATE;
	if (!BIRTHDATE) {
		console.warn("Missing environment variable: BIRTHDATE");
		return 0;
	}

	return Math.floor(
		(new Date().getTime() - new Date(BIRTHDATE).getTime()) / 3.15576e10,
	);
}

export const truncate = (str: string, n: number): string => {
	if (str.length > n) {
		const truncated = str.slice(0, n - 3).trimEnd();
		return `${truncated}...`;
	}
	return str.trim();
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
