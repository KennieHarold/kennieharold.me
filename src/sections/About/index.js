import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import ProfilePic from "../../assets/pp_300.png";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import "./styles.css";

const About = () => {
  return (
    <section id="about">
      <Grid
        id="about__grid"
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Box
          id="about__grid__section-title"
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="flex-end"
        >
          <SectionTitle id="about__grid__section-title__about" title="about" />
        </Box>
        <Box
          id="about__grid__content"
          display="flex"
          flex={9}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            id="about__grid__content__desc"
            container
            item
            justify="center"
            alignItems="center"
            direction="column"
            lg={6}
          >
            <img id="about__grid__content__desc__img" src={ProfilePic} />
            <Typography id="about__grid__content__desc__who-am-i" variant="h5">
              Who am I?
            </Typography>
            <Typography id="about__grid__content__desc__para">
              Hi, I'm currently working as a software developer for almost two
              years. I'm assigned to a mobile-based project where I do frontend,
              backend, and operations. Most of my tasks are building web
              scrapers to gather data for our AI model.
            </Typography>
          </Grid>
          <Grid
            id="about__grid__content__graph"
            container
            item
            justify="space-evenly"
            alignItems="center"
            direction="column"
            item
            lg={6}
          >
            <CircularProgressWithLabel
              value={70}
              size={125}
              textsize={25}
              customcolor="#FDA702"
            />
            <CircularProgressWithLabel
              value={50}
              size={125}
              textsize={25}
              customcolor="#55CB97"
            />
            <CircularProgressWithLabel
              value={90}
              size={125}
              textsize={25}
              customcolor="#41A6E7"
            />
          </Grid>
        </Box>
      </Grid>
    </section>
  );
};

export default About;
