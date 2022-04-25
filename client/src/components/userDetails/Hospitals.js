import React from "react";

import UserSidePanel from "./UserSidePanel";

import "./item.css";
import Box from "@mui/material/Box";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchHospitals } from "../../redux/actions/itemActions";
import { useDispatch } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
 
}));

function AddATM() {
  const { hospitals } = useSelector((state) => state.fetchHospitals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHospitals());
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
              Hospitals
            </Typography>
          </div>

          <div class='flex-container'>
              {hospitals.map((hospital) => (

                  <div class="flex-item-left">
                    <div class="infocardContainer">
                      <div id="main">
                        <img src={hospital.image} alt="hospitalImg"></img>
                      </div>
                      <div id="textbois">
                        <h2>{hospital.itemTitle}</h2>
                        <h4>{hospital.primaryAddress}</h4>
                        <h4>{hospital.secondaryAddress}</h4>

                        <div className="">
                          <h4>📞 {hospital.contact}</h4>
                          <h4>🌏{hospital.website}</h4>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

export default AddATM;