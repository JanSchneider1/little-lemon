import Header from "../sections/Header";
import Main from "../sections/Main";
import Footer from "../sections/Footer";
import Hero from "../components/Hero";

export default function Homepage() {
    return (
        <>
            <Header/>
            <Main>
                <Hero/>
            </Main>
            <Footer/>
        </>
    );
}