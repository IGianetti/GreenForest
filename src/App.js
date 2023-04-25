//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CONTEXT
import CartContextProvider from "./context/CartContext";

// COMPONENT
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Checkout from "./components/checkout/Checkout";
import HeaderLogo from "./components/header/HeaderLogo";

//PAGES
import Home from "./pages/Home/Home";
import CartShop from "./pages/CartShop/CartShop";
import ItemDetailsContainer from "./pages/ItemDetails/ItemDetailsContainer";
import ItemCategory from "./pages/ItemCategory/ItemCategory";
import About from "./pages/About/About";

//CSS
import "./App.css";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <HeaderLogo />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartshop" element={<CartShop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/item-details/:id"
              element={<ItemDetailsContainer />}
            />
            <Route path="/categories/:cat" element={<ItemCategory />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
};

export default App;
