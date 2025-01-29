import Header from "../sections/Header";
import Main from "../sections/Main";
import Footer from "../sections/Footer";
import BookingForm from "../components/BookingForm";
import {useReducer} from "react";

export default function BookingPage() {
    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <Header></Header>
            <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes}></BookingForm>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}

export function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
    return state.filter(value => value !== action.value);
}