import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
		<div className="relative w-full h-full min-h-[812px]">
			<div className="absolute top-[40px]">
				<h1 className="font-semibold text-[28px]">Signin to your<br />PopX account</h1>
				<p className="text-lg opacity-60 max-w-[232px] leading-6.5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				</p>
				<div className="min-w-[335px] mx-auto flex flex-col justify-center items-center mt-[29px] space-y-[10px]">
					<Link to={"/signin"} className="w-full">
						<button
							className={`w-full h-[46px] bg-[#6C25FF] text-white text-base font-semibold rounded-md cursor-pointer hover:opacity-80`}
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