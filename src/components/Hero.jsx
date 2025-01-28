
const restaurantFood = require("../images/restaurantfood.jpg");

export default function Hero() {
    return (
        <section id="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a table</button>
            </div>
            <img src={restaurantFood} alt="restauranfood"/>
        </section>
    );
}