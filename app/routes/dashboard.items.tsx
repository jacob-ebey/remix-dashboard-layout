import { Link, Outlet, useLocation, useSearchParams } from "@remix-run/react";

import {
	Panel,
	PanelHeader,
	PanelItemLink,
	PanelMain,
} from "~/components/panel";

import iconsHref from "~/icons.svg";

export default function List() {
	const location = useLocation();
	const [searchParams] = useSearchParams();

	const forceShow = location.pathname === "/dashboard/items";
	const panelOpen = searchParams.get("open") === "list";

	return (
		<>
			<Panel size="sm" open={panelOpen} force={forceShow}>
				<PanelHeader>
					<Link to="?open=menu" className="icon mr xl:hidden">
						<svg height={20} width={20}>
							<use href={iconsHref + "#menu"} />
						</svg>
					</Link>
					List
				</PanelHeader>
				<PanelMain>
					<PanelItemLink to="1">Item 1</PanelItemLink>
					<PanelItemLink to="2">Item 2</PanelItemLink>
					<PanelItemLink to="3">Item 3</PanelItemLink>
					<PanelItemLink to="4">Item 4</PanelItemLink>
					<PanelItemLink to="5">Item 5</PanelItemLink>
					<PanelItemLink to="6">Item 6</PanelItemLink>
				</PanelMain>
			</Panel>
			<Outlet />
		</>
	);
}
