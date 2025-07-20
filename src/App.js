import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom"; // ✅ added useLocation
import CustomCardPage from "./components/Customcard/Customcard";
import Navbar from "./components/Navbar/Navbar";
import Owl from "./components/Owl";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import { SearchProvider } from "./components/Navbar/SearchContext";
import { CartProvider } from "./components/Cartpage/Cartcontext";
import CartPage from "./components/Cartpage/Addcart";
import CustomerDetails from "./components/CustomerDetail/CustomerDetail";
import PaymentMethod from "./components/Payment/Paymentmethod";
import ThankYou from "./components/Thankyou/Thankyou"; 
import Offer from "./components/Offerpage/Offerpage";
import ShopAddress from "./components/Address/Addresspage"; 

function App() {
  const location = useLocation();

  const hideOwl = ["/cart", "/customer-details", "/payment-method", "/thankyou","/offer","/shop"].includes(location.pathname);

  return (
    <SearchProvider>
      <CartProvider>
        <Navbar />
        {!hideOwl && <Owl />} 
        <Routes>
          <Route path="/" element={<CustomCardPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/offer" element={<Offer />} /> 
            <Route path="/shop" element={<ShopAddress />} />
        </Routes>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
