import type * as React from "react";
import { Link } from "@remix-run/react";

export function Panel({
	children,
	force,
	index,
	open,
	size,
}: {
	children: React.ReactNode;
	force?: boolean;
	index?: boolean;
	open?: boolean;
	size?: "sm";
}) {
	let className = "panel";
	switch (size) {
		case "sm":
			className += " panel--sm";
			break;
		default:
			className += " panel--full";
			break;
	}
	if (force) {
		className += " panel--force";
	}
	if (index) {
		className += " panel--index";
	}
	if (open) {
		className += " panel--open";
	}
	return <section className={className}>{children}</section>;
}

export function PanelHeader({ children }: { children: React.ReactNode }) {
	return <header className="panel__header">{children}</header>;
}

export function PanelMain({ children }: { children: React.ReactNode }) {
	return (
		<main className="panel__main">
			<div>{children}</div>
		</main>
	);
}

export function PanelFooter({ children }: { children: React.ReactNode }) {
	return (
		<main className="panel__footer">
			<div>{children}</div>
		</main>
	);
}

export function PanelItemLink({
	children,
	to,
}: {
	children: React.ReactNode;
	to: string;
}) {
	return (
		<article className="panel__list-item">
			<Link to={to}>{children}</Link>
		</article>
	);
}
