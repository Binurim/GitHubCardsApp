import React, { useState } from "react";
import Form from "./FormComponent";
import FormFunctionalComp from "./FormComponent";
import CardList from "./CardListComponent";
import "./App.css";

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        {/* <Form onSubmit={this.addNewProfile} /> */}
        <FormFunctionalComp onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}


// Functional component for App
// const App = (props) => {
//   const [profiles, setProfiles] = useState([]);
//   const addNewProfile = (profileData) => {
//     setProfiles(() => [...profiles, profileData]);
//   };
//   return (
//     <div>
//       <div className="header">{props.title}</div>
//       {/* <Form onSubmit={this.addNewProfile} /> */}
//       <FormFunctionalComp onSubmit={addNewProfile} />
//       <CardList profiles={profiles} />
//     </div>
//   );
// };

export default App;
