import React from 'react'
import { useContext } from 'react';
import SidePanel from './AdminDashboard/SidePanel';
import './AddATM.css'

import Box from '@mui/material/Box';

import { Typography } from '@mui/material';
import { LoginContext } from '../../context/ContextProvider';
import {useDispatch,useSelector} from 'react-redux';
import { fetchAdmin } from '../../redux/actions/adminAction';
import {useEffect} from 'react';



function AddColleges() {
 
 // console.log(titles);
  const { admins } = useSelector((state) => state.fetchAdmin);

 // console.log(admins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmin());
  }, [dispatch]);
  
  const {account} =useContext(LoginContext);
  return (
    <div className='container' >
      
     
        
           {
             account ? 
             <div className='rootContainer'> 
                 <div className='sidePanel'>
                   <SidePanel admins={admins[0]}/>
                 </div>

               <div className='mainContainer'>
            
                 AddColleges
              
               </div>
                </div> : <Typography>Cannot Access Content, Login To Access</Typography>
           }
        
     
      
    </div>
  )
}

export default AddColleges