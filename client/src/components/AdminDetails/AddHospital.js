import React from 'react'
import { useContext } from 'react';
import SidePanel from './AdminDashboard/SidePanel';
import './AddATM.css'

import Box from '@mui/material/Box';

import { Button,  Typography } from '@mui/material';
import { LoginContext } from '../../context/ContextProvider';
import {useDispatch,useSelector} from 'react-redux';
import { fetchAdmin } from '../../redux/actions/adminAction';
import {addHospitalDetail} from '../../service/itemApi';
import {useEffect} from 'react';
import { useState } from 'react';

const itemInitialValues = {
  itemTitle: '',
  primaryAddress: '',
  secondaryAddress: '',
  image: '',
  contact: '',
  website: '',
}

function AddATM() {
 
  const [item, setItem] = useState(itemInitialValues);
  const [error, setError] = useState(false);

 // console.log(titles);
  const { admins } = useSelector((state) => state.fetchAdmin);

 // console.log(admins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmin());
  }, [dispatch]);
  
  

  const addItem = async () => {

    console.log(item);
    
    let response = await addHospitalDetail(item);
    if(!response) {
      setError(true);
      return;
    }
  
 

  }
  const resetItem = () => {
    document.getElementById('textfield1').value = "";
    document.getElementById('textfield2').value = "";
    document.getElementById('textfield3').value = "";
    document.getElementById('textfield4').value = "";
    document.getElementById('textfield5').value = "";
    document.getElementById('textfield6').value = "";
    setItem(itemInitialValues);
    setError(false);
  }

  const {account} =useContext(LoginContext);

  const onInputChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value});
    
 }



  return (
    <div className='container' >
      
     
        
           {
             account ? 
             <div className='rootContainer'> 
                 <div className='sidePanel'>
                   <SidePanel admins={admins[0]}/>
                 </div>

               <div className='mainContainer'>
            
                 <div className='headingContainer'>
                    <Typography style={{fontSize: '30px', color: 'white'}}>Add Hospitals</Typography>
                 </div>

                 <Box className='login-box'>


                 
             <form>
    <div className="user-box">
      <input id='textfield1' type="text" name='itemTitle'   onChange={(e) => onInputChange(e)} required/>
      <label>Enter Title</label>
    </div>
    <div className="user-box">
      <input id='textfield2' type="text" name="primaryAddress" required onChange={(e) => onInputChange(e)} />
      <label>Enter Location</label>
    </div>
    <div className="user-box">
      <input id='textfield3' type="text" name="secondaryAddress" required onChange={(e) => onInputChange(e)} />
      <label>Enter Area</label>
    </div>
    <div className="user-box">
      <input id='textfield4' type="text" name="image" required onChange={(e) => onInputChange(e)}/>
      <label>Enter Image URL</label>
    </div>
    <div className="user-box">
      <input id='textfield5' type="text" name="contact" required onChange={(e) => onInputChange(e)} />
      <label>Enter Contact</label>
    </div>
    <div className="user-box">
      <input id='textfield6' type="text" name="website" required="" onChange={(e) => onInputChange(e)}/>
      <label>Enter Website</label>
    </div>
    {
             error && <Typography style={{color: 'red', fontSize: 14}}>Invalid Username or Password</Typography>
           }


  </form>
  <Button variant='contained' onClick={() => addItem(item)} style={{marginTop: 'auto', backgroundColor: '#FFD700',   boxShadow: '0 1px 5px #FFD700',color: 'black'}}>Add</Button>
  <Button variant='contained' onClick={() => resetItem(item)} style={{marginTop: 'auto', backgroundColor: '#FFD700',   boxShadow: '0 1px 5px #FFD700',color: 'black'}}>Reset</Button>

          </Box>
              
               </div>
                </div> : <Typography>Cannot Access Content, Login To Access</Typography>
           }
        
     
      
    </div>
  )
}

export default AddATM