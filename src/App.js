import './App.css';
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/booking" element={<BookingPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}