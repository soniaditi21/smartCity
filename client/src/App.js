import Navbar from "./components/Navs/Navbar";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import ContextProvider from './context/ContextProvider';
import Dashboard from "./components/userDetails/Dashboard";
import AdminDashboard from './components/AdminDetails/AdminDashboard/AdminDashboard'
import AddATM from "./components/AdminDetails/AddATM";
import AddHospital from "./components/AdminDetails/AddHospital";
import AddLibrary from "./components/AdminDetails/AddLibrary";
import AddHotel from './components/AdminDetails/AddHotel';
import AddSchool from './components/AdminDetails/AddSchool';
import AddShoppingMalls from './components/AdminDetails/AddShoppingMalls'
import AddTemple from './components/AdminDetails/AddTemple';
import AddTourism from './components/AdminDetails/AddTourism';
import AddColleges from './components/AdminDetails/AddColleges';
import AddTransport from './components/AdminDetails/AddTransport';
import { TemplateProvider } from "./context/TemplateProvider";
import HeroSection from "./components/Home/HeroSection";

import ATMs from './components/userDetails/ATMs';
import Hospitals from './components/userDetails/Hospitals';
import Colleges from './components/userDetails/Colleges';
import Schools from './components/userDetails/Schools';
import Hotels from './components/userDetails/Hotels';
import Libraries from './components/userDetails/Libraries';
import Temples from './components/userDetails/Temples';
import Tourism from './components/userDetails/Tourism';
import ShoppingMalls from './components/userDetails/ShoppingMalls';
import Transports from './components/userDetails/Transports';
function App() {
  return (
    <TemplateProvider>
    <ContextProvider>
    <Router>
      <Navbar/>
     
      <Routes>
        
        <Route path='/' element={<HeroSection/>}/>
 
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        <Route path='/addATM' element={<AddATM/>}/>
        <Route path='/addHospital' element={<AddHospital/>}/>
        <Route path='/addHotel' element={<AddHotel/>}/>
        <Route path='/addSchool' element={<AddSchool/>}/>
        <Route path='/addCollege' element={<AddColleges/>}/>
        <Route path='/addShoppingMalls' element={<AddShoppingMalls/>}/>
        <Route path='/addLibrary' element={<AddLibrary/>}/>
        <Route path='/addTemple' element={<AddTemple/>}/>
        <Route path='/addTourism' element={<AddTourism/>}/>
        <Route path='/addTransport' element={<AddTransport/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/atms' element={<ATMs/>}/>
        <Route path='/hospitals' element={<Hospitals/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/schools' element={<Schools/>}/>
        <Route path='/colleges' element={<Colleges/>}/>
        <Route path='/libraries' element={<Libraries/>}/>
        <Route path='/shoppingMalls' element={<ShoppingMalls/>}/>
        <Route path='/tourism' element={<Tourism/>}/>
        <Route path='/temples' element={<Temples/>}/>
        <Route path='/transports' element={<Transports/>}/>
      </Routes>
      
    </Router>
    </ContextProvider>
    </TemplateProvider>
   
  );
}

export default App;
