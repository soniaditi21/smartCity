/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../AdminDetails/AdminDashboard/SidePanel.css";

import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";


export default function UserSidePanel() {
  
  //console.log(account);
  
  return (
    <div className="panelRoot">
     

      <div className="item-list">
        
          <Link
            to={{ pathname: "/dashboard" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Dashboard</Typography>
            </Box>
          </Link>
       

        
          <Link
            to={{ pathname: "/ATM" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>ATMS</Typography>
            
          
              </Box>
          </Link>

          <Link
            to={{ pathname: "/Hospital" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Hospitals</Typography>
            
          
              </Box>
          </Link>
        

          <Link
            to={{ pathname: "/Hotel" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Hotels</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/School" }}
            style={{ textDecoration: "none" , color: '#fff'}}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>School</Typography>
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/College" }}
            style={{ textDecoration: "none" , color: '#fff'}}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Colleges</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/Library" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Libraries</Typography>
            
           
              </Box>
          </Link>

          <Link
            to={{ pathname: "/ShoppingMalls" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Shopping Malls</Typography>
            
          
              </Box>
          </Link>

          <Link
            to={{ pathname: "/Temple" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Temples</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/Tourism" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Tourism</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/Transport" }}
            style={{ textDecoration: "none", color: '#fff' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Transport</Typography>
            
          
              </Box>
          </Link>
      </div>
    </div>
  );
}
