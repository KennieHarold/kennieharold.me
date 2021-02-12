import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "./styles.css";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  const [isLightNavBar, setIsLightNavBar] = useState(false);

  const headerItems = [
    "home",
    "about",
    "timeline",
    "skills",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    setSelectedItem("home");
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

    if (
      window.scrollY >= homeSectionId.offsetTop &&
      window.scrollY < aboutSectionId.offsetTop
    ) {
      setIsLightNavBar(true);
      setSelectedItem("home");
    } else if (
      window.scrollY >= aboutSectionId.offsetTop &&
      window.scrollY < timelineSectionId.offsetTop
    ) {
      setIsLightNavBar(false);
      setSelectedItem("about");
    } else if (
      window.scrollY >= timelineSectionId.offsetTop &&
      window.scrollY < skillsSectionId.offsetTop
    ) {
      setIsLightNavBar(false);
      setSelectedItem("timeline");
    } else if (
      window.scrollY >= skillsSectionId.offsetTop &&
      window.scrollY < portfolioSectionId.offsetTop
    ) {
      setIsLightNavBar(false);
      setSelectedItem("skills");
    } else if (
      window.scrollY >= portfolioSectionId.offsetTop &&
      window.scrollY < contactSectionId.offsetTop
    ) {
      setIsLightNavBar(false);
      setSelectedItem("portfolio");
    } else {
      setIsLightNavBar(false);
      setSelectedItem("contact");
    }
  };

  const checkClassName = (item) => {
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
            className={checkClassName(item)}
            onClick={() => {
              window.scrollTo(0, document.getElementById(item).offsetTop);
              setSelectedItem(item);
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
