// import { useState, useEffect } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter(true);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
