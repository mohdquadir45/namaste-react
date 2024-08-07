import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <>
//       <User name={" my name is Mohammed (functional component) "} />
//       <UserClass
//         name={" Hello I am class based component 😍"}
//         location={"pune camp near azam campus"}
//       />
//     </>
//   );
//companies number
//8097574965
//6352254832
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
  }
  componentDidMount() {
      console.log("Parant componentDidMount");
      // Api calling
  }

  render() {
    console.log("Parent Render called ");
    return (
      <>
        <UserClass
          name={" Hello I am class based component 😍"}
          location={"pune camp near azam campus"}
        />
        <User name={" my name is Mohammed (functional component) "} />
      </>
    );
  }
}
export default About;
