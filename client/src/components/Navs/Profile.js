import { Typography, Menu, MenuItem } from '@mui/material';
import React, {  useState } from 'react';
import { makeStyles } from '@mui/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const useStyle = makeStyles({


component: {
  marginTop: 40
},
  userStyle: {
    marginTop: '45%',
    color: '#fff',
    fontWeight: 500,
    marginRight: 15,
    fontSize: '18px',
  }

});

const Profile = ({account, setAccount}) => {


  const [open, setOpen ] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

 const handleClick = (event) => {

   setOpen(event.currentTarget);
 }
  const classes = useStyle();

  const logout = () => {
    setAccount('');
  }
  return (
  <>
    <Link to='/' style={{textDecoration: 'none'}}> <Typography onClick={handleClick} className={classes.userStyle} >{account}</Typography>
    </Link>
     <Menu

   anchorEl={open}
   open={Boolean(open)}
   onClose={handleClose}
   className={classes.component}
     >
   <MenuItem onClick={() => {handleClose(); logout();}}>
   
   Log Out
   <LogoutIcon/>
   </MenuItem>
 </Menu>
  </>
  )
}

export default Profile;
