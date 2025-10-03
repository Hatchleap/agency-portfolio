"use client";
import { FaRegMoon } from "react-icons/fa";

export default function ServiceUs() {
	return (
		<section className="w-full bg-white py-12 md:py-20">
			<div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center relative">
				{/* Heading */}
				<h1 className="text-center font-extrabold text-black leading-[1.08] mb-6 text-[clamp(2.5rem,7vw,5rem)] md:text-[clamp(3rem,8vw,4rem)] 4xl:text-[6vw]">
					PRODUCT MAKING<br className="hidden sm:block" />
					FOR FRIENDLY USERS
				</h1>
				{/* Description */}
				<p className="text-center text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
					creative agency, we bring your ideas to life. Whether you're starting fresh or ready for a glow up we’re here to help you stand out and succeed. From logos to websites.
				</p>
				{/* Floating Button */}
				{/* <button className="absolute right-4 top-0 md:top-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg focus:outline-none">
					<FaRegMoon className="w-6 h-6" />
				</button> */}
				{/* Feature List */}
				<div className="w-full mt-4">
					<div className="grid grid-cols-1 text-center md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 text-lg md:text-xl font-semibold text-gray-800">
						<ul className="list-disc list-inside space-y-2">
							<li>Content Management</li>
							<li>Single-Page Design</li>
							<li>Interaction Design</li>
						</ul>
						<ul className="list-disc list-inside space-y-2">
							<li>Single Page Website Design</li>
							<li>E-Commerce Website Design</li>
							<li>Custom Website Design</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}