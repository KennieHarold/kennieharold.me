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
    <header id="header">
      <Grid
        id="header__grid"
        container
        justify="center"
        alignItems="center"
        direction="row"
      >
        {headerItems.map((item) => (
          <span
            key={`header__grid__${item}`}
            id={`header__grid__${item}`}
            className="header__grid__item"
          >
            {item}
          </span>
        ))}
      </Grid>
    </header>
  );
};

export default Header;
