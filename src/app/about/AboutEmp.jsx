import Image from "next/image";
import { FaUserTie } from "react-icons/fa";

const experts = [
	{
		name: "JEROME BELL",
		img: "/image/b.jpeg",
	},
	{
		name: "KRISTIN WATSON",
		img: "/image/b.jpeg",
	},
	{
		name: "ALBERT FLORES",
		img: "/image/b.jpeg",
	},
];

export default function AboutEmp() {
	return (
		<section className="w-full max-w-7xl 2xl:max-w-screen-2xl 4xl:max-w-[1800px] mx-auto px-4 sm:px-8 2xl:px-16 4xl:px-24 py-12 md:py-20 2xl:py-32">
			<div className="text-center mb-10 md:mb-16">
				<h2
					className="font-extrabold text-black flex items-center justify-center gap-2 mb-4"
					style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.1 }}
				>
					MEET OUR EXPERTS
					<span className="inline-block align-middle text-lime-500">
						<FaUserTie style={{ fontSize: "clamp(2rem,4vw,2.5rem)" }} />
					</span>
				</h2>
				<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 2xl:gap-10 mb-4">
					<button
						className="flex items-center gap-2 bg-lime-400 hover:bg-lime-500 transition text-black font-semibold rounded-full px-6 py-2 md:px-8 md:py-3 text-base md:text-lg"
						style={{ fontSize: "clamp(1rem,2vw,1.2rem)" }}
					>
						<span>→</span>
						<span>VIEW ALL TEAM</span>
					</button>
				</div>
				<p
					className="mx-auto text-gray-700 max-w-xl"
					style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)", lineHeight: 1.5 }}
				>
					Our team is a diverse group of passionate creatives, strategists, and
					problem solvers. We’re experts spanning branding, design, impactful
					experiences.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-10 2xl:gap-x-20 4xl:gap-x-32">
				{experts.map((e, i) => (
					<div
						key={i}
						className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-200 p-2 sm:p-4 md:p-6 max-w-sm w-full mx-auto h-full"
					>
						<div className="w-full aspect-[4/4.5] md:aspect-[4/4.5] 2xl:aspect-[4/4.2] rounded-2xl overflow-hidden mb-4 relative">
							<Image
								src={e.img}
								alt={e.name}
								fill
								className="object-cover w-full h-full rounded-2xl max-w-full"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
								priority={i === 0}
							/>
						</div>
						<h3
							className="font-extrabold text-black text-center mt-2"
							style={{
								fontSize: "clamp(1.3rem,2.5vw,2rem)",
								letterSpacing: "0.01em",
							}}
						>
							{e.name}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
}
