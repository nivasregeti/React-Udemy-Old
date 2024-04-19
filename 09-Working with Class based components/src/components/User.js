import { Component } from "react";
import classes from "./User.module.css";

//unlike functional components, we can't directly use props so instead of that we use 'Component' and then have to use this.props wherever we want
class User extends Component {
  componentWillUnmount() {
    console.log("User will  unmount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
