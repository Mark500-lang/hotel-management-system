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
            <div className="container">
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

                <div>
                {Object.keys(roomsInfo)
                .filter((detailKey) => roomsInfo[detailKey].capacity > filterRooms)
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