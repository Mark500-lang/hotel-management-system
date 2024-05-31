import React, { useState } from "react";
import { roomsInfo } from "./accomodations/roomsjson";
import RoomsCards from "./accomodations/RoomsCards";
import FilterRooms from "./FilterRooms";

function Rooms({date, setDate, startDate, setStartDate, endDate, setEndDate, adults, setAdults}){
    const [roomId, setRoomId] = useState(null);
    const [filterRooms, setFilterRooms] = useState(0);
    const [timeStaying, setTimeStaying] = useState(1);

    let calcNights =()=>{
        setTimeStaying( function(){
            return(
                Math.round((endDate.getTime() - startDate.getTime())/(1000 * 3600 * 24))
        )
    })
    }
    console.log(timeStaying);
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
                <div className="absolute top-[48%] left-[31%] bg-white rounded shadow-lg px-20 pb-10 mx-auto min-w-96">
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
                        calcNights={calcNights}
                        timeStaying={timeStaying}
                    />
                </div>
                

                <>
                {
                    roomId == null ? 
                    
                        <div className="my-40 grid">
                            <div className="">
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

                    : 
                        
                        <div className="my-40 mx-auto flex flex-row ">
                            <div className="w-fit">
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
                            <div className="mx-4 my-[2.5rem] w-96 p-10 h-fit shadow-md right-0">
                                {Object.keys(roomsInfo)
                                    .filter((detailKey) => roomsInfo[detailKey].id === roomId)
                                    .map((detailKey) => {
                                        return (
                                            <div>
                                                <p>KSH {timeStaying*roomsInfo[detailKey].price} total</p>
                                                <p>{timeStaying} Night</p>
                                                <p>{adults} Guests</p>
                                                <p className="text-2xl">{roomsInfo[detailKey].name}</p>
                                                    <button className=" w-24 h-10 rounded text-white bg-[rgb(205,1,80)] transition duration-200 ease-in-out hover:bg-[rgb(0,156,200)] focus:ring-1 focus:outline-none focus:ring-[rgb(0,156,200)] right-0">
                                                        Book
                                                    </button>
                                            </div>

                                        )
                                                
                                })}
                            </div>   
                        </div>
                }
                </>
                
            </div>
           
        </div>
    )
}

export default Rooms;