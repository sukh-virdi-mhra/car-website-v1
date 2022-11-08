import React from "react";
import { Typography } from "@mui/material";

function Header() {
  const textStyle = {
    textAlign: "center",
    marginTop: 1,
    color: "black",
    lineHeight: "1.8",
  };
  return (
    <div>
      <Typography variant="h3" component="h3" sx={textStyle}>
        Veloce Virdi
      </Typography>
    </div>
  );
}

export default Header;
