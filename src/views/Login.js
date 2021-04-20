import React from 'react';

import {  Redirect, withRouter, Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            user:'',
            redirectToReferrer: true
        };
        console.log('this.props',props);
        this.login = this.login.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(
            { [name]: value },
            () => console.log('state ',{...this.state})
        );
    }

    handleUserChange(event) {
        this.setState({username: event.target.value});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value});
    }


    login (event) {
        console.log('this', this.props);
        //this.setState({ redirectToReferrer: true });
        this.setState({ redirectToReferrer: true}, () => {
            console.log('redirectToReferrer :', this.state.redirectToReferrer);
            this.props.login(this.state.username,this.state.password,this.state);
        });

    };

    componentDidMount() {
        console.log('true', localStorage);
        if(localStorage.getItem('loggedIn') === 'true' ){
            console.log('true', 'its true');
            this.setState({ redirectToReferrer: true });
        }
    }

    render() {

        //let  from  = this.props.location.state.from.pathname ||  "/"  ;
        let  from  =   "/"  ;
        let {auth} = this.props;


        console.log('from1', from );
        let { redirectToReferrer } = this.state;
        console.log('rprops ', this.props);

        console.log('redirectToReferrer1', redirectToReferrer );

        if (auth === true) return <Redirect to={from} />;




        console.log('from: ',from);
        /*
            console.log('this.state.username: ',this.state.username);
            console.log('this.state.password: ',this.state.password);
              */
        return (
            <div className="container-fluid">
                <div className="row section1">
                    <div
                        className="form-header text-center col-md-4 col-md-offset-4 col-sm-12"
                    >
                       Patient Portal
                    </div>
                </div>
                <div className="row section1">
                    <form
                        id="signin-form"
                          className="text-center col-md-4 col-md-offset-4 col-sm-offset-2 col-sm-8  col-xs-offset-1 col-xs-10"
                          onSubmit={e => e.preventDefault()}
                    >
                        <h3>Welcome</h3>
                        <div className="form-group">
                            <input
                                onChange={this.handleChange}
                                type="email"
                                name="Eamil"
                                className="form-control"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.handleChange}
                                type="password"
                                name="Password"
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div onChange={this.handleChange} className="form-group">
                            <input type="radio" value="Patient" name="user" /> Patient
                            <input type="radio" value="Doctor" name="user" /> Doctor
                            <input type="radio" value="Admin" name="user" /> Admin
                        </div>
                        <div className="form-group mt-5">
                            <button className="sign-button" onClick={this.login}>Sign In</button>
                        </div>

                        <div className="col-md-12 mt-3">
                            <div className="form-group seperate-bar" />
                        </div>
                        <div className="form-group">
                            <h4>Don't have an account?</h4>
                            <h4>
                                <Link className="menu" to={{pathname: '/signup'}}>
                                    Sign Up
                                </Link>

                            </h4>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
