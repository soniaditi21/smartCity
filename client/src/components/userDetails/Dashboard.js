import React from 'react'


import './Dashboard.css'
import UserDisplayCard from './UserDisplayCard';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UserSidePanel from './UserSidePanel';
import { titles } from '../AdminDetails/AdminDashboard/constants';
import Footer from './Footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1d1a27',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundImage: 'linear-gradient(to bottom, #ffffff, #c3bfc9, #8e8294, #5f4960, #34142e)',

}));

//#ff4895
function AdminDashboard() {
 
 
 
  return (
    <div className='container' >
      
     
        
          
             <div className='rootContainer'> 
                 <div className='usersidePanel'>
                   <UserSidePanel />
                 </div>

               <div className='mainContainer'>
            
                
                <div className='gridContainer'>
     
             <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={3}>
            
            {
              titles.map(title => (
                <Grid item xs={8} md={4} key={title.id}>
                <Item className='item-card'><UserDisplayCard title={title}/></Item>
              </Grid>
              ))
            }
               
             </Grid>
           </Box>
                
             </div>
               </div>
                </div> 
           
        
     
      <Footer/>
    </div>
  )
}

export default AdminDashboard