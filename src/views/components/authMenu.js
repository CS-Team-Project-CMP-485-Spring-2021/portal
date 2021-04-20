import React from 'react';
import { withRouter, Link } from "react-router-dom";

const AuthMenu = withRouter(
    ({ history, auth, logout }) => auth ? (
        <div className="top-menu col-xs-12">
            <button
                onClick={() => {
                    logout();
                    history.push("/");
                }}
            >
                Sign out
            </button>

        </div>
    ) : (
        <div className="top-menu sign_bar col-xs-12">

            <Link className="menu" to={{pathname: '/signup'}}>
                Sign Up
            </Link>

            &nbsp;&nbsp;

            <Link className="menu" to={{pathname: '/login', state: { from: window.location.pathname }}}>
                Sign In
            </Link>
        </div>
    )
);

export default AuthMenu;