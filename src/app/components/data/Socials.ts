import { FaDiscord, FaEnvelope, FaGithub, FaSteam } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import type { IconType } from "react-icons/lib";

type Social = {
	id: number;
	ref: string;
	icon: IconType;
	copyValue?: boolean;
	ariaLabel: string;
};

export const Socials: readonly Social[] = [
	{
		id: 1,
		ref: "https://github.com/skidoodle",
		icon: FaGithub,
		ariaLabel: "GitHub",
	},
	{
		id: 2,
		ref: "https://steamcommunity.com/id/_albert",
		icon: FaSteam,
		ariaLabel: "Steam",
	},
	{
		id: 3,
		ref: "contact@albert.lol",
		icon: FaEnvelope,
		copyValue: true,
		ariaLabel: "Email",
	},
	{
		id: 4,
		ref: "https://www.instagram.com/albertadam_/",
		icon: RiInstagramFill,
		ariaLabel: "Instagram",
	},
	{
		id: 5,
		ref: "albert.lol",
		icon: FaDiscord,
		copyValue: true,
		ariaLabel: "Discord",
	},
] as const;
