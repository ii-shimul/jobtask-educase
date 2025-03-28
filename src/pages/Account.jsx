import React from "react";
import profile from "/src/assets/Ellipse 114@2x.png"
import cam from "/src/assets/Group 1585.svg";


const Account = () => {
	return (
		<div className="">
			<h1 className="text-lg bg-white drop-shadow-sm h-[68px] flex items-center px-[15px]">
				Account Settings
			</h1>
			<div className="flex px-5 py-7 gap-4">
				<div className="relative ">
					<img src={profile} className="w-[76px] h-[76px]" alt="" />
					<img src={cam} alt="" className="absolute bottom-0 right-0" />
				</div>
				<div>
					<h1>Marry Doe</h1>
					<p className="font-light">marry@gmail.com</p>
				</div>
			</div>
			<p
				className="px-4 w-[371px] text-sm border-b border-dashed pb-5 border-gray-300"
				style={{ borderSpacing: "5px" }}
			>
				Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
				Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
			</p>
		</div>
	);
};

export default Account;
