import Header from "../sections/Header";
import Main from "../sections/Main";
import Footer from "../sections/Footer";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import About from "../components/About";

export default function Homepage() {
    return (
        <>
            <Header/>
            <Main>
                <Hero/>
                <Highlights/>
                <About/>
            </Main>
            <Footer/>
        </>
    );
}