import Nav from "./Nav";

const logo = require("../images/Logo.svg");

export default function Header() {
    return (
        <header>
            <img src={logo.default} alt="Little Lemon"/>
            <Nav/>
        </header>
    );
}