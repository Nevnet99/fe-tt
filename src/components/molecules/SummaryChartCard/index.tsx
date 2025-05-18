import { Card } from "../../atoms/Card";
import { PieChart } from "../../atoms/PieChart";
import { Typography } from "../../atoms/Typography";
import { toTitle } from "../../../utils/toTitle";
import React from "react";
import { Pip } from "../../atoms/Pip";
import { twMerge } from "tailwind-merge";

type TSummaryChartCardProperties = {
	summary: {
		completed: number;
		running: number;
		failed: number;
	};
};

export const SummaryChartCard = ({ summary }: TSummaryChartCardProperties) => {
	const summaryKeys = Object.keys(summary);

	return (
		<Card.Container
			className="flex gap-10  items-center p-6 mb-6"
			padding={false}
		>
			<PieChart
				data={[
					{
						name: "Completed",
						value: summary?.completed || 0,
						color: "#15803D",
					},
					{
						name: "Running",
						value: summary?.running || 0,
						color: "#1D4ED8",
					},
					{
						name: "Failed",
						value: summary?.failed || 0,
						color: "#B91C1C",
					},
				]}
			/>

			<ul className="flex flex-col gap-2 w-full">
				{summaryKeys.map((key) => {
					const summaryValue = summary[key as keyof typeof summary];

					const pipColor = {
						completed: "bg-extensions-content-green",
						running: "bg-extensions-content-blue",
						failed: "bg-extensions-content-red",
					};

					return (
						<li key={key} className="flex items-center justify-between gap-1">
							<Pip
								className={twMerge(
									pipColor[key as keyof typeof pipColor],
									"mr-1.5",
								)}
							/>
							<Typography
								className="text-secondary"
								as="p"
								variant="paragraph"
								visual="small"
							>
								{toTitle(key)}
							</Typography>
							<div className="border-b border-border-secondary w-full self-end" />
							<Typography
								className="whitespace-nowrap text-secondary"
								as="p"
								variant="paragraph"
								visual="small"
							>
								{`${summaryValue} jobs`}
							</Typography>
						</li>
					);
				})}
			</ul>
		</Card.Container>
	);
};
