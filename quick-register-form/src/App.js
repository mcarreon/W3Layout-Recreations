import React, { Component } from 'react';
import './App.css';
import RegistrationForm from "./components/Registration-Form"



class App extends Component {
  state = {
    firstName:"",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confPassword: "",
    checkboxChecked: false
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  toggleCheckbox = () => {
    this.setState({ checkboxChecked: !this.state.checkboxChecked});
  }

  handleCheckChange = event => {
    this.setState({ checkboxChecked: event.target.checked});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
    if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.phone || !this.state.password || !this.state.confPassword) { 
      alert("Please fill out all fields");
    }
    else if (!this.state.checkboxChecked) {
      alert("Please read Terms and Conditions");
    }
    else { 
      //save data 
      alert("Saved data");
    };

    this.setState({
      firstName:"",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confPassword: "",
      checkboxChecked: false
    });

  }
  
  
  
  render() {
    return (
      <div className="module-container d-flex justify-content-center align-items-center flex-column container">
        <div className="row w-100">
          <RegistrationForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          password={this.state.password}
          confPassword={this.state.confPassword}
          checkboxChecked={this.state.checkboxChecked}
          handleCheckChange={this.handleCheckChange}
          toggleCheckbox={this.toggleCheckbox} 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          />
        </div>
        <div className="footer mb-5">Design by W3Layouts | Redesign by Marlo Carreon</div>
      </div> 
    );
  }
}

export default App;
