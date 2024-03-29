"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
export default function NavBar() {
	const pathname = usePathname();
	const NavData = [
		{
			href: "/",
			name: "Home",
		},
		{
			href: "/characters",
			name: "Characters",
		},
		{
			href: "/locations",
			name: "Locations",
		},
		{
			href: "/episodes",
			name: "Episodes",
		},
	];
	for (const i of NavData) {
		if (i.href === pathname) {
			NavData.splice(NavData.indexOf(i), 1);
		}
	}

	return (
		<nav className="flex mx-auto justify-center items-center gap-x-1 h-16 px-4 py-2 border-4 border-white rounded-full w-fit my-4">
			{NavData.map((i) => (
				<Link
					className="outline-2  text-border text-center text-lg outline-white hover:outline hover:scale-110 hover:bg-mine-shaft-900 rounded-3xl px-2 py-1 duration-75"
					key={i.name}
					href={i.href}
				>
					{i.name}
				</Link>
			))}
		</nav>
	);
}
