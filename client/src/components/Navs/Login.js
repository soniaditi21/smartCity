import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import {
  authenticateSignup,
  authenticateLogin,
  authenticateAdmin,
} from "../../service/api";
import { Link } from "react-router-dom";
import "./Login.css";

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to our content",
  },
  signup: {
    view: "signup",
    heading: "SignUp",
    subHeading: "Looks like, You are new here!",
  },
  admin: {
    view: "admin",
    heading: "Admin Login",
    subHeading: "Login as Admin..",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};
const adminInitialValues = {
  username: "",
  password: "",
  image: "",
};

const Login = ({ open, setOpen, setAccount }) => {
  const [account, toggleAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [admin, setAdmin] = useState(adminInitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup);
  };
  const toggleAdminAccount = () => {
    toggleAccount(initialValue.admin);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  const adminLogin = async () => {
    let response = await authenticateAdmin(admin);
    if (!response) return;
    handleClose();
    setAccount(admin.username);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      setError(true);
      return;
    }
    handleClose();
    setAccount(login.username);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onAdminChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const switchToLogin = () => {
    toggleAccount(initialValue.login);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff, #c3bfc9, #8e8294, #5f4960, #34142e)",
          padding: 0,
          overflow: "hidden",
        }}
      >
        <Box>
          {account.view === "login" ? (
            <Box style={{ display: "flex" }}>
              <Box style={{ width: "40%" }}>
                <img
                  width="100%"
                  height="100%"
                  src="https://media.istockphoto.com/photos/login-and-password-cyber-security-concept-data-protection-and-secured-picture-id1271787791?k=20&m=1271787791&s=612x612&w=0&h=RcMVeM61cefDIdxdgiZJjhVcnTsaHqqcO6Cc3gkb9lc="
                  style={{ borderRadius: "1px" }}
                  alt=""
                />
              </Box>
              <Box style={{ margin: "2%", width: "60%" }}>
                <Box>
                  <Typography style={{ fontSize: "29px" }}>
                    {account.heading}
                  </Typography>
                  <Typography style={{ fontSize: "18px" }}>
                    {account.subHeading}
                  </Typography>
                </Box>
                <TextField
                  style={{ width: "100%" }}
                  onChange={(e) => onValueChange(e)}
                  name="username"
                  label="Enter Username"
                  autoComplete="off"
                />
                <TextField
                  style={{ width: "100%", marginTop: "5%", padding: "1%" }}
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  label="Enter Password"
                  autoComplete="off"
                />
                {error && (
                  <Typography style={{ color: "red", fontSize: 14 }}>
                    Invalid Username or Password
                  </Typography>
                )}
                <button onClick={() => loginUser()} className="loginDialogBtn">
                  Login
                </button>

                <Box className="createNewAccount">
                  <Typography onClick={() => toggleUserAccount()} className='typoLink'> New User, Create an Account </Typography>
                  <Typography className='orBtn'>Or</Typography>
                  <Typography  onClick={() => toggleAdminAccount()} className='typoLink'>Login as Admin</Typography>
                </Box>

              
              </Box>
            </Box>
          ) : account.view === "signup" ? (
            <Box style={{ display: "flex" }}>
              <Box style={{ width: "40%" }}>
                <img
                  width="100%"
                  height="100%"
                  src="https://media.istockphoto.com/photos/login-and-password-cyber-security-concept-data-protection-and-secured-picture-id1271787791?k=20&m=1271787791&s=612x612&w=0&h=RcMVeM61cefDIdxdgiZJjhVcnTsaHqqcO6Cc3gkb9lc="
                  style={{ borderRadius: "1px" }}
                  alt=""
                />
              </Box>
              <Box style={{ width: "60%", margin: "1%" }}>
                <Box>
                  <Typography style={{ fontSize: "29px" }}>
                    {account.heading}
                  </Typography>
                  <Typography style={{ fontSize: "18px" }}>
                    {account.subHeading}
                  </Typography>
                </Box>
                <Box className="inputRootContainer">
                  <Box>
                    <TextField
                    className='textfields'
                      onChange={(e) => onInputChange(e)}
                      id="standard-basic"
                      variant="standard"
                      name="firstname"
                      label="Enter Firstname"
                      autoComplete="off"
                    />
                  </Box>
                  <Box>
                    <TextField
                    className='textfields'
                      onChange={(e) => onInputChange(e)}
                      id="standard-basic"
                      variant="standard"
                      name="lastname"
                      label="Enter Lastname"
                      autoComplete="off"
                    />
                  </Box>
                  <Box>
                    <TextField
                    className='textfields'
                      onChange={(e) => onInputChange(e)}
                      id="standard-basic"
                      variant="standard"
                      name="username"
                      label="Enter Username"
                      autoComplete="off"
                    />
                  </Box>
                  <Box>
                    <TextField
                    className='textfields'
                      onChange={(e) => onInputChange(e)}
                      id="standard-basic"
                      variant="standard"
                      name="email"
                      label="Enter Email"
                      autoComplete="off"
                    />
                  </Box>
                  <Box>
                    <TextField
                    className='textfields'
                      onChange={(e) => onInputChange(e)}
                      id="standard-basic"
                      variant="standard"
                      name="password"
                      label="Create Password"
                      autoComplete="off"
                    />
                  </Box>
                  <Box>
                    <TextField
                    className='textfields'
                      onChange={(e) => onInputChange(e)}
                      id="standard-basic"
                      variant="standard"
                      name="phone"
                      label="Enter Phone Number"
                      autoComplete="off"
                    />
                  </Box>
                  </Box>
                  <button
                    variant="contained"
                    onClick={() => signupUser()}
                    className='signUpDialogBtn'
                    style={{marginTop: '10%'}}
                  >
                    Sign Up
                  </button>
                 
                 <Box className='alreadyhaveanaccount'>
                   <Typography onClick={() => switchToLogin()} className='typoLink'>Already Have an account? Login...</Typography>
                 </Box>
              </Box>
            </Box>
          ) : (
            <Box style={{ display: "flex" }}>
            <Box style={{ width: "40%" }}>
              <img
                width="100%"
                height="100%"
                src="https://media.istockphoto.com/photos/login-and-password-cyber-security-concept-data-protection-and-secured-picture-id1271787791?k=20&m=1271787791&s=612x612&w=0&h=RcMVeM61cefDIdxdgiZJjhVcnTsaHqqcO6Cc3gkb9lc="
                style={{ borderRadius: "1px" }}
                alt=""
              />
            </Box>
 
             <Box style={{ width: "40%",margin: '1%' }}>
             <Box>
                  <Typography style={{ fontSize: "29px" }}>
                    {account.heading}
                  </Typography>
                  <Typography style={{ fontSize: "18px" }}>
                    {account.subHeading}
                  </Typography>
                </Box>
               <Box>
              <TextField
              className="textfields"
                onChange={(e) => onAdminChange(e)}
                name="username"
                label="Enter Username"
                autoComplete="off"
              />
              </Box>
              <Box>
              <TextField
              className="textfields"
                onChange={(e) => onAdminChange(e)}
                name="password"
                label="Enter Password"
                autoComplete="off"
              />
              </Box>
              {error && (
                <Typography style={{ color: "red", fontSize: 14 }}>
                  Invalid Username or Password
                </Typography>
              )}
              <Link to={{ pathname: "/adminDashboard" }}>
                <button onClick={() => adminLogin()} className='signUpDialogBtn'>
                  Login
                </button>
              </Link>

              <Box className="alreadyhaveanaccount">
              <Typography onClick={() => toggleUserAccount()} className='typoLink'> User SignUp, Create an Account </Typography>
                  <Typography className='orBtn'>Or</Typography>
                  <Typography  onClick={() => switchToLogin()} className='typoLink'>Login as User</Typography>
              </Box>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
