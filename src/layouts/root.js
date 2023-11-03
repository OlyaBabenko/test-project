import { Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import tabs from "../data/tabs.json";
import classes from "./root.module.css";

function RootLayout() {
	const location = useLocation();
	return (
		<div className={classes.root}>
			<nav>
				{tabs.map((el, i) => (
					<Link
						key={i}
						to={`/${el.id}`}
						className={
							location.pathname === `/${el.id}`
								? classes.selectedLink
								: undefined
						}
					>
						{el.title}
					</Link>
				))}
			</nav>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
}

export default RootLayout;
