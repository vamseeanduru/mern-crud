import React from "react";
import AuthNav from "./auth-nav";


class Homepage extends React.Component {

  render() {
    return (
      <div className="text-center">
        <h1 className="mb-4" style={{marginTop:"10%"}}>Welcome to ABS</h1>
        <AuthNav />
      </div>
    );
  }
}

export default Homepage;
