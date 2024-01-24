import { useState } from "react";

const EventCard = ({ title, tagline, link, desc, image }) => {
  const [description, setDescription] = useState(false);

  // let data = JSON.parse(desc)

  const handleClick = () => {
    window.open(link);
  };

  const handleDesc = () => {
    setDescription(!description);
  };

  return (
    <>
      {description ? (
        <div className="overflow-y-auto h-[420px] w-[290px] 
        opacity-800  min-[768px]:bg-black min-[768px]:bg-opacity-40  min-[768px]:rounded min-[768px]:drop-shadow-lg 
         p-[20x] rounded-[10px] pb-[15px] hover:scale-105 duration-300 transition ease-in-out relative">
          <div className="flex justify-evenly items-center flex-col">
            <h3 className="text-semibold font-black justify-center text-[20px] font-cursive mt-[10px] text-[#263159] ">
              {title}
            </h3>
            <div>
            <p className=" px-[5px] text-sky-400 font-bold">{desc}</p>
            </div>

            {/* <div className="w-[86%] h-[1px] bg-[#818183] rounded-[10px] mt-[5px]" /> */}

            <div className="flex flex-row justify-between items-center gap-6  bottom-[10px]">
              <div
                onClick={handleClick}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Register</span>
              </div>
              <div
                onClick={() => setDescription(!description)}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Back</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" border-[5px] border-sky-400 h-[420px] w-[280px] bg-white p-[20x] rounded-[10px] hover:scale-105 duration-300 relative">
          <div className="flex justify-between items-center flex-col">
            <img
              src={image}
              alt="sample"
              className="p-[1px] rounded-[10px]"
            />
            <h3 className="text-bold font-black justify-center text-[20px] font-cursive mt-[5px] text-[#263159] p-[5px]">
              {title}
            </h3>
            <p className="font-semibold  text-[#434242]">{tagline}</p>
            <div className="w-[86%] h-[1px] bg-[#818183] rounded-[10px] " />
            <div className="flex flex-row justify-between items-center gap-6 absolute bottom-[10px]">
              <div
                onClick={handleClick}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Register</span>
              </div>
              <div
                onClick={handleDesc}
                className="flex justify-center items-center h-[30px] w-[85px] bg-[#083AA9] object-cover rounded-[5px] hover:bg-[#002E94] mt-[9px] cursor-pointer duration-300 hover:scale-105 shadow-sm shadow-black"
              >
                <span className="text-white">Description</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
