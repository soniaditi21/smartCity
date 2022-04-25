
import  { Dialog, DialogContent, TextField, Button, Box, Typography} from '@mui/material';

import React, {  useState } from 'react';
import { authenticateSignup, authenticateLogin,authenticateAdmin } from "../../service/api";
import {Link} from 'react-router-dom';


const initialValue = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to our content'
  },
  signup: {
    view: 'signup',
    heading: 'Login',
    subHeading: 'Look like, You are new here!'
  },
  admin:{
    view: 'admin',
    heading: 'Admin Login',
    subHeading: 'Add Content'
  }
}

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
}

const loginInitialValues = {
 username: '',
 password: '',

}
const adminInitialValues ={
  username: '',
  password: '',
  image: '',
}

const Login = ({ open, setOpen, setAccount }) => {


const [account, toggleAccount ] = useState(initialValue.login);
const [signup, setSignup] = useState(signupInitialValues);
const [login, setLogin ] = useState(loginInitialValues);
const[admin,setAdmin] = useState(adminInitialValues);
const [error, setError] = useState(false);


const handleClose = () => {
      setOpen(false);
      toggleAccount(initialValue.login);
  };

const toggleUserAccount = () => {
  toggleAccount(initialValue.signup);
}
const toggleAdminAccount=()=>{
  toggleAccount(initialValue.admin);
}

const signupUser = async () => {
  let response = await authenticateSignup(signup);
  if(!response) return;
   handleClose();
   setAccount(signup.username);
}

const adminLogin = async()=>{
   let response = await authenticateAdmin(admin);
   if(!response) return;
   handleClose();
   setAccount(admin.username);
}

const loginUser = async () => {
  let response = await authenticateLogin(login);
  if(!response) {
  setError(true);
  return;
}
  handleClose();
  setAccount(login.username);
}

const onInputChange = (e) => {
   setSignup({...signup, [e.target.name]: e.target.value});
}


const onValueChange = (e) => {
  setLogin({...login, [e.target.name]: e.target.value});
}

const onAdminChange = (e) => {
  setAdmin({...admin, [e.target.name]: e.target.value});
  
}



  return(
    <Dialog open={open} onClose={handleClose} >
      <DialogContent >
        <Box >

         
{
  account.view === 'login' ?
          <Box>
           <TextField onChange={(e) => onValueChange(e) } name='username' label='Enter Username'/>
           <TextField onChange={(e) => onValueChange(e) } name='password' label='Enter Password'/>
           {
             error && <Typography style={{color: 'red', fontSize: 14}}>Invalid Username or Password</Typography>
           }
           <Typography >By continuing, you agree to our Terms of Use and Privacy Policy.</Typography>
           <Button onClick={() => loginUser()} variant='contained'  >Login</Button>
           
           <Typography onClick={() => toggleUserAccount()} > New User, Create an Account </Typography>
           <Button  onClick={() => toggleAdminAccount()}>Admin Login</Button>
          </Box> : account.view==='signup' ?
          <Box >
             <TextField onChange={(e) => onInputChange(e)}name='firstname' label='Enter First Name'/>
             <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Last Name'/>
             <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username'/>
             <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email'/>
             <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/>
             <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number'/>
              <Button variant='contained' onClick={() => signupUser()}style={{marginTop: 'auto'}}>Sign Up</Button>
          </Box> :
          <Box>
             <TextField onChange={(e) => onAdminChange(e) } name='username' label='Enter Username'/>
           <TextField onChange={(e) => onAdminChange(e) } name='password' label='Enter Password'/>
           {
             error && <Typography style={{color: 'red', fontSize: 14}}>Invalid Username or Password</Typography>
           }
           <Link to={{pathname: '/adminDashboard'}}><Button onClick={() => adminLogin()} variant='contained'>Login</Button></Link>
   
          </Box>

        }


        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Login;
