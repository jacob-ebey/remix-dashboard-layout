import { Link } from "@remix-run/react";

export default function Index() {
	return (
		<div className="h-full flex-1 flex flex-center text-center p">
			<div>
				<h1>Dashboard Layout Example</h1>
				<p>
					<Link to="/dashboard">Go to Dashboard</Link>
				</p>
			</div>
		</div>
	);
}
