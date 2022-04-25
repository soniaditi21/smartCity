import React from 'react'
import { useContext } from 'react';
import SidePanel from './SidePanel';
import './AdminDashboard.css'
import DisplayCard from './DisplayCard'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { LoginContext } from '../../../context/ContextProvider';
import {useDispatch,useSelector} from 'react-redux';
import { fetchAdmin } from '../../../redux/actions/adminAction';
import {useEffect} from 'react';
import { titles } from './constants';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function AdminDashboard() {
 
 // console.log(titles);
  const { admins } = useSelector((state) => state.fetchAdmin);

 // console.log(admins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmin());
  }, [dispatch]);
  // eslint-disable-next-line no-unused-vars
  const {account, setAccount} =useContext(LoginContext);
  return (
    <div className='container' >
      
     
        
           {
             account ? 
             <div className='rootContainer'> 
                 <div className='sidePanel'>
                   <SidePanel admins={admins[0]}/>
                 </div>

               <div className='mainContainer'>
            
                 <div className='headingTop'>
                  <Typography className='headingTypo' >Welcome {account}</Typography>
                  <Typography className='subHeading'>Here's your Dashboard, You can add or delete items</Typography>
               </div>
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
                </div> : <Typography>Cannot Access Content, Login To Access</Typography>
           }
        
     
      
    </div>
  )
}

export default AdminDashboard