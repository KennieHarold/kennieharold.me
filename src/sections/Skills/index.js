import React from "react";
import { Grid, Box, Paper } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import "./styles.css";
import LinearProgressWithLabel from "../../components/LinearProgressWithLabel";

const Skills = () => {
  return (
    <section id="skills">
      <Grid
        id="skills__grid"
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Box
          id="skills__grid__section-title"
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="flex-end"
        >
          <SectionTitle
            id="skills__grid__section-title__skills"
            title="skills"
          />
        </Box>

        <Box
          id="skills__grid__content"
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          flexWrap="wrap"
          flex={9}
        >
          <Paper
            style={{
              width: screen.width / 2.8,
              height: screen.height / 3.4,
              margin: 20,
            }}
          >
            <LinearProgressWithLabel value={80}/>
          </Paper>
        </Box>
      </Grid>
    </section>
  );
};

export default Skills;
