import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import "./styles.css";

const Timeline = () => {
  return (
    <section id="timeline">
      <Grid
        id="timeline__grid"
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Box
          id="timeline__grid__section-title"
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="flex-end"
        >
          <SectionTitle
            id="timeline__grid__section-title__timeline"
            title="timeline"
          />
        </Box>
        <Box
          id="timeline__grid__content"
          display="flex"
          flex={9}
          justifyContent="center"
          alignItems="center"
        ></Box>
      </Grid>
    </section>
  );
};

export default Timeline;
