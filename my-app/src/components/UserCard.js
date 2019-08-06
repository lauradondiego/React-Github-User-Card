import React from "react";
import { Card, Image } from "semantic-ui-react";

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <h1>Follower:</h1>
        <Image
          src={this.props.followers.avatar_url}
          width="150"
          wrapped
          ui={false}
        />
        <h2>{this.props.followers.login}</h2>
        <p> Type: {this.props.followers.type}</p>
        <p> ID: {this.props.followers.id}</p>
      </Card>
    );
  }
}
