import Header from "../sections/Header";
import Main from "../sections/Main";
import Footer from "../sections/Footer";
import BookingForm from "../components/BookingForm";
import {useReducer} from "react";
import {useNavigate} from "react-router";
import {bookTable, initializeTimes, updateTimes} from "../services/BookingService";
import greek_salad from "../images/greek_salad.jpg";

export default function BookingPage() {
    const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes(new Date()));

    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <Main>
                <section id="hero">
                    <BookingForm availableTimes={availableTimes}
                                 updateAvailableTimes={updateAvailableTimes}
                                 submitForm={(data) => submitForm(data, navigate)}
                    />
                    <img src={greek_salad} alt="greek_salat"/>
                </section>
            </Main>
            <Footer/>
        </>
    );
}

function submitForm(data, navigate) {
    if (bookTable(data) === true) {
        navigate("/booking-confirmation");
        return;
    }
    alert("An error occurred we're sorry for the inconvenience.")
}