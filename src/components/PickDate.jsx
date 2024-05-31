import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function PickDate({date, setDate, startDate, setStartDate, endDate, setEndDate}){
	
	return (
		<div className=''>
			<div className='grid lg:flex lg:flex-row max-w-fit mx-auto gap-4 mt-10'>
				<DatePicker
				showIcon
				icon={<FaRegCalendarAlt className='text-grey text-lg top-[0.7rem]'/>}
				selectsStart
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				minDate={date}
				startDate={startDate}
				placeholderText="ARRIVAL"
				className='border-2 border-[rgb(205,1,80)] h-14 rounded-lg'
				/>
				<DatePicker
				showIcon
				icon={<FaRegCalendarAlt className='text-grey text-lg top-[0.7rem]'/>}
				selectsEnd
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				endDate={endDate}
				startDate={startDate}
				minDate={date}
				placeholderText="DEPARTURE"
				className='border-2 border-[rgb(205,1,80)] h-14 rounded-lg'
				/>
				<button className="text-base text-white mx-5 my-auto h-12 px-4 py-2 rounded bg-[rgb(205,1,80)]">
                    <Link to="/rooms">Reserve</Link>
                </button>
	  		</div>
		</div>
	  
	);
  };

export default PickDate;