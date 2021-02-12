import React from "react";
import { Grid } from "@material-ui/core";
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
    <nav id="nav">
      <Grid
        id="nav__grid"
        container
        justify="center"
        alignItems="center"
        direction="row"
      >
        {headerItems.map((item) => (
          <span
            key={`nav__grid__${item}`}
            id={`nav__grid__${item}`}
            className="nav__grid__item"
          >
            {item}
          </span>
        ))}
      </Grid>
    </nav>
  );
};

export default Header;
