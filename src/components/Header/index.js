import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./styles.css";

const Header = () => {
  const headerItems = [
    "home",
    "about",
    "timeline",
    "skills",
    "portfolio",
    "contact",
  ];

  return (
    <header id="header">
      <Grid
        id="header__grid"
        container
        justify="center"
        alignItems="center"
        direction="row"
      >
        {headerItems.map((item) => (
          <Typography id={`header__grid__${item}`} variant="caption">
            {item}
          </Typography>
        ))}
      </Grid>
    </header>
  );
};

export default Header;
