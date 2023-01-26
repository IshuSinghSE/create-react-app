import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Qrcode } from '../pages/Qrcode';
import { About } from '../pages/About'
import { Navbar } from "../navbar/Navbar";
import { PageNotFound } from "../pages/PageNotFound";
import { Weather } from "../weather/Weather";
import './App.css'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='qrcode' element={<Qrcode />}></Route>
        <Route path="weather" element={<Weather />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    </>
  );
}

export default App;
