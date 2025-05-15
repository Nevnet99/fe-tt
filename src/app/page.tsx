import { Avatar } from "@/components/atoms/Avatar";
import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";

export default function Home() {
	return (
		<main className="grid grid-cols-12 gap-4 py-8 px-6">
			<header className="col-span-12 flex items-center gap-6">
				<Avatar title="AI" />
				<Typography as="h1" variant="heading" visual="large">
					Acme Inc <span className="sr-only">Model tuning jobs</span>
				</Typography>
			</header>
			<Card.Container className="col-span-12 md:col-span-6">
				<Card.Header>
					<Typography as="h2" variant="heading" visual="tiny">
						Fine tuning usage
					</Typography>
					<Typography
						className="text-tertiary"
						as="p"
						variant="paragraph"
						visual="small"
					>
						Card description
					</Typography>
				</Card.Header>
			</Card.Container>
			<Card.Container className="col-span-12 md:col-span-6">
				<Card.Header>
					<Typography as="h2" variant="heading" visual="tiny">
						Get started
					</Typography>
				</Card.Header>
			</Card.Container>
		</main>
	);
}
