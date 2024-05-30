import React from "react";
import PickDate from './PickDate';

function Rooms({date, setDate, startDate, setStartDate, endDate, setEndDate}){
    return(
        <div className="h-[80vh]">
            <div className="container">
                <PickDate date={date} setDate={setDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>

                <div>
                <div className="w-full max-w-[48rem] flex gap-10 flex-row mx-auto shadow rounded my-10">
                        <div
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="card"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <div className=" w-3/5">
                            <p variant="h6" color="gray" className="mb-4 uppercase">
                            startups
                            </p>
                            <p variant="h4" color="blue-gray" className="mb-2">
                            Lyft launching cross-platform service this week
                            </p>
                            <p color="gray" className="mb-8 font-normal">
                            Like so many organizations these days, Autodesk is a company in
                            transition. It was until recently a traditional boxed software company
                            selling licenses. Yet its own business model disruption is only part
                            of the story
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Rooms;