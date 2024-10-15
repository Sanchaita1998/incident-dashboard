import React, { useState } from "react";
import { ButtonGroup, Button, Typography } from "@mui/material";

const TypeButtons = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    setSelectedButton(button); // Set selected button
  };

  return (
    <>
      <ButtonGroup>
        <Button
          className="header-button-group"
          variant={selectedButton === "UnC" ? "contained" : "outlined"}
          onClick={() => handleClick("UnC")}
          style={{ color: selectedButton === "UnC" ? 'white' : '#0039CE' }}
        >
          UnC
        </Button>

        <Button
          className="header-button-group"
          variant={selectedButton === "NS" ? "contained" : "outlined"}
          onClick={() => handleClick("NS")}
          style={{ color: selectedButton === "NS" ? 'white' : '#0039CE' }}
        >
          NS
        </Button>
        <Button
          className="header-button-group"
          variant={selectedButton === "UnA" ? "contained" : "outlined"}
          onClick={() => handleClick("UnA")}
          style={{ color: selectedButton === "UnA" ? 'white' : '#0039CE' }}
        >
          UnA
        </Button>
        <Button
          className="header-button-group"
          variant={selectedButton === "MTI" ? "contained" : "outlined"}
          onClick={() => handleClick("MTI")}
          style={{ color: selectedButton === "MTI" ? 'white' : '#0039CE' }}

        >
          MTI
        </Button>
        <Button
          className="header-button-group"
          variant={selectedButton === "LTI" ? "contained" : "outlined"}
          onClick={() => handleClick("LTI")}
          style={{ color: selectedButton === "LTI" ? 'white' : '#0039CE' }}
        >
          LTI
        </Button>
        <Button
          className="header-button-group"
          variant={selectedButton === "SBI" ? "contained" : "outlined"}
          onClick={() => handleClick("SBI")}
          style={{ color: selectedButton === "SBI" ? 'white' : '#0039CE' }}
        >
          SBI
        </Button>
        <Button
          className="header-button-group"
          variant={selectedButton === "Fatality" ? "contained" : "outlined"}
          onClick={() => handleClick("Fatality")}
          style={{ color: selectedButton === "Fatality" ? 'white' : '#0039CE' }}
        >
          Fatality
        </Button>
      </ButtonGroup>
    </>
  );
};

export default TypeButtons;
