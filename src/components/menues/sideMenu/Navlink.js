import { Link } from "react-router-dom";

export default function navlink(p){
    return (
    <Link className="navbar-link" to={`/${p.link}`} >
        <img className="navbar-img" src={p.icon} />
        {p.linkName}
    </Link>
    )}