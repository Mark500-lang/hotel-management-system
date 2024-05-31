import React from 'react';
import { FaPerson } from "react-icons/fa6";
import { FaBed, FaBath } from "react-icons/fa";

function RoomsCards({id, name, capacity, beds, bathrooms, description, imagesrc, roomId, setRoomId}){
    const handleClick=()=>{
        setRoomId(id);
    }
    return(
        <div className="w-full max-w-[60rem] mx-auto flex flex-col shadow rounded my-10">
            <div className="w-full flex gap-5 flex-row mx-auto ">
                            <div
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <img
                                src="../assets/image6.jpg"
                                alt="card"
                                className="h-full w-full object-cover"
                                />
                            </div>
                            <div className=" w-3/5">
                                    <p className="mb-4 text-xl">
                                    {name} 
                                    </p>
                                <span className="flex flex-row"><FaPerson className="" />&nbsp; 
                                    <p className="mb-2 text-sm">
                                    Sleeps {capacity} 
                                    </p>
                                </span>
                                <span className="flex flex-row"><FaBed className="" />&nbsp; 
                                    <p className="mb-2 text-sm">
                                    {beds} 
                                    </p>
                                </span>
                                <span className="flex flex-row"><FaBath className="" />&nbsp; 
                                    <p className="mb-2 text-sm">
                                    {bathrooms} 
                                    </p>
                                </span>
                                <p className="mb-8 font-normal">
                                {description}
                                </p>
                            </div>
                </div>

                <div className="w-full flex justify-between flex-row mx-auto px-20 my-10">
                    <div>
                        <p>Pricing</p>
                    </div>
                    <div>
                        <button className=" w-28 h-10 rounded text-white bg-[rgb(205,1,80)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)]" onClick={handleClick}>
                            Select
                        </button>
                    </div>

                </div>
            </div>
    )

};

export default RoomsCards;