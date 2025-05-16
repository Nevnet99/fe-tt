import { Avatar } from "@/components/atoms/Avatar";
import { Card } from "@/components/atoms/Card";
import { CopyCode } from "@/components/atoms/CopyCode";
import { Status } from "@/components/atoms/Status";
import { Typography } from "@/components/atoms/Typography";
import { Table } from "@/components/molecules/Table";

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

				<Table
					headers={[
						{ id: "header-1", label: "Job ID", align: "left" },
						{ id: "header-2", label: "Date", align: "left" },
						{ id: "header-3", label: "Status", align: "right" },
					]}
					rows={[
						{
							id: "1-row",
							cells: [
								{
									id: "1",
									render: <CopyCode code="bbddd55ea1-41a-10e-9090" />,
								},
								{ id: "2", render: <p>Temp Date</p> },
								{
									id: "3",
									render: <Status variant="running" />,
									align: "right",
								},
							],
						},
						{
							id: "2-row",
							cells: [
								{
									id: "4",
									render: <CopyCode code="bbddd55ea1-41a-10e-9090" />,
								},
								{ id: "5", render: <p>Temp Date</p> },
								{
									id: "6",
									render: <Status variant="running" />,
									align: "right",
								},
							],
						},
						{
							id: "3-row",
							cells: [
								{
									id: "7",
									render: <CopyCode code="bbddd55ea1-41a-10e-9090" />,
								},
								{ id: "8", render: <p>Temp Date</p> },
								{
									id: "9",
									render: <Status variant="completed" />,
									align: "right",
								},
							],
						},
					]}
				/>
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
