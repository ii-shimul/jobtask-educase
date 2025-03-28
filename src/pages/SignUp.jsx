import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className="relative w-full h-full min-h-[812px] ">
			<div className="absolute top-[40px]">
				<h1 className="font-semibold text-[28px]">
					Create your
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
								htmlFor="name"
								className="absolute -top-2.5 left-3 text-[13px] text-[#6C25FF] px-1 bg-[#F7F8F9]"
							>
								Full Name <span className="text-red-600">*</span>
							</label>
							<input
								type="text"
								id="name"
								placeholder="Enter your full name"
								className="w-full border-[1.5px] border-gray-300 rounded-md px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
							/>
						</div>
						<div className="relative w-full">
							<label
								htmlFor="phone"
								className="absolute -top-2.5 left-3 text-[13px] text-[#6C25FF] px-1 bg-[#F7F8F9]"
							>
								Phone Number <span className="text-red-600">*</span>
							</label>
							<input
								type="number"
								id="phone"
								placeholder="Enter phone number"
								className="w-full border-[1.5px] border-gray-300 rounded-md px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
							/>
						</div>
						<div className="relative w-full">
							<label
								htmlFor="email"
								className="absolute -top-2.5 left-3 text-[13px] text-[#6C25FF] px-1 bg-[#F7F8F9]"
							>
								Email Address <span className="text-red-600">*</span>
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
								Password <span className="text-red-600">*</span>
							</label>
							<input
								type="password"
								id="password"
								placeholder="Enter password"
								className="w-full border-[1.5px] border-gray-300 rounded-md px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
							/>
						</div>
						<div className="relative w-full">
							<label
								htmlFor="company"
								className="absolute -top-2.5 left-3 text-[13px] text-[#6C25FF] px-1 bg-[#F7F8F9]"
							>
								Company name
							</label>
							<input
								type="text"
								id="company"
								placeholder="Enter company name"
								className="w-full border-[1.5px] border-gray-300 rounded-md px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
							/>
						</div>
						<label className="text-gray-700 text-[13px]">
							Are you an Agency? <span className="text-red-500">*</span>
						</label>

						<div className="flex items-center gap-4 my-2">
							<label className="flex items-center space-x-2 cursor-pointer">
								<input
									type="radio"
									name="agency"
									className="radio radio-primary"
									defaultChecked
								/>
								<span className="text-gray-700 text-sm">Yes</span>
							</label>

							<label className="flex items-center space-x-2 cursor-pointer">
								<input
									type="radio"
									name="agency"
									className="radio radio-primary"
								/>
								<span className="text-gray-700 text-sm">No</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<Link to={"/account"} className="w-full absolute bottom-[30px]">
				<button
					className={`w-full h-[46px] bg-[#6C25FF] disabled:bg-[#CBCBCB] text-white text-base font-semibold rounded-md cursor-pointer hover:opacity-80`}
				>
					Create Account
				</button>
			</Link>
		</div>
	);
};

export default SignUp;
