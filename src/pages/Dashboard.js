import React from 'react'
import Sidebar from '../components/Layout/Sidebar'
import { MdOutlineWatchLater } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
// import Layout from '../components/Layout/Layout'

function Dashboard() {
    return (
        <div>
            <div className='mt- z-'>
                <Sidebar>
                    <section class="bg-[#ff9f9f4f] rounded-xl my-10 shadow-md">
                        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                                <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-[#666189]">Welcome Back Captain!
                                </h1>
                                <p class="mb-8 leading-relaxed text-base text-[#414141] w-[60%]">We're thrilled to have you back in the command center! <br />Get ready to embark on another exciting journey filled with coding adventures, leadership, and innovation.</p>

                            </div>
                            <div class="lg:w-[30%] md:w-1/2 w-5/6 absolute left-[70%]">
                                <img class="object-cover object-center rounded" alt="hero" src="Elements(2).png" />
                            </div>
                        </div>
                    </section>

                    <div className='flex'>
                        {/* Points */}
                        <div className='w-2/3'>
                            <section class=" mx-5 text-gray-600 body-font bg-gradient-to-br from-[#132c6626] from-50% to-white rounded-xl shadow-lg my-10">
                                <div class="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                                    <div class="lg:flex-grow md:w-fit mx-auto flex flex-col md:items-start md:text-left md:mb-0 items-center text-center ">
                                        <h1 class="title-font sm:text-xl text-3xl font-bold text-[#132C66] mx-auto"> Gold Points Glory!
                                        </h1>
                                    </div>
                                    <div className='flex my-2 mx-20'>
                                        <div type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-gradient-to-br from-[#D0A201] via-[#F8E1A7] to-[#7D0F5E] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
                                            20 Points Used
                                        </div>
                                        <div type="button" class="ml-auto py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-gradient-to-br from-[#D0A201] via-[#F8E1A7] to-[#7D0F5E] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
                                            40 Points Left
                                        </div>
                                    </div>
                                    <p className='w-1/2 mx-auto font-semibold text-sm'>Your  journey just got even more rewarding—go ahead, claim your perks!</p>
                                    <button type="button" class="relative w-60 py-2 px-5 mt-10 text-white font-semibold text-base rounded-xl overflow-hidden duration-400 ease-in-out shadow-md hover:text-white tracking-wide hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full bg-gradient-to-bl from-[#D05401] from-50% to-white focus:from-[#D05401] focus:from-100% transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                                        Reedem Now
                                    </button>
                                </div>
                            </section>
                        </div>

                        {/* Suggested Courses */}
                        <div className='w-1/3'>
                            <section class=" mx-5 text-gray-600 body-font bg-gradient-to-br from-[#5d48ff39] from-50% to-white rounded-xl shadow-lg my-10">
                                <div class="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                                    <div class="lg:flex-grow md:w-fit mx-auto flex flex-col md:items-start md:text-left md:mb-0 items-center text-center ">
                                        <h1 class="title-font sm:text-xl text-3xl font-semibold text-[#0c111db9] mx-auto"> Suggested Courses
                                        </h1>
                                    </div>
                                    <div className='my-2 w-fit ml-auto'>
                                        <button type="button" class=" py-1 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border-2 border-[#0c111db9] disabled:opacity-50 disabled:pointer-events-none ">
                                            sort by
                                        </button>
                                    </div>

                                    {/* Cards */}
                                    <section class="text-gray-600 body-font">
                                        <div class="container mx-auto">
                                            <div class="flex flex-wrap -m-4">
                                                <div class="p-4 md:w-full">
                                                    <div class="h-full border-2 bg-gradient-to-br from-[#ff9f9f4f] from-10% to-white  border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                                                        <div class="p-6">
                                                            <h2 class="tracking-widest text-xs title-font font-medium text-left text-[#0c111db9] mb-1">  Full Stack</h2>
                                                            <h1 class="title-font text-sm font-medium text-[#0c111ddd] mb-3 text-left">Java Web Development with Spring Boot</h1>
                                                            <div class="flex items-center flex-wrap ">
                                                                <div class=" text-[#0c111ddd] text-xs inline-flex items-center md:mb-2 lg:mb-0">
                                                                    <MdOutlineWatchLater /> 140+ Hours
                                                                </div>
                                                                <div class="ml-auto text-[#0c111ddd] text-xs inline-flex items-center md:mb-2 lg:mb-0">
                                                                    <GoProjectSymlink /> Projects
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>

                                    <button type="button" class="relative w-40 py-2 px-5 mt-10 text-white font-semibold text-base rounded-xl overflow-hidden duration-400 ease-in-out shadow-md hover:text-white tracking-wide hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full bg-gradient-to-bl from-[#D05401] from-50% to-white focus:from-[#D05401] focus:from-100% transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                                        View More
                                    </button>
                                </div>
                            </section>
                        </div>

                    </div>

                    {/* Your team  */}
                    <div>
                        <div className='w-1/3'>
                            <section class=" mx-5 text-gray-600 body-font bg-gradient-to-br from-[#5d48ff39] from-50% to-white rounded-xl shadow-lg my-">
                                <div class="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                                    <div class="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left md:mb-0 items-center text-center ">
                                        <div className='flex w-full'>
                                            <h1 class="title-font w-fit sm:text-xl text-3xl font-semibold text-[#0c111db9] mr-auto"> Your Team
                                            </h1>
                                            <button className='text-red-500 text-xl ml-10 items-center my-auto w-fit'>
                                                <IoMdAdd />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='my-2 w-fit ml-auto'>
                                        <button type="button" class=" py-1 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border-2 border-[#0c111db9] disabled:opacity-50 disabled:pointer-events-none ">
                                            search by filter
                                        </button>
                                    </div>

                                    {/* Cards */}
                                    <section class="text-gray-600 body-font">
                                        <div class="container my-2 px- flex md:flex-row flex-col items-center bg-gradient-to-r from-[#9992CE] from-10% to-transparent transition-all rounded-xl p-1">
                                            <div class="lg:flex md:items-start md:text-left items-center text-center ">
                                                <img className='my-auto' src='nametag.png' />
                                                <h1 class="items-center sm:text-lg font-medium text-[#34394C]">
                                                    Name <br />
                                                    <h2 className='text-xs'>Position</h2>
                                                </h1>
                                            </div>
                                            <div class="w-fit  ml-auto">
                                                <img class="object-cover rounded" alt="hero" src="user.png" />
                                            </div>
                                        </div>
                                        <div class="container my-2 px- flex md:flex-row flex-col items-center bg-gradient-to-r from-[#9992CE] from-10% to-transparent transition-all rounded-xl p-1">
                                            <div class="lg:flex md:items-start md:text-left items-center text-center ">
                                                <img className='my-auto' src='nametag.png' />
                                                <h1 class="items-center sm:text-lg font-medium text-[#34394C]">
                                                    Name <br />
                                                    <h2 className='text-xs'>Position</h2>
                                                </h1>
                                            </div>
                                            <div class="w-fit  ml-auto">
                                                <img class="object-cover rounded" alt="hero" src="user.png" />
                                            </div>
                                        </div>
                                        <div class="container my-2 px- flex md:flex-row flex-col items-center bg-gradient-to-r from-[#9992CE] from-10% to-transparent transition-all rounded-xl p-1">
                                            <div class="lg:flex md:items-start md:text-left items-center text-center ">
                                                <img className='my-auto' src='nametag.png' />
                                                <h1 class="items-center sm:text-lg font-medium text-[#34394C]">
                                                    Name <br />
                                                    <h2 className='text-xs'>Position</h2>
                                                </h1>
                                            </div>
                                            <div class="w-fit  ml-auto">
                                                <img class="object-cover rounded" alt="hero" src="user.png" />
                                            </div>
                                        </div>
                                    </section>


                                </div>
                            </section>
                        </div>
                    </div>
                </Sidebar >

            </div >
        </div >
    )
}

export default Dashboard
