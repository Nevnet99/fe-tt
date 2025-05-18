import React from "react";
import { twMerge } from "tailwind-merge";

export const Pip = ({ className }: { className?: string }) => {
	return (
		<div
			className={twMerge("w-2 h-2 min-w-2 min-h-2 rounded-full", className)}
		/>
	);
};
