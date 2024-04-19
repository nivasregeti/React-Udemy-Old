import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components//Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  //For every state change, this components gets executed.
  //Here whenever we click the button, we see 'APP RUNNING' in the
  //console i.e; App() is getting executed everytime when there is a
  //button click(here we're changing the state on the button click)

  console.log("APP RUNNING");

  // const toggleParagraphHandler = () => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // };
  // const toggleParagraphHandler = useCallback(() => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // }, []);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      {/*showParagraph*/}
      {/*false*/}
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}
export default App;
//if the parent component is re-evaluated then even if there's no change
//in the props, the child components will be re-evaluated

//so here, if the App() is re-executed, even there is no change in show
//prop of DemoOutput, the DemoOutPut will definetly gets executed

//So to avoid this, we have a thing called React.memo() which takes the
//component as the parameter and compares the latest props of the
//component with the ealier props. If the props change, the component
//gets re-evaluated if not it wouldn't Check DemoOutput.js,
//Button.js for eg

//But it has its own disadvantage as it has to store the current
//props and existing props (previous props)

//So, its suggested to use only on the desired components

//after observing both DemoOutput and Button, we see that memo is not
//applying for the button this is because in the above lines of code,
//for DemoOutput element, we are passing false (a bool value) as one
//of the props which is a primitive data type in js so, comparision of
//same value (something like props.show===props.previous.show) will be
//a false if there's no change but for Button element, we have a method
//as one of the props.
//In JS, a method is an object(instance type) so even if the values are
//same, the result will be false(props.show===props.previous.show).
//So, seems like the memo isn't applicable whenever there is an
//instance type as props.

//Fortunately, we can make react memo work for prop values as objects
//too. We just need to tweak the way we create and store the objects
//a little bit. There is a hook in react with which we can
//achieve this that is 'useCallback' hook

//useCallback is a hook that allows us to basically store a function
//across component executions. So that it allows us to tell React that
//we wanna save a function and that this function should not be
//recreated with every execution.
//With that one in the same function object is stored so one in the
//same place in memory and therefore the comparison does work.

//But there is one gotcha with these useCallback, as the functions
//in JS are closures, when using useCallback, the values of variables
//which are from outside of our function but used inside the function
//won't change i.e. even if there is a change in the value of variable
//somewhere outside of our function, the change will not reflect
//anywhere within our function when using useCallback.
//So, for this we need to add that variable as an dependency
//(the second parameter in useCallback)

//just like useCallback() is for functions, we have another hook(useMemo)
//which we can use(memoize(memo)) on any kind of data

//for eg, uncomment refer the below code and the code in DemoList.js

// import React, { useState, useCallback, useMemo } from "react";

// import "./App.css";
// import DemoList from "./components/Demo/DemoList";
// import Button from "./components/UI/Button/Button";

// function App() {
//   const [listTitle, setListTitle] = useState("My List");

//   const changeTitleHandler = useCallback(() => {
//     setListTitle("New Title");
//   }, []);

//   const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

//   return (
//     <div className="app">
//       <DemoList title={listTitle} items={listItems} />
//       <Button onClick={changeTitleHandler}>Change List Title</Button>
//     </div>
//   );
// }

// export default App;
