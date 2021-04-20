import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from "react-router-dom";

import AuthMenu from '../views/components/authMenu';
import Login from '../views/Login';
import About from '../views/About';
import Admin from '../views/Admin';
import Patient from '../views/Patient';
import Doctor from '../views/Doctor';
import Signup from "../views/Signup";
//PrivateRoute Login
function PrivateRoute({ children, auth, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
//close PrivateRoute Login
function Routes(props) {
    const {
        auth,
        logout,
        login
    } = props;
    return (
        <Router>
            <div>
                {/*NAV*/}
                <nav className="navbar fixed-top container-fluid">
                    <div className="row">
                        <AuthMenu auth={auth} logout={logout}/>
                    </div>
                </nav>
                {/*CLOSE NAV*/}
                <Switch>
                    <Route exact path="/">
                        <Login login={login} auth={auth}/>
                    </Route>
                    <Route exact path="/login">
                        <Login login={login} auth={auth}/>
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <PrivateRoute auth = {auth} exact path="/doctor">
                        <Doctor />
                    </PrivateRoute>
                    <PrivateRoute auth = {auth} exact path="/patient">
                        <Patient />
                    </PrivateRoute>
                    <PrivateRoute auth = {auth} exact path="/admin">
                        <Admin />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>

    );
}

export default Routes;