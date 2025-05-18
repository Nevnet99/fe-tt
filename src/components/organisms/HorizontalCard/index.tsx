import { Button } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import { Typography } from "../../atoms/Typography";
import { ColourWrench } from "../../icons/ColourWrench";
import Link from "next/link";

type HorizontalCardProperties = {
	title: string;
	href: string;
	buttonText: string;
	description: string;
};

export const HorizontalCard = ({
	title,
	href,
	buttonText,
	description,
}: HorizontalCardProperties) => {
	return (
		<Card.Container padding={false} className="flex gap-4 shadow-shadow-lg">
			<div className="flex justify-center items-center px-8 bg-background-secondary border-r-1 border-border-primary">
				<ColourWrench />
			</div>
			<div className="p-6">
				<Typography className="mb-3" as="h3" variant="heading" visual="tiny">
					{title}
				</Typography>
				<Typography
					className="text-secondary mb-4"
					as="p"
					variant="paragraph"
					visual="tiny"
				>
					{description}
				</Typography>
				<Link href={href}>
					<Button as="span" variant="primary">
						{buttonText}
					</Button>
				</Link>
			</div>
		</Card.Container>
	);
};
