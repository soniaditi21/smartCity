/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./SidePanel.css";
import { LoginContext } from "../../../context/ContextProvider";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function SidePanel(admin) {
  const { account } = useContext(LoginContext);
  //console.log(account);
  
  return (
    <div className="panelRoot">
      <div className="profile-container">
        <IconButton size="small" aria-label="show 4 new mails" style={{color: 'white',marginRight: '2%'}} >
          <AccountCircle />
        </IconButton>
        <Typography
        style={{
          color: 'white',
          margin: '2%',
          fontSize: '20px',
        }}>{admin.admins.username}</Typography>
      </div>

      <div className="item-list">
        
          <Link
            to={{ pathname: "/adminDashboard" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px',color: '#fff'}}>Dashboard</Typography>
            </Box>
          </Link>
       

        
          <Link
            to={{ pathname: "/addATM" }}
            style={{ textDecoration: "none",color: '#fff'  }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>ATMS</Typography>
            
          
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addHospital" }}
            style={{ textDecoration: "none", color: '#fff'  }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Hospitals</Typography>
            
          
              </Box>
          </Link>
        

          <Link
            to={{ pathname: "/addHotel" }}
            style={{ textDecoration: "none", color: '#fff'  }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Hotels</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addSchool" }}
            style={{ textDecoration: "none" , color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>School</Typography>
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addCollege" }}
            style={{ textDecoration: "none" , color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Colleges</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addLibrary" }}
            style={{ textDecoration: "none", color: '#fff'  }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Libraries</Typography>
            
           
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addShoppingMalls" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Shopping Malls</Typography>
            
          
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addTemple" }}
            style={{ textDecoration: "none", color: '#fff'  }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Temples</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addTourism" }}
            style={{ textDecoration: "none",color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Tourism</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/addTransport" }}
            style={{ textDecoration: "none", color: '#fff'  }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Transport</Typography>
            
          
              </Box>
          </Link>
      </div>
    </div>
  );
}
