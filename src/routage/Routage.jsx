import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";

function Routage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginScreen />} />
                <Route exact path="/dashboard" element={<DashboardScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routage;
