import React from 'react'


import './Dashboard.css'
import DisplayCard from '../AdminDetails/AdminDashboard/DisplayCard'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import UserSidePanel from './UserSidePanel';
import { titles } from '../AdminDetails/AdminDashboard/constants';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function AdminDashboard() {
 
 
 
  return (
    <div className='container' >
      
     
        
          
             <div className='rootContainer'> 
                 <div className='sidePanel'>
                   <UserSidePanel />
                 </div>

               <div className='mainContainer'>
            
                
                <div className='gridContainer'>
     
             <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={2}>
            
            {
              titles.map(title => (
                <Grid item xs={8} md={4} key={title.id}>
                <Item><DisplayCard title={title}/></Item>
              </Grid>
              ))
            }
               
             </Grid>
           </Box>
                
             </div>
               </div>
                </div> 
           
        
     
      
    </div>
  )
}

export default AdminDashboard