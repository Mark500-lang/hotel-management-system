import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import Home from './components/Home';
import About from './components/About';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Contacts from './components/Contacts';
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/wine&dine" element={<Dining/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
