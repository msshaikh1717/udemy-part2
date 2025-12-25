import { useState } from "react";

/*
function AppChallenge1() {
  const [expanded1, setExpanded1] = useState(false);
  const str1 = `Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible.`;
  const arr1 = str1.split(" ");

  const [expanded2, setExpanded2] = useState(false);
  const str2 = `Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international space organizations. And while it's not always easy (or cheap), the results are out of this world. Think about the first time humans stepped foot on the moon or when rovers were sent to roam around on Mars.`;
  const arr2 = str2.split(" ");

  const [expanded3, setExpanded3] = useState(true);
  const str3 = `Space missions have given us incredible insights into our universe and have inspired future generations to keep reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!`;
  const arr3 = str3.split(" ");

  return (
    <div>
      <TextExpander>
        {expanded1 ? str1 : arr1.slice(0, -30).join(" ")}
        <span
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => setExpanded1((exp) => !exp)}
        >
          {!expanded1 ? "Show More" : "Show Less"}
        </span>
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        {" "}
        {expanded2 ? str2 : arr2.slice(0, -30).join(" ")}
        <span
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => setExpanded2((exp) => !exp)}
        >
          {!expanded2 ? "Show More" : "Show Less"}
        </span>
      </TextExpander>

      <TextExpander
        expanded={true}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "7px",
          backgroundColor: "#f7f7f7",
        }}
      >
        {expanded3 ? str3 : arr3.slice(0, -30).join(" ")}
        <span
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => setExpanded3((exp) => !exp)}
        >
          {!expanded3 ? "Show More" : "Show Less"}
        </span>
      </TextExpander>
    </div>
  );
}

export default AppChallenge1;
*/

function AppChallenge1() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

export default AppChallenge1;

function TextExpander({
  children,
  expanded = false,
  collapsedNumWords = 15,
  expandButtonText = "Show text",
  collapseButtonText = "Show less",
  buttonColor = "black",
}) {
  const [extended, setExtended] = useState(expanded);
  return (
    <div>
      {extended ? children : children.split(" ").slice(0, -30).join(" ")}
      <button onClick={() => setExtended((ex) => !ex)}>
        {extended ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
