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
import { fetchAtms } from "../../redux/actions/itemActions";
import { useDispatch } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
 
}));

function AddATM() {
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

          <div class='flex-container'>
              {atms.map((atm) => (

                  <div class="flex-item-left">
                    <div class="infocardContainer">
                      <div id="main">
                        <img src={atm.image} alt="AtmImg"></img>
                      </div>
                      <div id="textbois">
                        <h2>{atm.itemTitle}</h2>
                        <h4>{atm.primaryAddress}</h4>
                        <h4>{atm.secondaryAddress}</h4>

                        <div className="">
                          <h4>📞 {atm.contact}</h4>
                          <h4>🌏{atm.website}</h4>
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
