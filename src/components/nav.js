import world from "./images/worldicon.svg";

export default function Nav() {
    return(
        <nav className="nav">
            <img src={world} alt="" />
            <div className="nav_text">
                <span>my travel journal.</span>
            </div>
        </nav>
    )
}