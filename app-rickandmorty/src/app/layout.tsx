import type { Metadata } from "next";
// Supports weights 100-900
import "@fontsource-variable/noto-sans-devanagari";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
	title: "Rick and Morty",
	description:
		"Interactive Rick and Morty web project offering an in-depth exploration of the series universe, including character profiles, episodes, and locations, with interactive features and exclusive content for fans",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-mine-shaft-950 text-white selection:text-atlantis-400 selection:bg-mine-shaft-700">
				<NavBar />
				{children}
			</body>
		</html>
	);
}
