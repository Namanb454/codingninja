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
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
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

                        <div class="lg:w-1/4 md:w-1/2 w-1/2 md:px-4">
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
                        <div class="lg:w-1/4 md:w-1/2 w-1/2 md:px-4">
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
                        <div class="lg:w-1/4 md:w-1/2 w-1/2 md:px-4">
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



                        <div class="lg:w-1/4 md:w-1/2 w-1/2">
                            <h2 class="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase text-center">Follow Us</h2>
                            <nav class="list-none mb-10 justify-center mx-auto w-fit">
                                <span class="inline-flex sm:mt-0 mt-2 sm:justify-start">
                                    <a href='/' class=" text-white text-xs border-2 p-1 rounded-full">
                                        <FaInstagram />
                                    </a>
                                    <a href='/' class=" md:ml-3 ml-1 text-white text-xs border-2 p-1 rounded-full">
                                        <FaTwitter />
                                    </a>
                                    <a href='/' class=" md:ml-3 ml-1 text-white text-xs border-2 p-1 rounded-full">
                                        <FaFacebook />
                                    </a>
                                    <a href='/' class=" md:ml-3 ml-1 text-white text-xs border-2 p-1 rounded-full">
                                        <FaYoutube />
                                    </a>
                                    <a href='/' class=" md:ml-3 ml-1 text-white text-xs border-2 p-1 rounded-full">
                                        <FaLinkedin />
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
