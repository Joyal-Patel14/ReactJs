import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// Class based About component
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent costructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount method called");
  }


  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About (Class)</h1>
        <h3>This is about page.</h3>
        <UserClass
          name={"Child 1 (Class)"}
          location={"Gandhinagar (Class)"}
          contact={"8980305509"}
        />

        <UserClass
          name={"Child 2 (Class)"}
          location={"Gandhinagar (Class)"}
          contact={"8980305509"}
        />
      </div>
    );
  }
}

// Function based About component
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h3>This is about page.</h3>
//       <User name={"Joyal (Functional)"}/>
//       <UserClass name={"Joyal (Class)"} location={"Gandhinagar (Class)"} contact={"8980305509"}/>
//     </div>
//   );
// };

export default About;
