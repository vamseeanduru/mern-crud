import React from "react";
import Homepage from "../components/Homepage";
import { withAuth0 } from "@auth0/auth0-react";
import Main from "../components/Main/Main";



class Home extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (isAuthenticated ? <Main /> : <Homepage />);
  }
}

export default withAuth0(Home);
