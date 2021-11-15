import { useEffect, useState } from "react";
import Parse from "parse";

export function Ideas() {


    useEffect(() => {

        const Idea = Parse.Object.extend("Idea");
        const query = new Parse.Query(Idea);

        const ideas = query.find().then((ideas) => {
            console.log(ideas);
        });

        }, []); 

    return (<>Selection
    </>);
}