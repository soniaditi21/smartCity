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
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Dashboard</Typography>
            </Box>
          </Link>
       

        
          <Link
            to={{ pathname: "/atms" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>ATMS</Typography>
            
          
              </Box>
          </Link>

          <Link
            to={{ pathname: "/hospitals" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Hospitals</Typography>
            
          
              </Box>
          </Link>
        

          <Link
            to={{ pathname: "/hotels" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Hotels</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/schools" }}
            style={{ textDecoration: "none" , color: '#FFD700'}}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>School</Typography>
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/colleges" }}
            style={{ textDecoration: "none" , color: '#FFD700'}}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Colleges</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/libraries" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Libraries</Typography>
            
           
              </Box>
          </Link>

          <Link
            to={{ pathname: "/shoppingMalls" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Shopping Malls</Typography>
            
          
              </Box>
          </Link>

          <Link
            to={{ pathname: "/temples" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Temples</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/tourism" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Tourism</Typography>
            
         
              </Box>
          </Link>

          <Link
            to={{ pathname: "/transports" }}
            style={{ textDecoration: "none", color: '#FFD700' }}
          >
            <Box className='item'>
            <Typography style={{fontSize: '18px'}}>Transport</Typography>
            
          
              </Box>
          </Link>
      </div>
    </div>
  );
}
