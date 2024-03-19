import React from "react";

class UserClass extends React.Component {
  // How to collect props in class based component
  constructor(props) {
    super(props);

    // Declaring state variables
    this.state = {
      count: 0,
    };

    console.log(props); // props object
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>

        <button onClick={() => {
          // this.state.count = this.state.count + 1; // NEVER UPDATE STATE VARIABLE DIRECTLY

          this.setState({
            count: this.state.count + 1,
          });

        }}>Count Increase</button>
        
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
