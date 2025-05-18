"use client";

import { Button } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import { Status } from "../../atoms/Status";
import { Typography } from "../../atoms/Typography";
import { Close } from "../../icons/Delete";
import { CopyCode } from "../../molecules/CopyCode";
import { ErrorNotice } from "../../molecules/ErrorNotice";
import { SummaryChartCard } from "../../molecules/SummaryChartCard";
import { Table } from "../../molecules/Table";
import { useJobs } from "../../../services/useJobs";
import { format, formatDistanceToNow } from "date-fns";
import React from "react";

export const FineTuningCard = () => {
	const {
		getJobs: { data, isLoading, isError },
		deleteJob: { mutate: deleteJob },
	} = useJobs({ fetchOnInit: true });

	const summary = data?.data.summary;

	const handleDeleteJob = (id: string) => {
		deleteJob(id);
	};

	if (isError) {
		return (
			<Card.Container className="col-span-12 md:col-span-6">
				<ErrorNotice message="Error fetching jobs, please try again later" />
			</Card.Container>
		);
	}

	return (
		<Card.Container className="col-span-12 md:col-span-6">
			<Card.Header>
				<Typography as="h2" variant="heading" visual="tiny">
					Fine-tuning usage
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

			{summary && <SummaryChartCard summary={summary} />}
			{isLoading && (
				<div className="flex flex-col gap-2 animate-pulse">
					<div className="h-30 bg-gray-200 rounded w-full" />
				</div>
			)}

			{data && (
				<Table
					headers={[
						{ id: "header-1", label: "Job ID", align: "left" },
						{ id: "header-2", label: "Date", align: "left" },
						{ id: "header-3", label: "Status", align: "right" },
						{ id: "header-4", label: "Actions", align: "right" },
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
								{
									id: "4",
									render: (
										<Button
											fill
											variant="ghost"
											onlyIcon
											title="Delete"
											onClick={() => handleDeleteJob(job.id)}
											aria-label="Delete job"
										>
											<Close />
										</Button>
									),
									align: "right",
								},
							],
						})) || []
					}
				/>
			)}
			{isLoading && (
				<div
					data-testid="loading-skeleton"
					className="flex flex-col gap-2 animate-pulse"
				>
					<div className="h-8 bg-gray-200 rounded w-full" />
					<div className="h-8 bg-gray-200 rounded w-full" />
					<div className="h-8 bg-gray-200 rounded w-full" />
					<div className="h-8 bg-gray-200 rounded w-full" />
					<div className="h-8 bg-gray-200 rounded w-full" />
					<div className="h-8 bg-gray-200 rounded w-full" />
				</div>
			)}
		</Card.Container>
	);
};
