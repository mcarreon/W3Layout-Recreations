import React, { Component } from 'react';

class RegistrationForm extends Component {
  // Uncomment for state handling
  // state = {
  //   firstName:"",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confPassword: ""
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
    
  //   if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.phone || !this.state.password || !this.state.confPassword) { 
  //     alert("Please fill out all fields");
  //   }
  //   else { 
  //     //save data 
  //   };

  //   this.setState({
  //     firstName:"",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //     confPassword: ""
  //   });

  // };
  
  render() {
    return (
      <div className="module-form jumbotron row d-flex w-100 flex-row align-items-stretch mt-5">
        <div className="col-lg-8 pl-5 pr-5 pb-5">
          <form className="container-fluid pl-0 pr-0">
            <h1 className="pt-5 register-title" style={{color: "#4CAF50"}}>Register Here</h1>
            <div className="row pl-3 pt-4" style={{color: "#FFF"}}>
              <div className="row w-100">
                <div className="col-sm-6">
                  <label>FIRST NAME</label>
                    <div className="input-container mb-4 mt-2">
                      <i className="material-icons d-inline icons">person</i>
                      <input className="mb-2 pl-3" placeholder="First Name" onChange={this.props.handleInputChange} name="firstName" value={this.props.firstName} id="first-input"></input>
                    </div>
                </div>
                <div className="col-sm-6">
                  <label>LAST NAME</label>
                    <div className="input-container mb-4 mt-2">
                      <i className="material-icons d-inline icons">person</i>
                      <input className="mb-2 pl-3" placeholder="Last Name" onChange={this.props.handleInputChange} name="lastName" value={this.props.lastName}id="last-input"></input>
                    </div>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-sm-6">
                  <label>EMAIL ADDRESS</label>
                    <div className="input-container mb-4 mt-2">
                      <i className="material-icons d-inline icons">email</i>
                      <input className="mb-2 pl-3" placeholder="Email Address" type="email" onChange={this.props.handleInputChange} name="email" value={this.props.email} id="email-input"></input>
                    </div>
                </div>
                <div className="col-sm-6">
                  <label>PHONE NUMBER</label>
                    <div className="input-container mb-4 mt-2">
                      <i className="material-icons d-inline icons">phone</i>
                      <input className="mb-2 pl-3" placeholder="Phone Number" type="phone" onChange={this.props.handleInputChange} name="phone" value={this.props.phone} id="phone-input"></input> 
                    </div>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-sm-6">
                  <label>PASSWORD</label>
                    <div className="input-container mb-4 mt-2">    
                      <i className="material-icons d-inline icons">lock</i>
                      <input className="mb-2 pl-3" placeholder="Password" type="password" onChange={this.props.handleInputChange}
                      name="password" value={this.props.password} id="pass-input"></input>
                    </div>  
                </div>
                <div className="col-sm-6">
                  <label>CONFIRM PASSWORD</label>
                  <div className="input-container mb-4 mt-2">
                    <i className="material-icons d-inline icons">lock</i>
                    <input className="mb-2 pl-3" placeholder="Confirm Password" type="password" onChange={this.props.handleInputChange} name="confPassword" value={this.props.confPassword}id="confPass-input"></input>
                  </div>
                </div>
              </div>
              <div className="row pl-3 mt-4 mb-3">
                  <input className="checkbox mr-3 mt-auto mb-auto block" type="checkbox" name="checkboxChecked" checked={this.props.checkboxChecked} onChange={this.props.handleCheckChange} onClick={this.props.toggleCheckbox} ></input><span className="conditions">I Agree To The Terms & Conditions</span>
                <button className="btn-register mt-4 btn" onClick={this.props.handleFormSubmit}>REGISTER NOW -></button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 pl-5 pr-5 pb-5 form-already-col justify-content-center d-flex flex-column pl-5 pr-5">
          <h2 className="form-already-title mt-5 mb-4">Already Registered?</h2>
          <p style={{color: "rgba(255, 255, 255, 0.75)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure est eum accusantium, aliquam sapiente error fuga voluptates repellendus ab commodi libero adipisci beatae similique illo amet officia incidunt aliquid!</p>
          <button className="btn-login btn mt-3 mb-5">LOGIN</button>
        </div>
      </div>
    );      
  }
}

export default RegistrationForm;
