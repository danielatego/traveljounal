import loc from "./images/location.svg";
export default function Card({image,country, attraction,date,desc}) {
    return(
        <div className="card">
            <img src={image} alt="" />
            <div className="card_text">
                <div className="cardRow1">
                    <img src={loc} alt="" />
                    <span className="text1">
                        {country}
                    </span>
                    <span className="text2">
                        View on Google Maps
                    </span>
                </div>
                <div className="cardRow2">
                    <span>
                        {attraction}
                    </span>
                </div>
                <div className="cardRow3">
                    <span>
                        {date}
                    </span>
                </div>
                <div className="cardRow4">
                    {desc}
                </div>
            </div>
        </div>
    )
    
}