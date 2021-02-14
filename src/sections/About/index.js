import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
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
          flex={2.5}
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle id="about__grid__section-title__about" title="about" />
        </Box>
        <Box
          id="about__grid__content"
          display="flex"
          flex={7.5}
          justifyContent="center"
          alignItems="center"
        >
        </Box>
      </Grid>
    </section>
  );
};

export default About;
