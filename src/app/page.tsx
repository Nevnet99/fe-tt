"use client";

import { Avatar } from "@/components/atoms/Avatar";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { CopyCode } from "@/components/molecules/CopyCode";
import { Status } from "@/components/atoms/Status";
import { Typography } from "@/components/atoms/Typography";
import { Table } from "@/components/molecules/Table";
import { useJobs } from "@/services/useJobs";
import { format, formatDistanceToNow } from "date-fns";
import { HorizontalCard } from "@/components/organisms/HorizontalCard";

export default function Home() {
	const {
		getJobs: { data, isLoading },
	} = useJobs({ fetchOnInit: true });

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

				{data && (
					<Table
						headers={[
							{ id: "header-1", label: "Job ID", align: "left" },
							{ id: "header-2", label: "Date", align: "left" },
							{ id: "header-3", label: "Status", align: "right" },
						]}
						rows={
							data?.data.jobs.map((job) => ({
								id: job.id,
								cells: [
									{ id: "1", render: <CopyCode code={job.id} /> },
									{
										id: "2",
										render: (
											<div>
												<Typography
													className="text-secondary"
													as="p"
													variant="paragraph"
													visual="small"
												>
													{format(new Date(job.createdAt), "MMM d, yyyy")}
												</Typography>
												<Typography
													className="text-tertiary"
													as="p"
													variant="paragraph"
													visual="tiny"
												>
													{formatDistanceToNow(new Date(job.createdAt), {
														addSuffix: true,
													})}
												</Typography>
											</div>
										),
									},
									{
										id: "3",
										render: (
											<Status
												variant={
													job.status.toLowerCase() as
														| "completed"
														| "running"
														| "failed"
												}
											/>
										),
										align: "right",
									},
								],
							})) || []
						}
					/>
				)}
				{isLoading && (
					<div className="flex flex-col gap-2 animate-pulse">
						<div className="h-8 bg-gray-200 rounded w-full" />
						<div className="h-8 bg-gray-200 rounded w-full" />
						<div className="h-8 bg-gray-200 rounded w-full" />
						<div className="h-8 bg-gray-200 rounded w-full" />
						<div className="h-8 bg-gray-200 rounded w-full" />
						<div className="h-8 bg-gray-200 rounded w-full" />
					</div>
				)}
			</Card.Container>

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
		</main>
	);
}
