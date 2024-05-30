import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

function PickDate({date, setDate, startDate, setStartDate, endDate, setEndDate}){
	
	return (
		<div className=''>
			<div className='flex flex-row max-w-fit mx-auto'>
				<DatePicker
				selectsStart
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				minDate={date}
				startDate={startDate}
				placeholderText="ARRIVAL"
				className='border-2 border-[rgb(205,1,80)] h-14 rounded-lg px-5 mx-2'
				/>
				<DatePicker
				selectsEnd
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				endDate={endDate}
				startDate={startDate}
				minDate={date}
				placeholderText="DEPARTURE"
				className='border-2 border-[rgb(205,1,80)] h-14 rounded-lg px-5 mx-2'
				calendarClassName='bg-[rgb(0,156,200)]'
				/>
	  		</div>
		</div>
	  
	);
  };

export default PickDate;