import React from "react";
import Nav from "./Components/Nav.jsx";
import Container from "./pages/Container.jsx";
import { Route, Routes } from "react-router-dom";
import Nothing from "./pages/Nothing.jsx";
import Gaming from "./pages/Gaming.jsx";
import Tv from "./pages/Tv.jsx";
import Mobile from "./pages/Mobile.jsx";
import Error from "./pages/Error.jsx";
import Audio from "./pages/Audio.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/container" element={<Container />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      {/* <Route path="/" element={<Nothing />} /> */}
      {/* <Route path="/" element={<Container />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
        {/* <Route path="/audio" element={<Audio />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/mobile" element={<Mobile/>} /> */}
      </Routes>
    </>
  );
}

export default App;
