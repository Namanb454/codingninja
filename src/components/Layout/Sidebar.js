import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdEmojiEvents } from "react-icons/md";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import Navbar from './Navbar';

function Sidebar({ children }) {

    const sideNavbar = [
        { 'id': '1', 'nav': 'Dashboard', 'icons': RxDashboard, 'link': '#' },
        { 'id': '2', 'nav': 'Events', 'icons': MdEmojiEvents, 'link': '#' },
        { 'id': '3', 'nav': 'Members', 'icons': GiNinjaHeroicStance, 'link': '#' },
        { 'id': '4', 'nav': 'Settings', 'icons': IoIosSettings, 'link': '#' },
    ];

    return (
        <div>
            <Navbar />
            <div id='sideNavbar' className="flex  overflow-hidden bg-white">
                <div className=" md:flex md:flex-shrink-0">
                    <div className="flex flex-col w-64 h-full">
                        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r shadow-md ">
                            <div className="flex flex-col items-center flex-shrink-0 px-4">
                                <a className="text-left focus:outline-none" href="/groups/sidebar/">
                                    <h2 className="block p-2 text-xl font-medium tracking-tighter transition duration-500 ease-in-out transform cursor-pointer text-black">Dr. Akhilesh Das Gupta Institute od Technology and Management - Delhi</h2>
                                </a>
                            </div>
                            <div className="flex flex-col flex-grow px-4 mt-5">
                                <nav className="flex-1 space-y-1">
                                    <ul>
                                        {sideNavbar.map((data) => {
                                            return (
                                                <li>
                                                    <button className=" inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-[#666189] font-semibold  focus:bg-gradient-to-r  focus:from-[#666189] focus:from-[4%] focus:via-[#9992CE] focus:via-5% focus:to-white focus:to-100% focus:transition-all hover:bg-gradient-to-r hover:from-[#9992CE] hover:from-10% hover:to-white hover:transition-all" white="" href="/">
                                                        <data.icons />
                                                        <span className="ml-4">{data.nav}</span>
                                                    </button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 w-0 overflow-hidden">
                    <main className="relative flex-1 overflow-y-auto focus:outline-none">
                        <div className="py-6">
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                <h1 className="text-lg text-neutral-600">{children}</h1>
                            </div>
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
