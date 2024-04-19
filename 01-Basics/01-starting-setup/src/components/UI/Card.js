import "./Card.css";

function Card(props) {
  //to add any outside class(here expense-item in ExpenseItem.js), we need to add this props.className
  const classes = "card " + props.className;
  //children here is a reserved name and its value will always
  //be the content between the openinn and closing tags of your custom components(here 'Card')
  return <div className={classes}>{props.children}</div>;
}

export default Card;
