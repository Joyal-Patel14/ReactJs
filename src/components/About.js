import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// Class based About component
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log("Parent componentDidMount method called");
  }

  componentDidUpdate(prevProps, prevState) {
    // // how to handle dependency in class based component ([count])
    // if (this.state.count !== prevState.count) {
    //   // CODE
    // }
  }

  render() {
    return (
      <div>
        <h1>About (Class)</h1>
        <h3>This is about page.</h3>
        <div>
          Loggedin User: 
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass contact={"8980305509"}/>
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
