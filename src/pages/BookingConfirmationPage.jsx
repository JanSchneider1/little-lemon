import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Main from "../sections/Main";

export default function BookingConfirmationPage() {

    return (
        <>
            <Header/>
            <Main>
                <p style={{textAlign: "center", fontSize: "3rem"}}>
                    Your table reservation was successful!
                </p>
            </Main>
            <Footer/>
        </>
    );
}