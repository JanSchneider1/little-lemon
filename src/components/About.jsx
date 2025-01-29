const promo1 = require("../images/Mario_and_Adrian_A.jpg");
const promo2 = require("../images/restaurant_chef_B.jpg");

export default function About() {
    return (
        <section id="about">
            <div id="hero-left">
                <h1>About us</h1>
                <h2>Little Lemon, Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
            </div>
            <img src={promo1} alt="Mario and Adrian 1"/>
            <img src={promo2} alt="Mario and Adrian 2"/>
        </section>
    );
}