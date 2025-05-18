"use client";

import { Typography } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";
import { CopyIcon } from "../../icons/Copy";
import toast from "react-hot-toast";

export const CopyCode = ({ code }: { code: string }) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		toast("Copied to clipboard");
	};

	return (
		<div className="flex items-center px-2 py-1 gap-2 bg-background-secondary border border-border-primary rounded-md w-fit">
			<Typography as="p" variant="code" visual="small">
				{code}
			</Typography>
			<Button variant="ghost" onlyIcon onClick={handleCopy}>
				<CopyIcon />
			</Button>
		</div>
	);
};
