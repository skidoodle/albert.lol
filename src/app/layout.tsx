import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Albert_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import age from "@/utils";
import "./globals.css";

const albert_sans = Albert_Sans({
	subsets: ["latin"],
	variable: "--font-albert",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://albert.lol"),
	title: "albert",
	description: `${age()}yo student at Óbuda University`,
	openGraph: {
		images: "/profile.webp",
	},
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
