import loadable from "@loadable/component";
import { Home } from "@pages/Home";
import { Route, Routes } from "react-router-dom";
const NotFound = loadable(() => import("@pages/NotFound"));

export const MainRoutes = () => {


	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};
