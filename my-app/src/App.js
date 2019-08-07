import React from "react";
import "./App.css";
import { Card, Image } from "semantic-ui-react";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: "",
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  // handleUserChange = e => {
  //   this.setState({ followers: e.target.value });
  // };

  fetchUser = () => {
    fetch(`https://api.github.com/users/lauradondiego`)
      .then(response => {
        // first promise resolution is used to format the data.
        return response.json();
      })
      .then(response => {
        // secon promise resolution is where you set the data.

        console.log("working", response);
        this.setState({
          // users: response,
          // bio: response.bio,
          // name: response.name
          users: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/lauradondiego/followers`)
      .then(response => {
        // first promise resolution is used to format the data.
        return response.json();
      })
      .then(response => {
        console.log("followers", response);
        this.setState({
          followers: response
        });
      });
  };

  render() {
    return (
      <Card className="laura">
        <h1 className="header">My GitHub Info</h1>
        <Image
          src={this.state.users.avatar_url}
          width="150"
          wrapped
          ui={false}
        />
        <h2>{this.state.users.name}</h2>
        <p>Bio: {this.state.users.bio}</p>
        <p>Location: {this.state.users.location}</p>
        <p>So Many Followers: {this.state.users.followers}</p>

        {this.state.followers.map(follower => (
          <UserCard followers={follower} />
        ))}
      </Card>
    );
  }
}

export default App;
