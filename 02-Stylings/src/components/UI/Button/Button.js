//styled components and css modules both are used to have a unique classes so that the css classes that we are using in this particular js don't get conflicted with any other css file having same class names
//both these libraries creates unique classes based on the existing classes that way there won't be any conflict

/********************using styled components**************/
// import styled from "styled-components";

// //using styled components
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `; //tags template literal => whatever we pass inside the backticks will kinda-of passed into the 'button' method

// // const Button = props => {
// //   return (
// //     <button type={props.type} className="button" onClick={props.onClick}>
// //       {props.children}
// //     </button>
// //   );
// // };

// export default Button;

/**************using CSS modules***************/
//we have to rename our .css as .module.css
import React from "react";
import styles from "./Button.module.css";
//instead of diurectly importing the css file, we import an object (here we named it as styles) and use this object to get every class in the css file

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
