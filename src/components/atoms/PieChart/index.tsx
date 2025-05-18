"use client";

import { Cell, PieChart as RechartsPieChart, Tooltip } from "recharts";
import { Pie } from "recharts";

export type TPieChartProperties = {
	data: { name: string; value: number; color: string }[];
};

export const PieChart = ({ data }: TPieChartProperties) => {
	return (
		<RechartsPieChart height={112} width={112}>
			<Pie
				data={data}
				dataKey="value"
				innerRadius={42}
				outerRadius={50}
				paddingAngle={1}
			>
				{data.map((entry) => (
					<Cell
						// @ts-expect-error corner radius is not documented or typed
						cornerRadius={10}
						fill={entry.color}
						key={entry.name}
						label={entry.name}
					/>
				))}
			</Pie>
			<Tooltip formatter={(value) => `${value as string}`} />
		</RechartsPieChart>
	);
};
