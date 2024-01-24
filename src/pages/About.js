import React from "react";
import "./styles.css";

import EsubmitReel from "./Carousel4.js";
import EventCaro from "./Carouselevent.js";

export default function About() {
	return (
		<div
			style={{ backgroundImage: ` url(${`images/background.jpg`})` }}
			className=" h-cover w-[100%] opacity-900 contrast-125 bg-cover "
		>
			<div className=" text-center ">
				<section id="abouts">
					<div className="overflow-hidden w-[100%]">
						<div className="max-w-[1250px] z-10 mx-auto relative my-0 py-0 justify-center md:grid grid-rows-2 text-white">
							<div
								className="row-span-1 sm:w-[100%] w-[100%] flex flex-col justify-center text-justify"
								data-aos="fade-right"
							>
								<h1 className="text-center text-sky-400 max-[600px]:mt-0 py-0 max-[600px]:text-5xl text-8xl">
									About Us
								</h1>
								<p className="max-[600px]:text-sm p-4 text-center flex flex-row mb-4 justify-center text-lg">
									Focus on entrepreneurship: "ignites minds" and "empowers
									connections" emphasize the event's purpose.The
									Entrepreneurship Development Cell is dedicated to fostering
									the culture of innovation-led startups and entrepreneurial
									mindset amongst students of our esteemed institution.
								</p>
								<div
									id="reel"
									className=" text-justify flex flex-row justify-center font-bold"
								></div>
							</div>
							<EsubmitReel />
							<div
								id="aboutcomp"
								className="row-span-1 text-justify flex flex-row justify-center p-2 font-bold"
							></div>
						</div>
					</div>
				</section>

				{/* <section id="abouts ">
          <div className="  overflow-hidden w-[100%] ">
            <div className=" max-w-[1250px] z-10 mx-auto relative my-10 py-10  justify-center md:grid grid-rows-2 text-white">
              <div
                className="row-span-1 sm:w-[100%] w-[100%]  flex flex-col justify-center text-justify"
                data-aos="fade-right"
              >
                <h1  className="text-center text-sky-400  max-[600px]:mt-10 py-4 max-[600px]:text-5xl text-8xl">
                  Events
                </h1>
                <p className="max-[600px]:text-sm p-4 flex flex-row mb-10 justify-center  text-lg ">
                Focus on entrepreneurship: "ignites minds" and "empowers connections" emphasize the event's purpose.
                </p>

                <div id="reel" className=" row-span-1    text-justify flex flex-row justify-center p-2 font-bold">
                <EventCaro />
              </div>
              </div>
           
            </div>
          </div>

        </section> */}
			</div>

			<br></br>
		</div>
	);
}
