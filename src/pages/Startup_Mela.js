import React, {useState} from "react";

import styled from "styled-components";


function Register() {
    function Submit(e) {
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbzxl5UIA3JY-dH6r6e9MFV0Bcm4ni7QPeuhNLPIxY90oOTjFJOluGEhmjkF0ycJVL1I/exec",
            {
                method: "POST",
                body: formDatab
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <>
            <div>
                <section className="bg-red   min-h-screen  w-[100%] bg-cover py-5 ">
                    <div
                        className="relative  py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white bg-gradient-to-b from-black/80 to-black/40  backdrop-blur-lg border-[1px] border-solid border-white border-opacity-10 rounded-2xl shadow-[0_0_20px_10px_rgba(0,0,0,0.75)] ">

                        <form action="#" className="space-y-8 text-white bg-none [  ]" onSubmit={(e) => Submit(e)}>
                            <div>
                                <label for="subject" className="block mb-2 text-sm font-medium text-white">Name</label>
                                <input placeholder="Name" name="Name" type="text"
                                       className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>

                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-white">Your
                                    email</label>
                                <input placeholder="Email" name="Email" type="email"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium text-white">Your
                                    message</label>
                                <input placeholder="Message" name="Message" type="text" rows="6"
                                       class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                            </div>
                            <input type="submit"
                                   class="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>

                        </form>
                    </div>
                </section>
            </div>
        </>

    );
};




export default function Fifa() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${`images/bgs.jpg`})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="h-screen bg-cover overflow-x-hidden"
            >
                <div className="flex justify-center items-center pt-[100px]">
                    <h1 className="text-sky-400 font-bold lg:text-5xl text-3xl font-Orbitron">STARTUP MELA</h1>
                </div>

                <div>
                    <div
                        className="relative font-normal font-epilogue pt-4 mt-2 text-center lg:text-3xl text-sky-400"
                    >
                        Register
                    </div>

                    <div className="md:p-5">
                        <Register />
                    </div>
                </div>
            </div>
        </>
    );
}
