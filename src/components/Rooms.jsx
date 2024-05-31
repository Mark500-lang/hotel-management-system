import React, { useState } from "react";
import { roomsInfo } from "./accomodations/roomsjson";
import RoomsCards from "./accomodations/RoomsCards";
import FilterRooms from "./FilterRooms";

function Rooms({date, setDate, startDate, setStartDate, endDate, setEndDate, adults, setAdults}){
    const [roomId, setRoomId] = useState(null);
    const [filterRooms, setFilterRooms] = useState(0);
    console.log(roomId);

    return(
        <div className="">
            <div className='bg-black'>
                <img src="./assets/image12.jpg" alt="home" className="hover:opacity-80 opacity-40 w-full h-[20rem] bg-blend-multiply bg-black-900 transition-all duration-200"/>
                <div className="container flex font-bold  flex-col mx-auto max-w-fit left-0 items-center justify-center px-20 absolute top-[33%] ">
                    <h1 className="text-white text-4xl/tight sm:text-5xl/tight lg:text-4xl/tight xl:text-5xl/tight ">
                    Accomodations
                    </h1>    
                </div>
                
            </div>
            <div className="container p-5">
                <div className="absolute top-[48%] left-[31%] bg-white rounded border shadow-lg px-20 pb-10 mx-auto min-w-96">
                    <FilterRooms 
                        date={date} 
                        setDate={setDate} 
                        startDate={startDate} 
                        setStartDate={setStartDate} 
                        endDate={endDate} 
                        setEndDate={setEndDate} 
                        adults={adults} 
                        setAdults={setAdults}
                        setFilterRooms={setFilterRooms}
                    />
                </div>
                

                <div className="my-40">
                {Object.keys(roomsInfo)
                .filter((detailKey) => roomsInfo[detailKey].capacity >= filterRooms)
                .map((detailKey) => {
                    return (
                        <RoomsCards
                            id={roomsInfo[detailKey].id}
                            name={roomsInfo[detailKey].name}
                            capacity={roomsInfo[detailKey].capacity}
                            beds={roomsInfo[detailKey].beds}
                            bathrooms={roomsInfo[detailKey].bathrooms}
                            description={roomsInfo[detailKey].description}
                            imagesrc={roomsInfo[detailKey].imagesrc}
                            roomId={roomId}
                            setRoomId={setRoomId}
                        >

                            </RoomsCards>
                            );
                })}
                    
                </div>
            </div>
           
        </div>
    )
}

export default Rooms;