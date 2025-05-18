import { render, screen } from "@testing-library/react";
import { Table, type TTableHeader, type TTableRow } from ".";
import { CopyCode } from "../CopyCode";
import { Status } from "../../atoms/Status";
import { describe, expect, it } from "vitest";

const headers: TTableHeader[] = [
	{ id: "header-1", label: "Job ID", align: "left" },
	{ id: "header-2", label: "Date", align: "left" },
	{ id: "header-3", label: "Status", align: "right" },
];

const rows: TTableRow[] = [
	{
		id: "1-row",
		cells: [
			{ id: "1", render: <CopyCode code="bbddd55ea1-41a-10e-9090" /> },
			{ id: "2", render: <p>2024-01-15</p> },
			{ id: "3", render: <Status variant="running" />, align: "right" },
		],
	},
	{
		id: "2-row",
		cells: [
			{ id: "1", render: <CopyCode code="bbddd55ea1-41a-10e-9091" /> },
			{ id: "2", render: <p>2024-01-14</p> },
			{ id: "3", render: <Status variant="completed" />, align: "right" },
		],
	},
];

describe("Table", () => {
	it("renders headers and rows correctly", () => {
		render(<Table headers={headers} rows={rows} />);

		for (const header of headers) {
			expect(screen.getByText(header.label)).toBeInTheDocument();
		}

		// Check row content is rendered
		expect(screen.getByText("bbddd55ea1-41a-10e-9090")).toBeInTheDocument();
		expect(screen.getByText("bbddd55ea1-41a-10e-9091")).toBeInTheDocument();
		expect(screen.getByText("2024-01-15")).toBeInTheDocument();
		expect(screen.getByText("2024-01-14")).toBeInTheDocument();

		// Check status components are rendered
		expect(screen.getByText("Running")).toBeInTheDocument();
		expect(screen.getByText("Completed")).toBeInTheDocument();
	});
});
