import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="flex justify-center items-center w-screen h-screen rubik">
			<div className="border-2 border-gray-200 min-w-[375px] min-h-[812px] px-5 bg-[#F7F8F9]">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
