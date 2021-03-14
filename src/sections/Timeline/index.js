import React from "react";
import { Grid, Box, Typography, Paper } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import {
  Timeline as Timeline_,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import SectionTitle from "../../components/SectionTitle";
import { colorTheme } from "../../styles/themes";
import "./styles.css";

const useStyles = makeStyles({
  timelineItemPaper: {
    display: "flex",
    flexDirection: "row",
  },
  timelineItemDivider: {
    backgroundColor: "#55CB97",
    width: "10px",
    borderRadius: "4px 0 0 4px",
  },
  timelineItemContainer: {
    padding: 15,
  },
  timelineItemTitle: {
    fontWeight: 700,
    marginBottom: "2rem",
  },
  timelineItemInst: {
    fontWeight: 700,
  },
});

const timelineItems = [
  {
    key: "timelineItem1",
    title: "BS In Computer Science",
    inst: "Garcia College of Technology, Kalibo Aklan",
    date: "June 2015 - April 2019",
  },
  {
    key: "timelineItem2",
    title: "Software Developer",
    inst: "Stacktrek Enterprise, Iloilo City",
    date: "July 2019 - Present",
  },
  {
    key: "timelineItem3",
    title: "Programmer",
    inst: "Outsourcing Virtual Agents",
    date: "January 2020 - June 2020",
  },
];

const Timeline = () => {
  const classes = useStyles();

  return (
    <section id="timeline">
      <ThemeProvider theme={colorTheme}>
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
          >
            <Timeline_ align="alternate">
              {timelineItems.map((timelineItem) => (
                <TimelineItem key={timelineItem.key}>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector color="primary" />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper className={classes.timelineItemPaper} elevation={3}>
                      <Box className={classes.timelineItemDivider} />
                      <Box className={classes.timelineItemContainer}>
                        <Typography
                          className={classes.timelineItemTitle}
                          variant="h6"
                          color="primary"
                        >
                          {timelineItem.title}
                        </Typography>

                        <Typography
                          className={classes.timelineItemInst}
                          color="textSecondary"
                        >
                          {timelineItem.inst}
                        </Typography>
                        <Typography
                          className={classes.timelineItemDate}
                          color="textSecondary"
                        >
                          {timelineItem.date}
                        </Typography>
                      </Box>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline_>
          </Box>
        </Grid>
      </ThemeProvider>
    </section>
  );
};

export default Timeline;
