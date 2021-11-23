import React from "react"
import MainContent from "./MainContent"
import NavbarLeft from "./NavbarLeft"
import "../App.css"

function MainContainer() {
    return (
        <div className="MainContainer">
            <NavbarLeft />
            <MainContent />
        </div>
    )
}

export default MainContainer