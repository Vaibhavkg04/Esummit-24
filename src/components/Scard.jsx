import { useState } from "react";

const Scard = ({ title, tagline, image }) => {
	const [description, setDescription] = useState(false);

	// let data = JSON.parse(desc)

	return (
		<>
			<div className=" border-[5px] border-sky-400 h-[130px] object-contain w-[130px] lg:w-[220px] lg:h-fit mr-4 ml-4 bg-white p-[20x] hover:scale-105 duration-300 relative ">
				<div className="flex justify-between items-center flex-col object-contain">
					<img
						src={image}
						alt="sample"
						className=" h-[120px] object-contain w-[130px] lg:w-[220px] lg:h-fit  "
					/>
				</div>
			</div>
		</>
	);
};

export default Scard;
