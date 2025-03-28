import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
	return (
		<div className="relative w-full h-full min-h-[812px]">
			<div className="absolute bottom-[41px]">
				<h1 className="font-bold text-[28px]">Welcome to PopX</h1>
				<p className="text-lg opacity-60 max-w-[232px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				</p>
				<div className="min-w-[335px] mx-auto flex flex-col justify-center items-center mt-[29px] space-y-[10px]">
					<Link to={"/signup"} className="w-full">
						<button
							className={`w-full h-[46px] bg-[#6C25FF] text-white text-base font-semibold rounded-md cursor-pointer hover:opacity-80`}
						>
							Create Account
						</button>
					</Link>
					<Link to={"/signin"} className="w-full">
						<button
							className={`w-full h-[46px] bg-[#6C25FF4B] text-black text-base font-semibold rounded-md cursor-pointer hover:opacity-80`}
						>
							Already Registered? Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
