import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const interval in intervals) {
    const intervalSeconds = intervals[interval];
    const count = Math.floor(secondsAgo / intervalSeconds);

    if (count >= 1) {
      return `${count} ${interval}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

export const formatAndDivideNumbers = (num: number): string => {
  if (num > 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);

    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
};
