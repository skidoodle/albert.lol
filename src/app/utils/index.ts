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

export const specs = [
	{ title: "Model", value: "Dell R730" },
	{ title: "OS", value: "Proxmox" },
	{ title: "CPU", value: "Intel Xeon E5-2680v4 x2" },
	{ title: "RAM", value: "128GB" },
	{ title: "GPU", value: "NVIDIA GTX 1050Ti" },
	{ title: "Boot", value: "WD Black SN770 1TB x2" },
	{ title: "Pool", value: "Toshiba Enterprise 6TB x8" },
	{ title: "Power", value: "750W Platinum x2" },
];
