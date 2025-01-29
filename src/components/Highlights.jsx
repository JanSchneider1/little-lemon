import Card from "./Card";

const food = require("../images/lemon_dessert.jpg");

export default function Highlights() {
    return (
        <section id="highlights">
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1>Specials</h1>
                <a className="linkButton" style={{height: "20%"}} href="/booking">Online Menu</a>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", gap: "2.5vw"}}>
                <Card img={food}
                      itemName="Cheese Cake"
                      itemPrice="5.50$"
                      itemDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."/>
                <Card img={food}
                      itemName="Lemon Cake"
                      itemPrice="6.50$"
                      itemDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."/>
                <Card img={food}
                      itemName="Tiramisu"
                      itemPrice="7.00$"
                      itemDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."/>
            </div>
        </section>
    );
}