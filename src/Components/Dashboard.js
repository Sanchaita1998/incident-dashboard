import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box, Button, ButtonGroup } from "@mui/material";
import Header from "./Header";
import StepperComponent from "./Stepper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckboxField from "./CheckboxField";
import SelectField from "./SelectField";
import Typography from "@mui/material/Typography";
import tem from "../Asset/images/Vector.svg";
import cardImg from "../Asset/images/cardimg.png";
import IncidentShortSummary from "./IncidentShortSummary";
import CardContainer from "./CardContainer";
import IncidentCard from "./IncidentCard";
import TypeButtons from "./TypeButtons";
import SeverityButtons from "./SeverityButtons";
import Report from "../Asset/images/Report Incident.png";
import Safety from "../Asset/images/Safety Officer.png";
import Investigaton from "../Asset/images/Investigation.png";
import Mines from "../Asset/images/Mines Manager.png";
import user from "../Asset/images/person_outline.png";
import bulid from "../Asset/images/build.png";
import direction from "../Asset/images/directions_car.png";

const Dashboard = () => {
  const steps = ["Incident Info", "Review"];
  const [selectedButton, setSelectedButton] = useState("");
  const [typeButtons, setTypeButton] = useState("");

  const handleButtonClick = (type) => {
    // Update the selected button state
    setSelectedButton(type);
    setTypeButton(type)
    // Dispatch the action
  };

  const handleClick = (button) => {
    setSelectedButton(button); // Set selected button
  };

  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <Header />

          {/* Content Area */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "#fff",
              padding: 3,
              overflow: "auto", // Allows scrolling if content grows
            }}
          >
            {/* First Grid System */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div>
                   <StepperComponent steps={steps} />
                </div>
                <Card sx={{ minWidth: 275 }} className="CardOne">
                  <div className="card1-header-container">
                    <div className="card1-header">
                      <Typography className="card-header-title">
                        Type
                      </Typography>
                      <Typography className="card-header-title">
                        Severity
                      </Typography>
                    </div>
                    <div className="card1-header-button">
                      <TypeButtons />
                      <SeverityButtons />
                    </div>
                  </div>

                  <CardContent>
                    <CheckboxField label="Fire" name="Fire" />
                    <CheckboxField label="Inundation" name="Inundation" />
                    <CheckboxField label="Lighting" name="Lighting" />
                    <CheckboxField label="Explosive" name="Explosive" />
                    <CheckboxField
                      label="Fall of object"
                      name="Fall of object"
                    />
                    <CheckboxField
                      label="Electric shock"
                      name="Electric shock"
                    />
                    <CheckboxField label="PPE Violator" name="PPE Violator" />
                    <CheckboxField
                      label="Alcohol Violator"
                      name="Alcohol Violator"
                    />
                    <CheckboxField label="Unfit HEMM" name="Unfit HEMM" />
                    <CheckboxField
                      label="Moving Equipment"
                      name="Moving Equipment"
                    />
                    <CheckboxField
                      label="Fall from height"
                      name="Fall from height"
                    />
                    <CheckboxField
                      label="Unfit Buyer's Truck"
                      name="Unfit Buyer's Truck"
                    />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item container spacing={2} xs={12} md={6}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ minWidth: 275, height: 380 }} className="CardTwo">
                    <CardContent>
                      <SelectField TextFieldVaule="SiteMine2223" />
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card
                    sx={{ display: "flex", minWidth: 275, height: 380 }}
                    className="cardThree"
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography className="card-three-text">
                          <img src={Report} width={20} /> Reporting Officer
                        </Typography>
                        <Typography className="card-three-text">
                          <img src={Safety} alt="" /> Safety Officer
                        </Typography>
                        <Typography className="card-three-text">
                          <img src={Investigaton} alt="" /> Investigator
                        </Typography>
                        <Typography className="card-three-text">
                          <img src={Mines} alt="" /> Mines Officer
                        </Typography>
                      </CardContent>
                      <div
                        style={{ display: "flex" }}
                        className="card-three-para"
                      >
                        <img
                          src={cardImg}
                          alt=""
                          width={80}
                          className="card-three-image"
                        />
                        <p className="card-three-para-text">
                          Always Wear Safety Equipment
                          <span>Location</span>
                        </p>
                      </div>
                    </Box>
                    <div className="card-three-div">
                      <img
                        src={tem}
                        alt=""
                        width={100}
                        height={130}
                        style={{ marginTop: "30px", marginLeft: "-20%" }}
                      />
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            {/* Second Grid System */}
            <Grid container spacing={2} sx={{ marginTop: "40px" }}>
              <Grid item xs={12} md={6}>
                <Card sx={{ minWidth: 275 }} className="CardFour">
                  <IncidentCard />
                </Card>
              </Grid>

              <Grid item container spacing={2} xs={12} md={6}>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{ minWidth: 300, height: 510 }}
                    className="CardFive"
                  >
                    <CardContent>
                      <IncidentShortSummary />
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <CardContainer>
                    <Typography className="card-six-title">
                      Indirect Losses
                    </Typography>
                    <ButtonGroup>
                      <Button
                        className="header-button-group"
                        variant={
                          selectedButton === "Throughput"
                            ? "contained"
                            : "outlined"
                        } 
                        onClick={() => handleButtonClick("Throughput")} 
                        style={{ color: selectedButton === "Throughput" ? 'white' : '#0039CE' }}
                      
                      >
                        Throughput
                      </Button>
                      <Button
                        className="header-button-group"
                        variant={
                          selectedButton === "Production"
                            ? "contained"
                            : "outlined"
                        } 
                        style={{ color: selectedButton === "Production" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("Production")} // Click handler
                      >
                        Production
                      </Button>
                    </ButtonGroup>
                    <Typography className="card-six-title">
                      Activity Operations Status
                    </Typography>
                    <ButtonGroup>
                      <Button
                        className="header-button-group"
                        variant={
                          selectedButton === "Operating"
                            ? "contained"
                            : "outlined"
                        } 
                        onClick={() => handleButtonClick("Operating")} 
                        style={{ color: selectedButton === "Operating" ? 'white' : '#0039CE' }}
                      
                      >
                        Operating
                      </Button>
                      <Button
                        className="header-button-group"
                        variant={
                          selectedButton === "Shutdown"
                            ? "contained"
                            : "outlined"
                        } 
                        style={{ color: selectedButton === "Shutdown" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("Shutdown")} // Click handler
                      >
                        Shutdown
                      </Button>
                      <Button
                        className="header-button-group"
                        variant={
                          selectedButton === "Maintenance"
                            ? "contained"
                            : "outlined"
                        } 
                        style={{ color: selectedButton === "Maintenance" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("Maintenance")} // Click handler
                      >
                        Maintenance
                      </Button>
                    </ButtonGroup>

                    <Typography className="card-six-title">
                      Similar incident happened?
                    </Typography>
                    <ButtonGroup>
                      <Button variant={
                          selectedButton === "Yes"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "Yes" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("Yes")} className="header-button-group">Yes</Button>
                      <Button variant={
                          selectedButton === "No"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "No" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("No")} className="header-button-group">No</Button>
                      
                      <Button  variant={
                          selectedButton === "Not Aware"
                            ? "contained"
                            : "outlined"
                        }
                        style={{ color: selectedButton === "Not Aware" ? 'white' : '#0039CE' }}    
                        onClick={() => handleButtonClick("Not Aware")}className="header-button-group">Not Aware</Button>
                    </ButtonGroup>
                  </CardContainer>
                  <CardContainer sx={{ marginTop: "20px" }}>
                    <div className="img-button">
                      <img src={user} alt="" />
                      <img src={direction} alt="" />
                      <img src={bulid} alt="" />
                      <Button variant={
                          selectedButton === "IconYes"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "IconYes" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("IconYes")} className="header-button-group">Yes</Button>
                      <Button variant={
                          selectedButton === "IconNo"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "IconNo" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("IconNo")} className="header-button-group">No</Button>
                    </div>
                    <div className="img-button">
                      <Typography className="card-six-title">
                        Evidence
                      </Typography>
                      <ButtonGroup>
                      <Button variant={
                          selectedButton === "EvidenceYes"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "EvidenceYes" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("EvidenceYes")} className="header-button-group">Yes</Button>
                      <Button variant={
                          selectedButton === "EvidenceNo"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "EvidenceNo" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("EvidenceNo")} className="header-button-group">No</Button>
                      </ButtonGroup>
                    </div>
                    <div className="img-button">
                      <Typography className="card-six-title">CAPA</Typography>
                      <ButtonGroup>
                      <Button variant={
                          selectedButton === "CAPAYes"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "CAPAeYes" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("CAPAYes")} className="header-button-group">Yes</Button>
                      <Button variant={
                          selectedButton === "CAPANo"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "CAPANo" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("CAPANo")} className="header-button-group">No</Button>
                      </ButtonGroup>
                    </div>
                    <div className="img-button">
                      <Typography className="card-six-title">
                        Regulatory
                      </Typography>
                      <ButtonGroup>
                      <Button variant={
                          selectedButton === "RegulatoryYes"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "RegulatoryYes" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("RegulatoryYes")} className="header-button-group">Yes</Button>
                      <Button variant={
                          selectedButton === "RegulatoryNo"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "RegulatoryNo" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("RegulatoryNo")} className="header-button-group">No</Button>
                      </ButtonGroup>
                    </div>
                    <div className="img-button">
                      <Typography className="card-six-title">LTI</Typography>
                      <ButtonGroup>
                       <Button variant={
                          selectedButton === "LTIYes"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "LTIYes" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("LTIYes")} className="header-button-group">Yes</Button>
                      <Button variant={
                          selectedButton === "LTINo"
                            ? "contained"
                            : "outlined"
                        }   
                        style={{ color: selectedButton === "LTINo" ? 'white' : '#0039CE' }}
                        onClick={() => handleButtonClick("LTINo")} className="header-button-group">No</Button>
                      </ButtonGroup>
                    </div>
                  </CardContainer>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
