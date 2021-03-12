import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import ProfilePic from "../../assets/pp_300.png";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import "./styles.css";

const About = () => {
  const graphItems = [
    {
      key: "about__grid__content__grid__graph__item__creativity",
      title: "Creativity",
      caption:
        "Accurate with innovative mindset,attentive to details while keeping in track of the fast changing trends.",
      circleColor: "#FDA702",
      circleRate: 70,
    },
    {
      key: "about__grid__content__grid__graph__item__skill",
      title: "Skill",
      caption:
        "Two year dedicated software developer manage to earn problem solving skills with excellent time management and organizational skills.",
      circleColor: "#55CB97",
      circleRate: 50,
    },
    {
      key: "about__grid__content__grid__graph__item__passion",
      title: "Passion",
      caption:
        "Love to work with projects that gives new learnings which stimulates my curiousiy and boosts my self-esteem.",
      circleColor: "#41A6E7",
      circleRate: 90,
    },
  ];

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
          <Grid className="about__grid__content__grid" container item lg={6}>
            <Box
              id="about__grid__content__grid__desc"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                id="about__grid__content__grid__desc__img"
                src={ProfilePic}
              />
              <Typography
                id="about__grid__content__grid__desc__who-am-i"
                variant="h5"
              >
                Who am I?
              </Typography>
              <Typography id="about__grid__content__grid__desc__para">
                Hi, I'm currently working as a software developer for almost two
                years. I'm assigned to a mobile-based project where I do
                frontend, backend, and operations. Most of my tasks are building
                web scrapers to gather data for our AI model.
              </Typography>
            </Box>
          </Grid>
          <Grid
            className="about__grid__content__grid"
            container
            item
            justify="flex-end"
            lg={6}
          >
            <Box id="about__grid__content__grid__graph">
              {graphItems.map((graphItem) => (
                <Grid
                  key={graphItem.key}
                  container
                  id={graphItem.key}
                  className="about__grid__content__grid__graph__item"
                >
                  <Grid
                    className="about__grid__content__grid__graph__item__circles"
                    container
                    lg={3}
                  >
                    <CircularProgressWithLabel
                      value={graphItem.circleRate}
                      size={150}
                      textsize={30}
                      customcolor={graphItem.circleColor}
                    />
                  </Grid>
                  <Grid
                    className="about__grid__content__grid__graph__item__contents"
                    container
                    lg={9}
                  >
                    <Typography
                      className="about__grid__content__grid__graph__item__contents__titles"
                      variant="h4"
                    >
                      {graphItem.title}
                    </Typography>
                    <Typography className="about__grid__content__grid__graph__item__contents__captions">
                      {graphItem.caption}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Grid>
        </Box>
      </Grid>
    </section>
  );
};

export default About;
