"use client";

import { truncate } from "@/utils";
import type { SpotifyData } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HiMusicNote } from "react-icons/hi";

const useSpotify = (): SpotifyData | undefined => {
	const [spotify, setSpotify] = useState<SpotifyData | undefined>(undefined);

	useEffect(() => {
		const socket = new WebSocket(
			process.env.NEXT_PUBLIC_SPOTIFY_WS || "ws://localhost:3001",
		);

		const handleMessage = (e: MessageEvent) => {
			try {
				const data = JSON.parse(e.data);
				setSpotify(data);
			} catch (error) {
				console.error("Error parsing WebSocket message:", error);
			}
		};

		socket.addEventListener("message", handleMessage);

		const intervalId = setInterval(() => {
			if (socket.readyState === WebSocket.OPEN) {
				socket.send("ping");
			}
		}, 30000);

		return () => {
			clearInterval(intervalId);
			socket.removeEventListener("message", handleMessage);
			socket.close();
		};
	}, []);

	return spotify;
};

export const NowPlayingCard = () => {
	const spotify = useSpotify();

	const progressPercentage = useMemo(() => {
		if (spotify?.is_playing && spotify.item) {
			return (spotify.progress_ms / spotify.item.duration_ms) * 100;
		}
		return 0;
	}, [spotify]);

	const renderSpotify = useCallback(() => {
		if (!spotify) {
			return (
				<div className="flex items-center text-[1.2rem]">
					<HiMusicNote size={75} className="p-3" />
					<div className="ml-4 text-left">
						<h1 className="font-semibold text-l">Loading...</h1>
					</div>
				</div>
			);
		}

		if (!spotify.is_playing) {
			return (
				<div className="flex items-center text-[1.2rem]">
					<HiMusicNote size={75} className="p-3" />
					<div className="ml-4 text-left">
						<h1 className="font-semibold text-l">Not listening to anything</h1>
					</div>
				</div>
			);
		}

		const song = spotify.item;
		const artists =
			song.artists?.map((artist) => artist.name).join(", ") || "Unknown artist";
		const albumImage =
			song.album.images[0]?.url || "https://placehold.co/50x50.webp";

		return (
			<div className="flex items-center">
				<div className="w-[75px] h-[75px]">
					<Image
						priority={true}
						width={75}
						height={75}
						alt="Song cover art"
						className="rounded-md object-cover w-full h-full"
						draggable={false}
						src={albumImage}
						quality={100}
					/>
				</div>
				<div className="ml-4 flex-1 text-left text-[1.15rem]">
					<Link href={song.external_urls.spotify || "/"}>
						<h1 className="font-semibold text-[#1ED760] hover:text-[#1DB954] truncate">
							{truncate(song.name, 20)}
						</h1>
					</Link>
					<h2 className="text-xs truncate">{truncate(artists, 35)}</h2>
					<motion.div
						className="mt-2 rounded-full h-1"
						initial={{ width: 0 }}
						animate={{ width: `${progressPercentage}%` }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<div className="bg-[#1DB954] h-1 rounded-full" />
					</motion.div>
				</div>
			</div>
		);
	}, [spotify, progressPercentage]);

	return (
		<motion.div
			className="mt-5 w-[325px] rounded-md shadow-lg p-3 bg-lightprimary dark:bg-darkprimary transition-opacity duration-300"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			whileHover={{ scale: 1.05 }}
		>
			{renderSpotify()}
		</motion.div>
	);
};
