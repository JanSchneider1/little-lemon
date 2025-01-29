const restaurantFood = require("../images/restaurantfood.jpg");

export default function Hero() {
    return (
        <section id="hero">
            <div id="hero-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a className="linkButton" href="/booking">Reserve a Table</a>
            </div>
            <img src={restaurantFood} alt="restauranfood"/>
        </section>
    );
}