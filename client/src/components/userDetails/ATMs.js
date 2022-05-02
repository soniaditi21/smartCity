import React from "react";

import UserSidePanel from "./UserSidePanel";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./item.css";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAtms } from "../../redux/actions/itemActions";
import { useDispatch } from "react-redux";
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import Footer from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#243b55' : '#243b55',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundImage: 'linear-gradient(to bottom, #ffffff, #c3bfc9, #8e8294, #5f4960, #34142e)',
  boxShadow: 'rgba(1045, 135, 10, 0.4) 0 3px 28px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #935baf 0 -3px 0 inset',

}));

function ATMs() {
  const { atms } = useSelector((state) => state.fetchAtms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAtms());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="rootContainer">
        <div className="sidePanel">
          <UserSidePanel />
        </div>

        <div className="mainContainer">
          <div className="headingContainer">
            <Typography style={{ fontSize: "30px", color: "white" }}>
              ATMs
            </Typography>
          </div>

        
               
           
          <Grid container spacing={3} className="cards">
            {atms.map((atm) => (
              
                
               <Grid item xs={12} md={6} >
                 <Item className='card'>
                 <div className="layer"></div> 

                <div className="content">
                  <Typography className='cardName'>{atm.itemTitle}</Typography>
                  <div className="cardImageContainer" >
                    <img className="cardImage" src={atm.image} alt=""/>
                  </div>
                  <div className="details">
                   <Typography>{atm.primaryAddress}</Typography>
                   <Typography>{atm.secondaryAddress}</Typography>

                   <div className="contact-detail">
                   <Typography> <PhoneIcon fontSize='small' /><span >{atm.contact}</span></Typography>
                  <Typography> <LanguageIcon fontSize="small" /><a href={atm.website}><span > Website</span></a></Typography>
                   </div>
                  
                  </div>
                </div>
                </Item>
               </Grid>
                
            
            ))
            }
              </Grid>
          </div>
        </div>
        <Footer/>
      </div>
    
  );
}

export default ATMs;
