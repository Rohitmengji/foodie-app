import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./components/screens/Login";
import Home from "./components/screens/Home";
import SignUp from "../src/components/screens/SignUp";
import LandingPage from "./components/screens/LandingPage";
import MyOrder from "./components/screens/MyOrder";
  import { CartProvider } from "./components/ContextReducer";
import ContactForm from "./components/screens/ContactUs";


function App() {
  return (
    <>
    <CartProvider>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/landingpage" element={<LandingPage />} />
            <Route exact path="/contactus" element={<ContactForm />} />
          </Routes>
        </div>
    </CartProvider>
    </>
  );
}

export default App;
