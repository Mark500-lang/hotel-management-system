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
				id='dateppicker1'
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
				{/* <label
                    for="datepicker1"
                    class="bg-white px-2 pointer-events-none absolute left-[2rem] top-[10rem] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Select Dates
                </label> */}
				<DatePicker
				id='datepicker2'
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
				{/* <label
                    for="datepicker2"
                    class="bg-gray-200 px-2 pointer-events-none absolute left-[20rem] top-[10rem] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Select Dates
                </label> */}
				<button className="text-base text-white mx-5 my-auto h-12 px-4 py-2 rounded bg-[rgb(205,1,80)]">
                    <Link to="/rooms">Reserve</Link>
                </button>
	  		</div>
		</div>
	  
	);
  };

export default PickDate;