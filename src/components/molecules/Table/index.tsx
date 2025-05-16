import { twMerge } from "tailwind-merge";
import { Typography } from "../../atoms/Typography";

export type TTableCell = {
	id: string;
	render: React.ReactNode;
	align?: "left" | "right";
};

export type TTableRow = {
	id: string;
	cells: TTableCell[];
};

export type TTableHeader = {
	id: string;
	label: string;
	align?: "left" | "right";
};

export type TTableProperties = {
	headers: TTableHeader[];
	rows: TTableRow[];
};

export const Table = ({ headers, rows }: TTableProperties) => {
	return (
		<table className="w-full border border-border-secondary rounded-xl overflow-hidden border-separate border-spacing-0">
			<thead>
				<tr className="bg-background-secondary">
					{headers.map((header) => (
						<th
							className={twMerge(
								"text-left py-3.5 first:pl-4 last:pr-4 text-secondary border-b border-border-secondary",
								header.align === "right" && "text-right",
							)}
							key={header.id}
						>
							<Typography as="span" variant="label" visual="small">
								{header.label}
							</Typography>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.id}>
						{row.cells.map((cell) => (
							<td
								className={
									"py-3.5 first:pl-4 last:pr-4 border-b border-border-secondary"
								}
								key={cell.id}
							>
								<div
									className={cell.align === "right" ? "flex justify-end" : ""}
								>
									{cell.render}
								</div>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
