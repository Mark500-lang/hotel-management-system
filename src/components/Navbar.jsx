import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <header
                className="sticky top-0 w-full  shadow-sm" style={{ zIndex: "9999999" }}>
                <div className=" bg-[#ffffff]">
                    <div className="container mx-auto w-full flex flex-row flex-wrap py-10 md:justify-normal justify-between items-center">
                    <Link
                        to="/"
                        className="flex title-font font-medium items-center text-grey-900 mr-4 border-r-none md:border-r border-gray-900 pr-4 md:mb-0"
                    >
                        <img
                            src="./logo192.png"
                            alt="pine grove"
                            className="w-8 h-8"
                        />
                        <span className="ml-3 text-3xl md:block hidden">
                            Pine Grove
                        </span>
                    </Link>
                    <nav
                        className={`flex justify-center flex-row flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-base items-center p-4`}
                    >
                        <Link
                            to="/"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(0,156,200)] hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(0,156,200)] hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            to="/rooms"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(0,156,200)] hover:text-white"
                        >
                            Rooms
                        </Link>
                        <Link
                            to="/wine&dine"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(0,156,200)] hover:text-white"
                        >
                            Wine & Dine
                        </Link>
                        <Link
                            to="/contacts"
                            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black items-center justify-center hover:bg-[rgb(0,156,200)] hover:text-white"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex justify-end items-center gap-1">
                        <button variant="outline" className="text-sm text-white mx-5 h-10 px-4 py-2 rounded bg-[rgb(0,156,200)]" asChild>
                            <Link to="/rooms">Book Now</Link>
                        </button>
                    </div>
                    </div>
                </div>
            </header>
    );
}

export default Navbar;