import React, { useState } from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import Home from './components/Home';
import About from './components/About';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Contacts from './components/Contacts';
function App() {
  const [date, setDate] = useState(new Date());
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
  const [adults, setAdults] = useState(0);
  // const [children, setChildren] = useState();
  // const [infants, setInfants] = useState();

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home date={date} setDate={setDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/rooms" element={<Rooms date={date} setDate={setDate} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} adults={adults} setAdults={setAdults}/>}/>
          <Route path="/wine&dine" element={<Dining/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
