import App from "./App";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./components/Home";
import People from "./components/People";
import Detail from "./components/Detail";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="/people" element={<People />} />
			<Route path="/people/:id" element={<Detail />} />
		</Route>
	)
);
