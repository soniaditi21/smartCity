import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Home/Button';
import './Navbar.css';
import { LoginContext } from '../../context/ContextProvider';
import Login from './Login';
import Profile from './Profile';

function Navbar() {
   const [click, setClick]=useState(false);
 
   const [open, setOpen ] = useState(false);
   const {account, setAccount} =useContext(LoginContext);

   const handleClick=()=> setClick(!click);
   const closeMobileMenu =()=>setClick(false);

   const openLoginDialog = () => {
    setOpen(true);
  }

 
  

  
  return (
    <>
        <nav className='navbar'>
          <div className='wrapper'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         SMARTCITY<i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
       
       </div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         <li className='nav-item'>
        <Link to={{ pathname: `/`}} className='nav-links' onClick={closeMobileMenu}>
           Home
        </Link>
         </li>
       
         <li className='nav-item'>

         {
                 account ? <Profile account={account} setAccount={setAccount} /> :
                 <div>
                <Link to='/' style={{textDecoration: 'none'}}>
                <Button onClick={() => openLoginDialog()}>Login</Button>
                </Link>
                </div>

              }
        <Login open={open} setOpen={setOpen} setAccount={setAccount}/>
         </li>
       </ul>
     
       </div>
       </div>
        </nav>
    </>
  );
}

export default Navbar;








// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import HomeIcon from '@mui/icons-material/Home';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import PersonIcon from '@mui/icons-material/Person';
// import { makeStyles } from '@mui/styles';
// import  {useState,useContext} from 'react';
// import {Link} from 'react-router-dom';
// import './Navbar.css';
// import { LoginContext } from '../context/ContextProvider';
// import Login from './Login';
// import Profile from './Profile';
// import LoginIcon from '@mui/icons-material/Login';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.1),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// const useStyles = makeStyles((theme) => ({
//   appBarTransparent: {
    
//     color: '#1A2027',
   
//     // backgroundColor: 'linear-gradient(#141e30, #243b55)',
//     background: 'rgba(0,0,0,.7)',
//     boxShadow: '0 2px 2px #FFD700'
// },
//   appBarSolid: {
//           backgroundColor: 'linear-gradient(#141e30, #243b55)',

//   },
// }))

// export default function Navbar() {
//    // const [click, setClick]=useState(false);
 
//     const [open, setOpen ] = useState(false);
//     const {account, setAccount} =useContext(LoginContext);
 
//    // const handleClick=()=> setClick(!click);
//   //  const closeMobileMenu =()=>setClick(false);
 
//     const openLoginDialog = () => {
//      setOpen(true);
//    }
 
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>
//       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
         
//          <PersonIcon />
       
//      </IconButton>
//         User Login
//         </MenuItem>
//       <MenuItem onClick={handleMenuClose}>
//       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
         
//          <AdminPanelSettingsIcon />
       
//      </IconButton>
//         Admin Login
//         </MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
         
//             <HomeIcon />
          
//         </IconButton>
//         <p>Home</p>
//       </MenuItem>
  
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Login/SignUp</p>
//       </MenuItem>
//     </Menu>
//   );
//   const classes = useStyles();
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" className={classes.appBarTransparent}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           <Link to={{pathname: '/'}}  style={{textDecoration: 'none'}}>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             SMARTCITY
//           </Typography>
//         </Link>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
//           <Link to={{ pathname: `/`}} style={{textDecoration: 'none'}}>
//             <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
//               <HomeIcon />  
//             </IconButton>
//             </Link>

//             {
//                  account ? <Profile account={account} setAccount={setAccount} /> :
//                  <div>
//                 <Link to='/' style={{textDecoration: 'none'}}>
//                 <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={() => openLoginDialog()}
//               color='inherit'
//             >
//               <LoginIcon />
//             </IconButton>
//                 </Link>
//                 </div>

//               }
//         <Login open={open} setOpen={setOpen} setAccount={setAccount}/>
            
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }


// import SearchBar from './SearchBar';


// function Navbar() {
//    const [click, setClick]=useState(false);
 
//    const [open, setOpen ] = useState(false);
//    const {account, setAccount} =useContext(LoginContext);

//    const handleClick=()=> setClick(!click);
//    const closeMobileMenu =()=>setClick(false);

//    const openLoginDialog = () => {
//     setOpen(true);
//   }

 
  

  
//   return (
//     <>
//         <nav className='navbar'>
//             <div className='navbar-container'>

//             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//          SMARTCITY<i className='fab fa-typo3' />
//             </Link>

//             <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//             </div>

//             <div className='searchBar'>
//               <SearchBar/>
//                     </div>
//        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//          <li className='nav-item'>
//         <Link to={{ pathname: `/`}} className='nav-links' onClick={closeMobileMenu}>
//            Home
//         </Link>
//          </li>
       
//          <li className='nav-item'>

//          {
//                  account ? <Profile account={account} setAccount={setAccount} /> :
//                  <div>
//                 <Link to='/' style={{textDecoration: 'none'}}>
//                 <Button onClick={() => openLoginDialog()}>Login</Button>
//                 </Link>
//                 </div>

//               }
//         <Login open={open} setOpen={setOpen} setAccount={setAccount}/>
//          </li>
//        </ul>
     
//        </div>

//         </nav>
//     </>
//   );
// }

// export default Navbar;