export default function Card({itemName, itemPrice, itemDescription, img}) {
    return (
        <article className="card">
            <img src={img} alt="food"/>
            <div style={{width: "96%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h3>{itemName}</h3>
                <span>{itemPrice}</span>
            </div>
            <p style={{padding: "0 2% 0 2%"}}>{itemDescription}</p>
            <a className="linkButton" href="/booking">Order a delivery</a>
        </article>
    );
}