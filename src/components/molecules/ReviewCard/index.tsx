import { twMerge } from "tailwind-merge";
import { Typography } from "../../atoms/Typography";
import { ChatBubble } from "../../icons/ChatBubble";
import { Cog } from "../../icons/Cog";
import { WrenchScrewdriver } from "../../icons/WrenchScrewdriver";

export type TReviewCardProperties = {
	title: string;
	subtitle?: string[];
	icon: "chat" | "cog" | "wrench";
	center?: boolean;
};

export const ReviewCard = ({
	title,
	subtitle,
	icon,
	center = false,
}: TReviewCardProperties) => {
	return (
		<article
			className={twMerge(
				"flex gap-4 border border-border-primary p-4 rounded-lg",
				center && "items-center",
			)}
		>
			<div>
				{icon === "chat" && <ChatBubble />}
				{icon === "cog" && <Cog />}
				{icon === "wrench" && <WrenchScrewdriver />}
			</div>
			<div>
				<h3>
					<Typography as="span" variant="label" visual="base">
						{title}
					</Typography>
				</h3>
				<Typography as="p" variant="paragraph" visual="tiny">
					{subtitle?.map((item, index) => (
						<span className="text-tertiary" key={item}>
							{item}
							{index !== subtitle.length - 1 && " • "}
						</span>
					))}
				</Typography>
			</div>
		</article>
	);
};
