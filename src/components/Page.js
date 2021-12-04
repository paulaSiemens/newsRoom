import React from "react";

export default function Page(){

    return (
        <div className="page" >
            <Header />
            <main>
                <SideNav />
                //page logic
                <SubmitIdea />
                <Selecton />
                <Assigned />
                <Submitted />
                <Archived />
            </main>
            <Footer />
        </div>
    )}