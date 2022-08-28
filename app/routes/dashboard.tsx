import { Link, Outlet, useLocation, useSearchParams } from "@remix-run/react";

import {
	Panel,
	PanelFooter,
	PanelHeader,
	PanelItemLink,
	PanelMain,
} from "~/components/panel";

import iconsHref from "~/icons.svg";

export default function Menu() {
	const location = useLocation();
	const [searchParams] = useSearchParams();

	const forceShow = location.pathname === "/dashboard";
	const panelOpen = searchParams.get("open") === "menu";

	return (
		<>
			<Panel size="sm" force={forceShow} open={panelOpen}>
				<PanelHeader>
					<span className="flex-1">Menu</span>
					{forceShow ? null : (
						<Link to={location.pathname} className="icon ml xl:hidden">
							<svg height={20} width={20}>
								<use href={iconsHref + "#close"} />
							</svg>
						</Link>
					)}
				</PanelHeader>
				<PanelMain>
					<PanelItemLink to="items">Items</PanelItemLink>
				</PanelMain>
				<PanelFooter>Footer</PanelFooter>
			</Panel>
			<Outlet />
		</>
	);
}
