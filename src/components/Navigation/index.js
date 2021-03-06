import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "./styles.css";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  const [isLightNavBar, setIsLightNavBar] = useState(true);

  const headerItems = [
    "home",
    "about",
    "timeline",
    "skills",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    window.addEventListener("scroll", observeScrollChange);
    navbarHiglighting();
  }, []);

  const observeScrollChange = () => navbarHiglighting();

  const navbarHiglighting = () => {
    const homeSectionId = document.getElementById("home");
    const aboutSectionId = document.getElementById("about");
    const timelineSectionId = document.getElementById("timeline");
    const skillsSectionId = document.getElementById("skills");
    const portfolioSectionId = document.getElementById("portfolio");
    const contactSectionId = document.getElementById("contact");

    let section = "home";

    const roundedY = Math.round(window.scrollY);

    if (
      roundedY >= homeSectionId.offsetTop &&
      roundedY < aboutSectionId.offsetTop
    ) {
      section = "home";
    } else if (
      roundedY >= aboutSectionId.offsetTop &&
      roundedY < timelineSectionId.offsetTop
    ) {
      section = "about";
    } else if (
      roundedY >= timelineSectionId.offsetTop &&
      roundedY < skillsSectionId.offsetTop
    ) {
      section = "timeline";
    } else if (
      roundedY >= skillsSectionId.offsetTop &&
      roundedY < portfolioSectionId.offsetTop
    ) {
      section = "skills";
    } else if (
      roundedY >= portfolioSectionId.offsetTop &&
      roundedY < contactSectionId.offsetTop
    ) {
      section = "portfolio";
    } else {
      section = "contact";
    }

    setIsLightNavBar(section === "home" ? true : false);
    setSelectedItem(section);
  };

  const renderClassNames = (item) => {
    let classNames = ["navbar__grid__item"];

    if (isLightNavBar) {
      classNames.push("navbar__grid__item--light");
    } else {
      classNames.push("navbar__grid__item--dark");
    }
    if (selectedItem === item) {
      classNames.push("navbar__grid__item--selected");
    }
    return classNames.join(" ");
  };

  return (
    <nav id="navbar">
      <Grid
        id="navbar__grid"
        container
        justify="center"
        alignItems="center"
        direction="row"
      >
        {headerItems.map((item) => (
          <a
            key={`navbar__grid__${item}`}
            id={`navbar__grid__${item}`}
            className={renderClassNames(item)}
            onClick={() => {
              window.scrollTo(0, document.getElementById(item).offsetTop);
            }}
          >
            {item}
          </a>
        ))}
      </Grid>
    </nav>
  );
};

export default Navigation;
