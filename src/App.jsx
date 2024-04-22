import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from "./Components/Footer";
import { AppProvider } from "./Components/utils/useAppContext.jsx";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';


function App() {
  return (
    <AppProvider>
    <Router>
      <div>
        <Navbar />
        
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    </AppProvider>
  );
}

export default App;

