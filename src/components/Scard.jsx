import { useState } from "react";

const Scard = ({ title, tagline, image }) => {
	const [description, setDescription] = useState(false);

	// let data = JSON.parse(desc)

	return (
		<>
			<div className=" border-[5px] border-sky-400 h-[220px] w-[130px] lg:w-[220px] lg:h-fit mr-4 ml-4 bg-white p-[20x] rounded-[10px] hover:scale-105 duration-300 relative">
				<div className="flex justify-between items-center flex-col">
					<img src={image} alt="sample" className="p-[1px] rounded-[10px]" />
				</div>
			</div>
		</>
	);
};

export default Scard;
