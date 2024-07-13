import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}
