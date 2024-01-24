import React, {useState} from "react";
import styled from "styled-components";

function Register() {
    return (
        <>
            <div>
                <section className="bg-red   min-h-screen  w-[100%] bg-cover py-5 ">
                    <div
                        className="relative  py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white bg-gradient-to-b from-black/80 to-black/40  backdrop-blur-lg border-[1px] border-solid border-white border-opacity-10 rounded-2xl shadow-[0_0_20px_10px_rgba(0,0,0,0.75)] ">

                        <form action='https://script.google.com/macros/s/AKfycbynEQN5XrNoTIycEIEnkNrFF0jE6hU97jX5Wn_xTpSEjP5YnLV9qQivI4lh9oW3ly9h/exec' id='BGMI' method='POST' className="space-y-8 text-white bg-none [  ]">
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">YOUR
                                    NAME</label>
                                <input placeholder="Name" name="NAME" type="text"
                                       className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>

                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">COLLEGE
                                    NAME</label>
                                <input placeholder="Name of your college/university/institute" name="COLLEGE_NAME" type="name"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">COLLEGE
                                    ROLL NO.</label>
                                <input placeholder="Roll No." name="COLLEGE_ROLL_NO" type="name"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">TEAM
                                    SIZE</label>
                                <input placeholder="No. of members" name="TEAM_SIZE" type="number"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="Email" className="block mb-2 text-sm font-medium text-white">LEADER
                                    EMAIL</label>
                                <input placeholder="Leader's email" name="LEADER_EMAIL" type="text"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">TEAM MEMBER NAMES</label>
                                <textarea placeholder="Write the player names" name="TEAM_MEMBER_NAMES" type="text"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="subject"
                                       className="block mb-2 text-sm font-medium text-white">BATCH/YEAR</label>
                                <input placeholder="Write here" name="YEAR" type="name"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       required/>
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
                    <h1 className="text-sky-400 font-bold lg:text-5xl text-3xl font-Orbitron">BGMI</h1>
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
