import './App.css';
//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENT
import NavBar from './components/navbar/NavBar';

import Footer from './components/footer/Footer';

//PAGES
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import CartShop from './pages/CartShop/CartShop';
import ItemDetailsContainer from './pages/ItemDetails/ItemDetailsContainer';





const App = () => {
  return (
    <Router>
    <div className="App">
      <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/item-details/:id' element={<ItemDetailsContainer/>}/> 
        <Route path='/cartshop' element={<CartShop/>}/> 
      </Routes>
      
      <Footer/>    
    </div>
    </Router>
  );
}

export default App;
