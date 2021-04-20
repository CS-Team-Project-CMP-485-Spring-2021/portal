import logo from './logo.svg';
import React from 'react';
import './App.css';
import Routes from './routes/routes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      name: "Pat"
    }

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  login (name,password,user){
    console.log("hi",this.state.auth);
    console.log("Patient,",this.state.name);
    console.log("name,password,user",name);

  }

  logout (){
    localStorage.clear();
    console.log("Bye",this.state.auth);
  }

  render() {
    return (
        <Routes
            auth={this.state.auth}
            logout={this.logout}
            login={this.login}
        />
        /*<span>test</span>*/
    );
  }
}

export default App;
