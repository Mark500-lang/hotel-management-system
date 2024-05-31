import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function FilterRooms({date, setDate, startDate, setStartDate, endDate, setEndDate, adults, setAdults, setFilterRooms, calcNights, timeStaying}){
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
        calcNights()
    }
	return (
		<div className=''>
			<div className='grid lg:flex lg:flex-row max-w-fit mx-auto gap-4 mt-10'>
				<DatePicker
                id='datepicker'
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
                <label
                    for="datepicker"
                    class="bg-white px-2 pointer-events-none absolute left-[6rem] top-5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Select Dates
                </label>
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