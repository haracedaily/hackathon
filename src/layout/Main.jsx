import React from 'react';
import {Route, Routes} from "react-router-dom";
import DashBoard from "../pages/DY/DashBoard.jsx";
import Notice from "../pages/JO/Notice.jsx";
import Review from "../pages/JO/Review.jsx";
import User from "../pages/JO/User.jsx";
import Festival from "../pages/DY/Festival.jsx";
import Faq from "../pages/JO/Faq.jsx";
import Autho from "../pages/JH/Autho.jsx";

function Main({isTablet}) {
    return (

        <Routes>
            <Route path="/" element={<DashBoard isTablet={isTablet} />} />
            <Route path="/user" element={<User isTablet={isTablet} />} />
            <Route path="/festival" element={<Festival isTablet={isTablet} />} />
            <Route path="/review" element={<Review isTablet={isTablet} />} />
            <Route path="/notice" element={<Notice isTablet={isTablet} />} />
            <Route path="/faq" element={<Faq isTablet={isTablet} />} />
            <Route path="/autho" element={<Autho isTablet={isTablet} />} />
        </Routes>
    );
}

export default Main;