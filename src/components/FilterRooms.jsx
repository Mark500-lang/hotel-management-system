import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function FilterRooms({date, setDate, startDate, setStartDate, endDate, setEndDate, adults, setAdults, setFilterRooms}){
    const handleChange = (range) => {
        const [startDate, endDate] = range;
        setStartDate(startDate);
        setEndDate(endDate);
      };

    const increment=()=>{
        //setCount(prevCount => prevCount+=1);
        setAdults(function (prevCount) {
        return (prevCount += 1);
        });
    }
    const decrement=()=>{
        setAdults(function (prevCount) {
        if (prevCount > 0) {
            return (prevCount -= 1); 
        } else {
            return (prevCount = 0);
        }
        });
    }
    //handle room filtering based on number of guests
    const handleFilterRooms=()=>{
        //setCount(prevCount => prevCount+=1);
        setFilterRooms(adults)
    }
	return (
		<div className=''>
			<div className='flex flex-row max-w-fit mx-auto gap-4 mt-10'>
				<DatePicker
				showIcon
				icon={<FaRegCalendarAlt className='text-grey text-lg top-[0.7rem]'/>}
				selected={startDate}
				onChange={handleChange}
				minDate={date}
				startDate={startDate}
                endDate={endDate}
                selectsRange
				placeholderText="Select Dates"
				className='border-2 border-[rgb(205,1,80)] h-14 rounded-lg'
				/>
                <div className="flex flex-row border-2 px-4">
                    <button className="text-[27px]" disabled={adults <= 0 ? true : false} onClick={decrement}><CiCircleMinus/ ></button>&nbsp;
                    <div className='border min-w-12 m-auto text-center'><h1  className="text-[25px]">{adults}</h1></div>&nbsp;
                    <button className="text-[27px]" disabled={adults >= 10 ? true : false} onClick={increment}><CiCirclePlus/></button>
                    
                </div>
				<button  onClick={handleFilterRooms} className="text-base text-white mx-5 my-auto h-10 px-4 py-2 rounded bg-[rgb(205,1,80)]">
                    Done
                </button>
	  		</div>
		</div>
	  
	);
  };

export default FilterRooms;