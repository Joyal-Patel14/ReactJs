import React from "react";

class UserClass extends React.Component {
  // How to collect props in class based component
  constructor(props) {
    super(props);

    // Declaring state variables
    // For multiple state variable use same state object and define another one
    this.state = {
      userInfo: {
        name: "Dummy Name",
        type: "Dummy type",
        avatar_url: "dummy-photo",
      }
    };
  }

  async componentDidMount() {
    console.log("Child componentDidMount method called");

    // setting time interval
    this.timer = setInterval(() => {
      console.log("time interval in did mount");
    }, 1000);

  }

  // This will called after re-rendering component on changing state variable
  componentDidUpdate() {
    console.log("Child component did update");
  }

  // This will call before you move on next component and current component is unmounting
  componentWillUnmount() {
    clearInterval(this.timer); // Clearing the timer

    console.log("Child component will unmount");
  }

  render() {
    const { contact } = this.props;
    const { name, type, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Type: {type}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;


/**
 * 
 * ------ MOUNTING ------
 * 
 * constructor (dummy data)
 * render (dummy data)
 *    <HTML DUMMY>
 * componentDidMount()
 *    <API CALL>
 *    <this.setState> -> state variable is updated
 * 
 * 
 * ------- UPDATE --------
 * 
 * render (API data)
 *    <HTML API data>
 * componentDidUpdate()
 * 
 */