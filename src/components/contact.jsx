import React from "react";
import Icon from "./footerIcon";

function Contact() {
	return (
		<footer className="p-4 bg-black text-yellow-50	overflow-x-hidden sm:p-6 dark:bg-gray-800">
			<div className="mx-auto max-w-screen-xl">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0 row-span-1">
						<a href="https://www.edcbitmesra.in/" className="flex items-center">
							<img src="images/edc.png" className="mr-3 h-28" alt=" Logo" />
							<div className="flex flex-row align-middle self-center text-3xl word-break font-semibold  dark:text-white">
								Entrepreneurship Development Cell
							</div>
						</a>
						<div className=" flex  text-5xl font-semibold dark:text-white ">
							EDC
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4  sm:grid-cols-2">
						<div>
							<h2 className="mb-6 text-lg font-semibold text-white-900 uppercase dark:text-white">
								Quick Links
							</h2>
							<ul className="text-gray-600 dark:text-gray-400 ">
								<li className="mb-4">
									<a
										href="./home"
										className=" hover:text-white transition ease-in-out 	duration-100"
									>
										HOME
									</a>
								</li>
								<li className="mb-4">
									<a
										href="./about"
										className=" hover:text-white transition ease-in-out duration-100	"
									>
										ABOUT
									</a>
								</li>
								<li className="mb-4">
									<a
										href="./events"
										className=" hover:text-white transition ease-in-out 	duration-100"
									>
										EVENTS
									</a>
								</li>
								<li className="mb-4">
									<a
										href="./speakers"
										className=" hover:text-white transition ease-in-out duration-100"
									>
										SPEAKERS
									</a>
								</li>
								<li>
									<a
										href="./sponsors"
										className=" hover:text-white transition ease-in-outduration-100 "
									>
										SPONSORS
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">
								Contact
							</h2>
							<ul className="text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a
										href=""
										className=" hover:text-[#06c3ff] transition ease-in-out  duration-100 "
									>
										EDC ACTIVITY AREA, BIT MESRA,RANCHI ,JHARKHAND-835215
									</a>
								</li>

								<li className="mb-2">
									<h3 className="text-white mb-4">FOR QUERIES :</h3>
									<a
										href="mailto:team.edc@bitmesra.ac.in"
										className=" hover:text-[#06c3ff] transition ease-in-out duration-100  "
									>
										team.edc@bitmesra.ac.in
									</a>
								</li>
								<li className="mb-2">
									<a
										href="mailto:president.edc@bitmesra.ac.in"
										className=" hover:text-[#06c3ff] transition ease-in-out duration-100"
									>
										president.edc@bitmesra.ac.in
									</a>
								</li>
								<li className="mb-4">
									<a href="" className="hover:underline "></a>
								</li>
							</ul>
						</div>
					</div>

					<div className="ml-16 sm:gap-8">
						<h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white ">
							For Technical Enquiries:-
						</h2>
						<ul className="text-gray-600 dark:text-gray-400">
							<li className="mb-2">
								<h3 className="text-white mb-4">Contact :</h3>
								ANKIT KASHYAP:-
								<a
									href="mailto:btech10705.21@bitmesra.ac.in
                "
									className=" hover:text-[#06c3ff] transition ease-in-out duration-100 "
								>
									btech10705.21@bitmesra.ac.in
								</a>
							</li>
							<li className="mb-2">
								SHANTANU SAMEER:-
								<a
									href="mailto:btech10594.21@bitmesra.ac.in"
									className="hover:text-[#06c3ff] transition ease-in-out duration-100 "
								>
									btech10594.21@bitmesra.ac.in
								</a>
							</li>
							<li className="mb-4">
								<a href="" className="hover:underline "></a>
							</li>
						</ul>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2024{" "}
						<a href="https://flowbite.com" className="hover:underline">
							Entrepreneurship Development Cell
						</a>
						. All Rights Reserved.
					</span>
					<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
						<a
							href="https://m.facebook.com/edcbitmesra?_rdr"
							className="text-gray-500  hover:text-[#06c3ff] dark:hover:text-white"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
						<a
							href="#"
							className="text-gray-500  hover:text-[#06c3ff] dark:hover:text-white"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clipRule="evenodd"
								/>
							</svg>
						</a>

						<a
							href="https://www.linkedin.com/company/edcbitm/"
							className="text-gray-500  hover:text-[#06c3ff] dark:hover:text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
							</svg>
						</a>
						<a
							href="https://twitter.com/edc_bit_mesra"
							className="text-gray-500  hover:text-[#06c3ff] dark:hover:text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-twitter-x"
								viewBox="0 0 16 16"
							>
								<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Contact;
