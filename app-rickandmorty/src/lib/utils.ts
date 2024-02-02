import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function extractSeasonEpisode(
  str: string
): { season: number; episode: number } | null {
  const regex = /S(\d+)E(\d+)/;
  const match = str?.match(regex);

  if (match) {
    const season = parseInt(match[1], 10);
    const episode = parseInt(match[2], 10);

    return { season, episode };
  }

  return null;
}
