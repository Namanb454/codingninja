import React from 'react'
import { FaInstagram, FaSquareXTwitter, FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer() {
    const codingninja = [
        { "heading": "Coding Ninjas" },
        { "title": "About Us" }, { "title": "Press" }, { "title": "Privacy Policy" }, { "title": "Terms & Conditions" }, { "title": "Big Bounty" },
    ]
    const products = [
        { "heading": "Products" },
        { "title": "Problem of the day" }, { "title": "Interview Problems" }, { "title": "Interview Experience" }, { "title": "Guided Paths" }, { "title": "Library" }, { "title": "Test Series" }, { "title": "Contest" }, { "title": "Online Compiler" },
    ]
    const community = [
        { "heading": "Community" },
        { "title": "Coding Ninjas Studio" }, { "title": "Blog" }, { "title": "Events" }, { "title": "Campus Ninjas" },
    ]
    return (
        <div>
            <footer class="text-white body-font bg-gradient-to-br from-[#464264] from-100%  to-100%">
                <div class="container px-5 py-24 mx-auto flex md:items-center xl:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">

                            <img src='cnlogo2.png' alt='codingninjalogo' />
                        </a>
                        <div className='px-10 py-10'>
                            <h1 className='font-bold text-base'>Download our app:</h1>
                            <button class="bg-black inline-flex mt-2 py-3 px-5 rounded-lg items-center focus:outline-none">
                                <img className='w-5' src='google-play.svg' alt='google play' />
                                <span class="ml-4 flex items-start flex-col leading-none">
                                    <span class="text-xs  mb-1">GET IT ON</span>
                                    <span class="title-font font-medium">Google Play</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left">

                        <div class="xl:w-1/4 md:w-1/2 w-full md:px-4 md:my-0 my-5">
                            <h2 class="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase">Coding Ninjas</h2>
                            {codingninja.map((data) => {
                                return (
                                    <nav class="list-none mb-3">
                                        <li>
                                            <a href='/' class="md:text-base text-sm text-white hover:tracking-widest tracking-wide hover:font-bold transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#D05401] hover:from-40% hover:to-white hover:text-transparent bg-clip-text">{data.title}</a>
                                        </li>
                                    </nav>
                                )
                            })}
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 w-full md:px-4 md:my-0 my-5">
                            <h2 class="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase">Products</h2>
                            {products.map((data) => {
                                return (
                                    <nav class="list-none mb-3">
                                        <li>
                                            <a href='/' class="md:text-base text-sm text-white hover:tracking-widest tracking-wide hover:font-bold transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#D05401] hover:from-10% hover:to-white hover:text-transparent bg-clip-text">{data.title}</a>
                                        </li>
                                    </nav>
                                )
                            })}
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 w-full md:px-4 md:my-0 my-5">
                            <h2 class="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase">Community</h2>
                            {community.map((data) => {
                                return (
                                    <nav class="list-none mb-3">
                                        <li>
                                            <a href='/' class="md:text-base text-sm text-white hover:tracking-widest tracking-wide hover:font-bold transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#D05401] hover:from-40% hover:to-white hover:text-transparent bg-clip-text">{data.title}</a>
                                        </li>
                                    </nav>
                                )
                            })}
                        </div>



                        <div class="xl:w-1/4 md:w-1/2 w-full md:my-0 my-5">
                            <h2 class="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase xl:text-center text-left">Follow Us</h2>
                            <nav class="list-none mb-10 justify-center md:mx-auto w-fit">
                                <span class="inline-flex sm:mt-2 mt-2 sm:justify-start">

                                    <a href='/' class="group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaInstagram />
                                        <span
                                            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Instagram
                                        </span>
                                    </a>
                                    <a href='/' class="ml-3  group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaTwitter />
                                        <span
                                            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Twitter
                                        </span>
                                    </a>
                                    <a href='/' class="ml-3  group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaFacebook />
                                        <span
                                            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Facebook
                                        </span>
                                    </a>
                                    <a href='/' class="ml-3  group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaYoutube />
                                        <span
                                            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Youtube
                                        </span>
                                    </a>
                                    <a href='/' class="ml-3 group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaLinkedin />
                                        <span
                                            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Linkedin
                                        </span>
                                    </a>
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
