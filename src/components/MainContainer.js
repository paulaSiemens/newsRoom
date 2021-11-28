import React from "react"
import MainContent from "./MainContent"
import "../App.css"
import SideNav from "./SideNav"

export default function MainContainer() {
    return (
        <div className="MainContainer">
            <SideNav />
            <MainContent />
        </div>
    )}