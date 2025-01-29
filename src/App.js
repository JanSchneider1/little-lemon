import './App.css';
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/booking" element={<BookingPage/>}/>
                    <Route path="/booking-confirmation" element={<BookingConfirmationPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}