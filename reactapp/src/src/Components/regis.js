import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../Components/regis.css'

export default function Register() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidFName, setIsValidFName] = useState(true);
  const [isValidLName, setIsValidLName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
   const navigate = useNavigate();

  const handleFNameChange = (e) => {
    setFName(e.target.value);
    setIsValidFName(true);
  };
  const handleLNameChange = (e) => {
    setLName(e.target.value);
    setIsValidLName(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsValidConfirmPassword(true);
  };

  const validateForm = () => {
    let isValid = true;
    if (fName.trim() === '') {
      setIsValidFName(false);
      isValid = false;
    }
    if (lName.trim() === '') {
      setIsValidLName(false);
      isValid = false;
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setIsValidEmail(false);
      isValid = false;
    }
    if (password.length < 8) {
      setIsValidPassword(false);
      isValid = false;
    }
    if (confirmPassword !== password) {
      setIsValidConfirmPassword(false);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {

      alert('Registration successful!');
    }
  };

  const fNameInputStyle = {
    borderColor: isValidFName ? 'green' : 'red'
  };
  const lNameInputStyle = {
    borderColor: isValidLName ? 'green' : 'red'
  };

  const emailInputStyle = {
    borderColor: isValidEmail ? 'green' : 'red'
  };

  const passwordInputStyle = {
    borderColor: isValidPassword ? 'green' : 'red'
  };

  const confirmPasswordInputStyle = {
    borderColor: isValidConfirmPassword ? 'green' : 'red'
  };
  return (
    <>
    {/* <div class="split left">

</div>
  <div class="split right">
 
    <div class="container">
      <h1 class="form-title">Registration</h1>
      <form action="#"onSubmit={handleSubmit}>
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="fullName">FullName</label>
            <input type="text"
                    id="fullName"
                    placeholder="Enter FullName" onChange={handleFullNameChange}style={fullNameInputStyle}/>
                    {!isValidFullName && <p>Please enter your full name.</p>}
          </div>
          <div class="user-input-box">
            <label for="username">Address</label>
            <input type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Address"/>
          </div>
          <div class="user-input-box">
            <label for="email">Email</label>
            <input type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"onChange={handleEmailChange}
                    style={emailInputStyle}
                  />
                  {!isValidEmail && <p>Please enter a valid email address.</p>}
          </div>
          <div class="user-input-box">
            <label for="phoneNumber">Phone Number</label>
            <input type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"/>
          </div>
          <div class="user-input-box">
            <label for="text">Password</label>
            <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handlePasswordChange}
          style={passwordInputStyle}
        />
        {!isValidPassword && <p>Password should be at least 8 characters long.</p>}
      </div>
          </div>
          <div class="user-input-box">
            <label for="confirmPassword">Confirm Password</label>
            <input type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleConfirmPasswordChange}
          style={confirmPasswordInputStyle}
        />
        {!isValidConfirmPassword && <p>Passwords do not match.</p>}
        </div>
        <div class="form-submit-btn">
          <input type="submit" value="Register"/>
        </div>
        <div class="sign_in">
        You Have an Account?<Link to="/form">Signin</Link> 
      </div>
      </form>
    </div>
    </div> */}
    <div class="wrapper" >
<div class="inner">
<div class="image-holder">
<img src="https://media.istockphoto.com/id/1128916464/photo/register-now-concept.jpg?s=612x612&w=0&k=20&c=vLIAncKa0m56VQw3AumTkwiAehVWJdZ4PIFUSh-C2qc=" alt="image"/>
</div>
<form action="">
<h3>Registration Form</h3>
<div class="form-group">
<input type="text" placeholder="First Name" class="form-control" onChange={handleFNameChange}style={fNameInputStyle}/>
                    {!isValidFName && <p>Please enter your full name.</p>}
<input type="text" placeholder="Last Name" class="form-control"
onChange={handleLNameChange}style={lNameInputStyle}/>
{!isValidLName && <p>Please enter your full name.</p>}
</div>
<div class="form-wrapper">
<input type="text" placeholder="Username" class="form-control"/>
 
</div>
<div class="form-wrapper">
<input type="text" placeholder="Email Address" class="form-control"onChange={handleEmailChange}
                    style={emailInputStyle}
                  />
                  {!isValidEmail && <p>Please enter a valid email address.</p>}
 
</div>
<div class="form-wrapper">
<input type="password" placeholder="Password" class="form-control"onChange={handlePasswordChange}
          style={passwordInputStyle}
        />
        {!isValidPassword && <p>Password should be at least 8 characters long.</p>}
 
</div>
<div class="form-wrapper">
<input type="password" placeholder="Confirm Password" class="form-control"  onChange={handleConfirmPasswordChange}
          style={confirmPasswordInputStyle}
        />
        {!isValidConfirmPassword && <p>Passwords do not match.</p>}
 
</div>
<Link to="/form"><button onClick={handleSubmit}>Register
 
</button>
</Link>
</form>
</div>
</div>

    </>
  )
}
