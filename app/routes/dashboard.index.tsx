import { Panel, PanelMain } from "~/components/panel";

export default function Index() {
	return (
		<Panel index>
			<PanelMain>
				<div className="h-full flex flex-center">
					<h1>Dashboard Layout Example</h1>
				</div>
			</PanelMain>
		</Panel>
	);
}
