import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div>

            <div className='scroll-smooth z-1 w-full relative'>
                <Navbar />
            </div>

            <section className=" relative left-0 py-20 text-gray-600 body-font">
                <img className='w-14 absolute xl:block -z-10 xl:left-[91%] md:left-[90%] left-[78%] -top-[4%]' src='diagonal.png' alt='img' />
                <img className='w-14 absolute xl:block z-1 xl:left-[94%] md:left-[100%] left-[85%] xl:top-[2%] md:top-[17%] top-[0%]' src='diagonal.png' alt='img' />
                <img className='w-14 absolute xl:block  z-1 xl:left-[91%] md:right-[90%] xl:top-[8%] md:top-[80%]' src='diagonal.png' alt='img' />

                <div className="container mx-auto flex px-5 md:flex-row lg:flex-row-reverse flex-col items-center">

                    <div className="xl:max-w-lg xl:w-1/2 md:w-full w-full mb-10 md:mb-0">
                        <div className='flex'>
                            <div className='mt-20'>
                                <img className=" object-center rounded w-[100%] " alt="hero" src="learn.png" />
                                <img className=" object-center rounded w-[100%] " alt="hero" src="connect.png" />
                            </div>
                            <div>
                                <img className=" object-center rounded w-[100%] " alt="hero" src="lead.png" />
                                <img className=" object-center rounded w-[100%] " alt="hero" src="innovate.png" />
                            </div>
                        </div>
                    </div>

                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex flex-col">
                            <div className="xl:text-left md:text-left text-center w-full xl:px-20 mb-4">
                                <h1 id='Heading' className="title-font xl:text-[45px] md:text-3xl text-2xl xl:mb-4 text-[#132C66] font-bold">Be a Leader.</h1>
                                <h1 id='Heading' className="title-font xl:text-[45px] md:text-3xl text-2xl xl:mb-4 text-[#132C66] font-bold ">Be a Ninja Entrepreneur.</h1>
                            </div>

                            {/* Card  */}
                            <div className='relative z-0 xl:w-[60%] md:w-[100%] w-full xl:mx-20 xl:px-10 px-'>

                                <img className='absolute xl:block  z-1 xl:left-[85%] md:left-[90%] left-[78%] top-[5%]' src='diagonal.png' alt='img' />
                                <img className='absolute xl:block  z-1 xl:left-[92%] md:left-[100%] left-[85%] xl:top-[17%] md:top-[17%] top-[0%]' src='diagonal.png' alt='img' />
                                <img className='absolute xl:block  z-1 xl:left-[0%] md:right-[90%] xl:top-[85%] md:top-[80%]' src='diagonal.png' alt='img' />

                                <div id='navs' className='relative z-10 bg-[#464264] px-5 py-5 rounded-xl'>
                                    <h1 className='xl:text-[35px] md:text-2xl text-2xl text-white text-left'>
                                        Ninja Entrepreneur Programme
                                    </h1>
                                    <h1 className='xl:text-sm md:text-sm my-5 text-white text-left'>
                                        Leadership is not inherited, it's cultivated. Join the program and lead your community.
                                    </h1>

                                    <div className='text-[#FFE8D9] text-base text-left px-10'>
                                        <li>
                                            Amplify your social impact.
                                        </li>
                                        <li>
                                            Bring together your peers to aid learning and assimilation of new skills.
                                        </li>
                                        <li>
                                            Be a part of the largest tech community today and stand out from the crowd.
                                        </li>
                                        <li>
                                            Gain access to special events, courses, and networking opportunities.
                                        </li>
                                    </div>
                                    <div>
                                        <button className='w-[60%] py-2 my-2 text-lg hover:font-semibold tracking-wide hover:tracking-widest transition-all ease-in-out duration-500 rounded-lg text-white bg-gradient-to-br from-[#D05401] from-70% to-white shadow-white shadow-inner '>
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    )
}

export default Home
