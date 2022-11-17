import Header from "../components/Header";
import Content from "../components/Content";
import Card from "../components/Card";
import Button from "../components/Button";
import {useState} from "react";


const vocabularies = [
  {
    word: "knotty",
    part_of_speech: "Adjective",
    definition:
      "(of a problem or difficulty) complicated and difficult to solve.",
    example: "It was a very knotty problem.",
  },
  {
    word: "cantrip",
    part_of_speech: "Noun",
    definition: "a magic spell; trick by sorcery.",
    example:
      "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
  },
  {
    word: "traverse",
    part_of_speech: "Verb",
    definition: "to pass or move over, along, or through.",
    example: "Stanley traversed the continent from west to east.",
  },
  {
    word: "peculiar",
    part_of_speech: "Adjective",
    definition: "different to what is normal or expected; strange.",
    example: "He gave her some very peculiar looks.",
  },
];

function FlashCard() {

  const [openExample, setOpenExample] = useState ([]);


  const handleStarClick = (event) => { };

  const handleExampleClick = (list_of_example) => {
    console.log(openExample);
    console.log("openExample[0]", openExample[0]);
    console.log("openExample[1]", openExample[1]);
    console.log("openExample[2]", openExample[2]);
    console.log("openExample[3]", openExample[3]);
    setOpenExample(list_of_example);
  };

//  const handleExampleClick_ver2 = (input) => {

    // console.log(input);
//    let current = openExample; // 拿點名表
//    console.log(current[input]);
//    if (current[input] === true) {
//      current[input] = false; // 點名

//    }
//    else {
//      current[input] = true; // 點名

//    }
    /* openExample = current; */ //setOpenExample(current);  // 還給老師

//    console.log(openExample);

//  };

  return (
    <div>
      <Header title={"My Flash Card."} />
      {vocabularies.map((v, index) => { 
   
          
          // event => handleExampleClick_ver2(v.word);
        return (
        <div className="card" key={index}>
          <Card word={v.word}
            part_of_speech={v.part_of_speech}
            definition={v.definition}
          />
          <Button className="example-button" text="Example" onClick={
            event => handleExampleClick([v.example])

           }
          />
          {/* <span>{openExample[index]}</span> */}
          <span>openExample[{index}]: {openExample[index]}</span>

        </div>
        ); })

      }
    </div>
  );
}



export default FlashCard;