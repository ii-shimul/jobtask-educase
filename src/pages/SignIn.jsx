import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<div className="relative w-full h-full min-h-[812px] ">
			<div className="absolute top-[40px]">
				<h1 className="font-semibold text-[28px]">
					Signin to your
					<br />
					PopX account
				</h1>
				<p className="text-lg opacity-60 max-w-[232px] leading-6.5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				</p>
				<div className="min-w-[335px] mx-auto flex flex-col justify-center items-center mt-[29px] space-y-[14px]">
					<div className="w-full space-y-[23px]">
						<div className="relative w-full">
							<label
								htmlFor="email"
								className="absolute -top-2.5 left-3 text-[13px] text-[#6C25FF] px-1 bg-[#F7F8F9]"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								placeholder="Enter email address"
								className="w-full border-[1.5px] border-gray-300 rounded-md px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
							/>
						</div>
						<div className="relative w-full">
							<label
								htmlFor="password"
								className="absolute -top-2.5 left-3 text-[13px] text-[#6C25FF] px-1 bg-[#F7F8F9]"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Enter password"
								className="w-full border-[1.5px] border-gray-300 rounded-md px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
							/>
						</div>
					</div>
					<Link to={"/account"} className="w-full">
						<button
							className={`w-full h-[46px] bg-[#6C25FF] disabled:bg-[#CBCBCB] text-white text-base font-semibold rounded-md cursor-pointer hover:opacity-80`}
						>
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
