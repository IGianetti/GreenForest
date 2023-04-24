import './App.css';
//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CONTEXT
import  CartContextProvider  from './context/CartContext';
// COMPONENT
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

//PAGES
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

import CartShop from './pages/CartShop/CartShop';
import ItemDetailsContainer from './pages/ItemDetails/ItemDetailsContainer';
import HeaderLogo from './components/header/HeaderLogo';

import ItemCategory from './pages/ItemCategory/ItemCategory';


//<Route path='/categories/:cat' element={<Categories/>}/>


const App = () => {
  return (
    <CartContextProvider>
    <Router>
    <div className="App">
      <HeaderLogo/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>        
        <Route path='/cartshop' element={<CartShop/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/item-details/:id' element={<ItemDetailsContainer/>}/> 
        <Route path='/categories/:cat' element={<ItemCategory/>}/>
      </Routes>
      
      <Footer/>    
    </div>
    </Router>
    </CartContextProvider>
  );
}

export default App;
