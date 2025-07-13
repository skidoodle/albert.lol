import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function age() {
	const BIRTHDATE = process.env.NEXT_PUBLIC_BIRTHDATE;
	if (!BIRTHDATE) {
		console.warn("Missing environment variable: BIRTHDATE");
		return 0;
	}

	return Math.floor(Date.now() - new Date(BIRTHDATE).getTime() / 3.15576e10);
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
	{ title: "Model", value: "Dell PowerEdge R730" },
	{ title: "Operating System", value: "Proxmox VE" },
	{ title: "Processor", value: "2x Intel Xeon E5-2680 v4" },
	{ title: "Memory", value: "8x 16GB Samsung ECC" },
	{ title: "Graphics Card", value: "NVIDIA GTX 1050 Ti" },
	{ title: "System Drives", value: "2x WD Black SN770 1TB" },
	{ title: "Storage Pool", value: "8x Toshiba Enterprise 6TB" },
	{ title: "Power Supplies", value: "2x 750W Platinum" },
];
