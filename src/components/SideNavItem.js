import { Nav, Image } from "react-bootstrap";
import "./SideNav.css";

export default function SideNavItem(p){

    return (
        <Nav.Link id="nav-item" href={p.link}>
            <Image src = {p.img}></Image>
            <p className="navlink-pagetxt">{p.linktxt}</p>
        </Nav.Link>
        )}