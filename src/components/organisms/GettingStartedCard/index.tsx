import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import { HorizontalCard } from "../HorizontalCard";

export const GettingStartedCard = () => {
	return (
		<Card.Container className="col-span-12 md:col-span-6 h-fit">
			<Card.Header>
				<Typography as="h2" variant="heading" visual="tiny">
					Get started
				</Typography>
			</Card.Header>
			<HorizontalCard
				title="Get started with Fine-tuning"
				href="/fine-tuning-job"
				buttonText="New Fine-tuning Job"
				description="Simple, ready-to-use inference endpoints that are paid for per request. No commitments, only pay for what you use with Nscale Serverless."
			/>
		</Card.Container>
	);
};
