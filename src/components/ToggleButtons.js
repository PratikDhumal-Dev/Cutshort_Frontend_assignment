import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton
        value="left"
        aria-label="left aligned"
        style={{
          display: "grid",

          borderRadius: "10px",
          maxWidth: "40%",
          marginRight: "2vh",
          width: "20vh",
          border: alignment ? "2px solid #674DE4" : "white",
        }}
      >
        <PersonIcon
          sx={{
            color: "#674DE4",
            fontSize: 35,
            marginLeft: ".5vh",
            marginTop: "1.07vh",

            marginBottom: "1vh",
          }}
        />
        <h4
          style={{
            marginRight: "6vh",
            textTransform: "capitalize",
            fontFamily: "Inter",
            marginTop: "-0.107vh",
          }}
        >
          For Myself
        </h4>
        <p
          style={{
            textTransform: "capitalize",
            fontFamily: "Inter",
            marginTop: "-1.07vh",
            color: "#808080",
            textAlign: "left",
          }}
        >
          Write better. Think more clearly. Stay organized.
        </p>
      </ToggleButton>
      <ToggleButton
        value="center"
        aria-label="right aligned"
        style={{
          display: "grid",

          borderRadius: "10px",
          maxWidth: "40%",
          marginLeft: "2vh",
          width: "20vh",
          border: alignment ? "2px solid #674DE4" : "white",
        }}
      >
        <GroupsIcon
          sx={{
            color: "#674DE4",
            fontSize: 35,
            marginLeft: ".5vh",
            marginTop: "1.07vh",

            marginBottom: "1vh",
          }}
        />
        <h4
          style={{
            marginRight: "3vh",
            textTransform: "capitalize",
            fontFamily: "Inter",
            marginTop: "-0.107vh",
          }}
        >
          With my team
        </h4>
        <p
          style={{
            textTransform: "capitalize",
            fontFamily: "Inter",
            marginTop: "-1.07vh",
            color: "#808080",
            textAlign: "left",
          }}
        >
          Wiki, docs,tasks & projects, all in one place.
        </p>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
