import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loading } from "./components";
import { Home } from "./views";
import { withAuth0 } from "@auth0/auth0-react";
import CreateCustomer from "./components/createcustomer/CreateCustomer";
import CreateUser from "./components/createuser/CreateUser";
import CreateApp from "./components/createapp/CreateApp";
import CreateAppVersion from "./components/createappversion/CreateAppVersion";
import CreateEnvironment from "./components/createEnvironment/CreateEnvironment";
import CreateCustomerEnvironment from "./components/createCustomerEnvironemnt/CreateCustomerEnvironment";
import CreateCustomerApp from "./components/createCustomerApp/CreateCustomerApp";
import LogoutPage from "./components/LogoutPage";
import GetCustomers from "./components/getcustomers/GetCustomers";
import GetApp from "./components/getapp/GetApp";
import GetEnvironment from "./components/getenvironment/GetEnvironment";
import GetUser from "./components/getuser/GetUser";
import "./app.css";

class App extends React.Component {
  render() {
    const { isLoading } = this.props.auth0;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div id="app">
        <div>
          <div>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/createcustomer"><CreateCustomer /></Route>
              <Route path="/createuser"><CreateUser /></Route>
              <Route path="/createapp"><CreateApp /></Route>
              <Route path="/createappversion"><CreateAppVersion /></Route>
              <Route path="/createenvironment"><CreateEnvironment /></Route>
              <Route path="/createcustomerenvironment"><CreateCustomerEnvironment /></Route>
              <Route path="/createcustomerapp"><CreateCustomerApp /></Route>
              <Route path="/logoutpage"><LogoutPage /></Route>
              <Route path="/getcustomers"><GetCustomers /></Route>
              <Route path="/getapp"><GetApp /></Route>
              <Route path="/getenvironment"><GetEnvironment /></Route>
              <Route path="/getuser"><GetUser /></Route>
            </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth0(App);
