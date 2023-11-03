import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/root";
import tabs from "./data/tabs.json";
import classes from "./App.module.css";


function App() {
	return (
		<div className={classes.app}>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					{tabs.map((el, i) => {
						const LazyComponent = lazy(() => import(`./tabs/${el.id}.js`));
						return (
							<Route
								key={i}
								path={el.id}
								element={
									<Suspense  fallback={<div>Loading...</div>}>
										<LazyComponent />
									</Suspense>
								}
							/>
						)
					})}
					<Route index element={<Navigate to={tabs[0].id} />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
