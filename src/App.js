import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Common/>}>
          <Route index element={<Home/>}/>
          {/* <Route path="/about" element={<About/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
