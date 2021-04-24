import React from "react";
import { Grid, Box, Typography, InputBase, Button } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { colorTheme } from "../../styles/themes";
import SectionTitle from "../../components/SectionTitle";
import "./styles.css";

const useStyles = makeStyles({
  contactQuestion: {
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  contactInputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  contactInputContent: {
    background: "#E3EDF2",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  contactInputBase: {
    color: "gray",
    width: "100%",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <section id="contact">
      <ThemeProvider theme={colorTheme}>
        <Grid
          id="contact__grid"
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Box
            id="contact__grid__section-title"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            <SectionTitle
              id="contact__grid__section-title__contact"
              title="contact"
            />
          </Box>
          <Box
            id="contact__grid__content"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              className={classes.contactQuestion}
              variant="h5"
              color="primary"
            >
              Have any question or want to discuss something?
            </Typography>

            <Box
              id="contact__grid__content__form"
              display="flex"
              flexDirection="column"
            >
              <Box className={classes.contactInputContainer}>
                <Box className={classes.contactInputContent}>
                  <InputBase
                    className={classes.contactInputBase}
                    placeholder="Your name"
                  />
                </Box>
              </Box>

              <Box className={classes.contactInputContainer}>
                <Box className={classes.contactInputContent}>
                  <InputBase
                    className={classes.contactInputBase}
                    placeholder="Your email"
                  />
                </Box>
              </Box>

              <Box className={classes.contactInputContainer}>
                <Box className={classes.contactInputContent}>
                  <InputBase
                    className={classes.contactInputBase}
                    multiline
                    rows={10}
                    placeholder="Your message"
                  />
                </Box>
              </Box>

              <Button
                variant="contained"
                color="primary"
                disableElevation
                style={{ alignSelf: "flex-end" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    </section>
  );
};

export default Contact;
