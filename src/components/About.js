import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About (Class)</h1>
        <h3>This is about page.</h3>
        <UserClass
          name={"Joyal (Class)"}
          location={"Gandhinagar (Class)"}
          contact={"8980305509"}
        />
      </div>
    );
  }
}

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
