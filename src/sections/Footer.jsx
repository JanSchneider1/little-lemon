const logo = require("../images/Logo.svg");

export default function Footer() {
    return (
        <footer>
            <img src={logo.default} alt="Little Lemon"/>
            <div>
                <p style={{fontWeight: "bold"}}>Doormat Navigation</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/booking">About</a></li>
                    <li><a href="/booking">Menu</a></li>
                    <li><a href="/booking">Reservations</a></li>
                    <li><a href="/booking">Order Online</a></li>
                    <li><a href="/booking">About</a></li>
                </ul>
            </div>
            <div>
                <p style={{fontWeight: "bold"}}>Contact</p>
                <ul>
                    <li>Roosevelt Rd 412</li>
                    <li>Chicago</li>
                    <li>little.lemon@fakemail.com</li>
                    <li>Tel. 0000 00000000</li>
                </ul>
            </div>
            <div>
                <p style={{fontWeight: "bold"}}>Social Media Links</p>
                <ul>
                    <li><a href="/booking">Facebook</a></li>
                    <li><a href="/booking">Instagram</a></li>
                    <li><a href="/booking">Whatsapp</a></li>
                </ul>
            </div>
        </footer>
    );
}