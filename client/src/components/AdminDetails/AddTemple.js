import React from "react";
import { useContext } from "react";
import SidePanel from "./AdminDashboard/SidePanel";
import "./AddATM.css";

import Box from "@mui/material/Box";

import {  Typography } from "@mui/material";
import { LoginContext } from "../../context/ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmin } from "../../redux/actions/adminAction";
import { addTempleDetail } from "../../service/itemApi";
import { useEffect } from "react";
import { useState } from "react";
import { fetchTemples } from "../../redux/actions/itemActions";

const itemInitialValues = {
  itemTitle: "",
  primaryAddress: "",
  secondaryAddress: "",
  image: "",
  contact: "",
  website: "",
};

function AddTemple() {
 
  const [item, setItem] = useState(itemInitialValues);
  const [error, setError] = useState(false);

  // console.log(titles);
  const { admins } = useSelector((state) => state.fetchAdmin);

  // console.log(admins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmin());
  }, [dispatch]);



  const { temples } = useSelector((state) => state.fetchTemples);
  useEffect(() => {
    dispatch(fetchTemples());
  }, [dispatch]);


  const addItem = async () => {
    console.log(item);
    alert('Details added successfully, To add More click reset button');
    let response = await addTempleDetail(item);
    if (!response) {
      alert('Error: Please try again!');
      setError(true);
      return;
    }
  };
  const resetItem = () => {
    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
    document.getElementById("textfield3").value = "";
    document.getElementById("textfield4").value = "";
    document.getElementById("textfield5").value = "";
    document.getElementById("textfield6").value = "";
    setItem(itemInitialValues);
    setError(false);
  };

  const { account } = useContext(LoginContext);

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {
      account ? (
        <div className="rootContainer">
          <div className="sidePanel">
            <SidePanel admins={admins[0]} />
          </div>

          <div className="mainContainer">
            <div className="headingContainer">
              <Typography style={{ fontSize: "30px", color: "white" }}>
                Total Temples
              </Typography>
            </div>
            <div className='middleContainer'>
            <div className="totalQuantityContainer">
              <Typography style={{ fontSize: "30px", color: "white" }}>
               Total Temples added: 
               </Typography>
               <Typography style={{ fontSize: "30px", color: "white" }}>[ {temples.length} ]</Typography> 
             
            </div>
            <div className='addMoreBtn'>
              <button className='addBtn' ><a href="#loginHere">Add more</a></button>
            </div>
            </div>


            <div className="table-container">
              <div className="table-header">
                <div className="table">
                  <div className="table-row">
                    <div className="table-column bank-head">
                      <div className="">Name</div>
                    </div>
                    <div className="table-column ifsc-head">
                      <div className="">Location</div>
                    </div>
                    <div className="table-column branch-head">
                      <div className="">Area</div>
                    </div>
                    <div className="table-column bank-id-head ">
                      <div className="">Contact</div>
                    </div>
                    <div className="table-column address-head">
                      <div className="">Website</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-body">
                <div className="table">
                {
                  temples.length?(
                    temples.map((temple) => {
                      return (
                        <div className="table-row" key={temple.itemTitle}>
                        <div className="table-column bank">
                          <div className="">{temple.itemTitle}</div>
                        </div>
                        <div className="table-column ifsc">
                          <div className="">{temple.primaryAddress}</div>
                        </div>
                        <div className="table-column branch">
                          <div className="">{temple.secondaryAddress}</div>
                        </div>
                        <div className="table-column bank-id">
                          <div className="">{temple.contact}</div>
                        </div>
                        <div className="table-column address">
                          <a href={temple.website}>
                          <div className="">website</div>
                          </a>
                        </div>
                      </div>
                      );
                    })
                  ):(
                    <div className="empty-table">
                    <Box sx={{ width: "100%" }}>
                      <Typography>No atm added</Typography>
                    </Box>
                  </div>
                  )
              
                }
                 
                </div>
              </div>
            </div>

            <div className="headingContainer"  id='loginHere'>
              <Typography style={{ fontSize: "30px", color: "white" }}>
                Add Atm
              </Typography>
            </div>

            <div className="login-box">
              <div className="user-box">
                <label>Enter Title</label>
                <input
                  id="textfield1"
                  type="text"
                  name="itemTitle"
                  onChange={(e) => onInputChange(e)}
                   required autoComplete="off"
                />
              </div>
              <div className="user-box">
                <label>Enter Location</label>
                <input
                  id="textfield2"
                  type="text"
                  name="primaryAddress"
                   required autoComplete="off"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="user-box">
                <label>Enter Area</label>
                <input
                  id="textfield3"
                  type="text"
                  name="secondaryAddress"
                   required autoComplete="off"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="user-box">
                <label>Enter Image URL</label>
                <input
                  id="textfield4"
                  type="text"
                  name="image"
                   required autoComplete="off"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="user-box">
                <label>Enter Contact</label>
                <input
                  id="textfield5"
                  type="text"
                  name="contact"
                   required autoComplete="off"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="user-box">
                <label>Enter Website</label>
                <input
                  id="textfield6"
                  type="text"
                  name="website"
                   required autoComplete="off"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              {error && (
                <Typography style={{ color: "red", fontSize: 14 }}>
                    Invalid Entry, please try again..
                </Typography>
              )}

              {/* form add */}
              <button
                className='formButtons'
                onClick={() => addItem(item)}
              
              >
                Add
              </button>
              <button
                className='formButtons'
                onClick={() => resetItem(item)}
  
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Typography>Cannot Access Content, Login To Access</Typography>
      )}
    </div>
  );
}

export default AddTemple