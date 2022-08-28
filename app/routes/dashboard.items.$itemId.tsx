import { Link, Outlet, useParams } from "@remix-run/react";

import { Panel, PanelHeader, PanelMain } from "~/components/panel";

import iconsHref from "~/icons.svg";

export default function List() {
	const { itemId } = useParams();

	return (
		<>
			<Panel>
				<PanelHeader>
					<Link to=".." className="icon mr">
						<svg height={20} width={20}>
							<use href={iconsHref + "#back"} />
						</svg>
					</Link>
					Item {itemId}
				</PanelHeader>
				<PanelMain>
					<div className="h-full flex flex-center">
						<h1>Item {itemId}</h1>
					</div>
				</PanelMain>
			</Panel>
			<Outlet />
		</>
	);
}
