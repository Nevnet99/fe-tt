import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";

export default function Home() {
	return (
		<main>
			<Card.Container>
				<Card.Header>
					<Typography as="h1" variant="heading" visual="large">
						Heading large
					</Typography>
				</Card.Header>
			</Card.Container>
		</main>
	);
}
