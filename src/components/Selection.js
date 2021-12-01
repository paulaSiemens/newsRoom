import { useEffect, useState } from "react";
import Parse from "parse";


export function Selection() {
  const [selection, setSelection] = useState();

  useEffect(() => {
    const Idea = Parse.Object.extend("Idea");
    const query = new Parse.Query(Idea);

    const ideas = query.find().then((ideas) => {
      console.log(ideas);
      setSelection(ideas);
    });
  }, []);

  if (!selection) {
    return <p>Loading...</p>;
  }

  return (
    <>
       <br />
      <h1>Selection</h1>
      <br />
      <br />
      <ul>
      {selection.map((idea, i) => (
       <li key={i}><img src={ idea.get("image").url()} alt="illustration expressing the idea"  /><br/><b>{idea.get("title")}</b><br/>{idea.get("description")}<hr/></li>
      ))}
      </ul>
    </>
  );
}
