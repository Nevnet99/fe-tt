import { Avatar } from "../../atoms/Avatar";
import { Typography } from "../../atoms/Typography";

export const OrganizationHeader = () => {
	return (
		<header className="col-span-12 flex items-center gap-6">
			<Avatar title="AI" />
			<Typography as="h1" variant="heading" visual="large">
				Acme Inc <span className="sr-only">Model tuning jobs</span>
			</Typography>
		</header>
	);
};
