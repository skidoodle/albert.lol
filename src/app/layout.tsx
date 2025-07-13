import { ThemeProvider } from "@/components/ThemeProvider";
import age from "@/utils";
import type { Metadata, Viewport } from "next";
import { Albert_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const albert_sans = Albert_Sans({
	subsets: ["latin"],
	variable: "--font-albert",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://albert.lol"),
	title: "albert",
	description: `${age()}yo tech enthusiast`,
	openGraph: {
		images: "/profile.webp",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Script
				defer
				src="https://analytics.albert.lol/script.js"
				data-website-id="2c900d5e-c577-4824-ad37-0cdf68383c42"
			/>
			<body className={`${albert_sans.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
