import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Welcome />,
			},
			{
				path: "/signin",
				element: <SignIn />,
			},
		],
	},
]);
