import React from "react";
// import { Link } from "react-router-dom";
import Offers from './Offers';
import PickDate from './PickDate';

function Home({date, setDate, startDate, setStartDate, endDate, setEndDate}){
    return(
        <div className="min-h-max">
            <div>
                <img src="./assets/image9.jpg" alt="home" className="w-full h-[40rem] bg-blend-multiply bg-black-900"/>
                <div className="container flex font-bold  flex-col mx-auto max-w-7xl left-0 right-0 items-center justify-center p-5 absolute top-[40%] ">
                    <h1 className="text-white text-4xl/tight sm:text-5xl/tight lg:text-5xl/tight xl:text-6xl/tight ">
                    Welcome to Pine Grove Lodge
                    </h1>
                    <h4 className= "text-white sm:text-md/tight lg:text-2xl/tight xl:text-4xl/tight pt-5">
                    Experience Nature's Tranquility
                    </h4>    
                </div>
                
            </div>
            <div className="container text-center mx-auto flex flex-col my-10 max-w-5xl">
                <p 
                    className="text-md text-[rgb(26,22,18)]">
                    Nestled amidst the lush greenery of Nairobi, Pine Grove Lodge offers a serene retreat from the vibrant city life. Our charming lodge blends rustic elegance with modern comforts to ensure a memorable stay. Whether you're seeking a romantic getaway, a family vacation, or a solo retreat, Pine Grove Lodge promises a rejuvenating experience amidst the tranquility of nature right in the heart of Nairobi!
                </p>
            </div>
            <div className="container flex flex-col mt-40 mb-10">
                <div className="text-center">
                    <h6 className="text-xl">Unparalleled Luxury & Comfort</h6>
                    <div className='w-full mx-auto gap-4 grid md:grid-cols-2 grid-cols-1 my-10'>
                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image8.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Cozy Accomodation</h5>
                                    <p className="mb-10 text-base text-gray-700">Relax in our well-appointed rooms and suites, designed to provide comfort while reflecting the lodge’s natural surroundings.</p>
                                    <a href="/rooms" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(205,1,80)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image13.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Gourmet Dining</h5>
                                    <p className="mb-10 text-base text-gray-700">Enjoy delicious meals crafted from fresh, local ingredients at our on-site restaurant, offering a taste of Nairobi’s culinary delights.</p>
                                    <a href="/wine&dine" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(205,1,80)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image14.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Outdoor Adventures</h5>
                                    <p className="mb-10 text-base text-gray-700">Explore scenic trails, enjoy a safari in the city's national reserve, or simply unwind by our cozy fireplace.</p>
                                    <a href="/wine&dine" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(205,1,80)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="max-w-xl bg-white rounded-lg shadow-sm transition duration-100 ease-in-out hover:shadow-lg mb-4">
                                    <img className="rounded-t-lg" src="./assets/image5.jpg" alt="" />
                                <div className="p-5 text-left">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">City Convenience</h5>
                                    <p className="mb-10 text-base text-gray-700">Experience the best of both worlds with our serene location and easy access to Nairobi’s vibrant attractions, cultural sites, and shopping destinations.</p>
                                    <a href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[rgb(205,1,80)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                </div>
                <section className="py-10 bg-[rgb(233,229,221)]">
                    <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6">
                        <div className="bg-white shadow-lg shadow-gray-200/50  border border-gray-100/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700">
                            <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900">
                            2 Years
                            </span>
                            <span>Of Operation</span>
                        </div>
                        <div className="bg-white shadow-lg shadow-gray-200/50  border border-gray-100/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700">
                            <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900">
                            +50
                            </span>
                            <span>Staff</span>
                        </div>
                        <div className="bg-white shadow-lg shadow-gray-200/50  border border-gray-100/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700">
                            <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900">
                            95%
                            </span>
                            <span>Satisfaction</span>
                        </div>
                        <div className="bg-white shadow-lg shadow-gray-200/50  border border-gray-100/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700">
                            <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900">
                            +2k
                            </span>
                            <span>Clients</span>
                        </div>
                    </div>
                </section>
            </div>

            <section className="py-24">
                <div className="max-w-6xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                    <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200">
                        <div className="absolute right-0 top-0 h-full w-full flex justify-end">
                            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-[rgb(205,1,80)] rounded-md rotate-45" />
                            </div>
                        </div>
                        <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
                            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-[rgb(205,1,80)]rounded-md rotate-45" />
                                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-[rgb(205,1,80)] rounded-md rotate-45" />
                            </div>
                        </div>
                        <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
                            <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">Book Your Stay Now</span>
                            </h1>
                            <p className="text-gray-600">Embrace the tranquility and natural beauty of Pine Grove Lodge. Immerse yourself in a peaceful oasis in the heart of Nairobi.</p>
                            <PickDate date={date} setDate={setDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                            
                        </div>
                    </div>
                </div>
            </section>

            <Offers/>
        </div>
    )
}

export default Home;