import { useState } from "react";

const MainEventCard = ({ title, tagline, image }) => {
	const [description, setDescription] = useState(false);

	// let data = JSON.parse(desc)

	return (
		<>
			<div className=" border-[5px] border-sky-400 h-[200px] w-[130px] lg:w-[220px] lg:h-[290px] mr-4 ml-4 bg-white p-[20x] rounded-[10px] hover:scale-105 duration-300 relative">
				<div className="flex justify-between items-center flex-col">
					<img src={image} alt="sample" className="p-[1px] rounded-[10px]" />
					<h3 className="text-bold font-black justify-center text-[10px] font-cursive mt-[5px] text-[#263159] p-[5px]">
						{title}
					</h3>
					<p className="font-semibold text-[10px] text-[#434242]">{tagline}</p>
					<div className="w-[90%] h-[1px] bg-[#818183] rounded-[10px] " />
				</div>
			</div>
		</>
	);
};

export default MainEventCard;
