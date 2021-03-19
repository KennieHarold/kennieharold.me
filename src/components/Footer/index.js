import React from "react";
import { Box, Typography, Fab } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import bxlLinkedin from "@iconify/icons-bx/bxl-linkedin";
import bxlFacebook from "@iconify/icons-bx/bxl-facebook";
import bxlGithub from "@iconify/icons-bx/bxl-github";
import emailSolid from "@iconify/icons-clarity/email-solid";
import arrowheadUpOutline from "@iconify/icons-eva/arrowhead-up-outline";
import { colorTheme } from "../../styles/themes";
import "./styles.css";

const useStyles = makeStyles({
  footerFab: {
    position: "absolute",
    marginTop: -28,
  },
  footerFabIcon: {
    color: "white",
    fontSize: "2rem",
  },
  footerIconContainer: {
    width: 50,
    height: 50,
    background: "rgba(0, 0, 0, 0.25)",
    borderRadius: 5,
    cursor: "pointer",
    marginLeft: 10,
    marginRight: 10,
  },
  foooterIcon: {
    fontSize: "2rem",
    color: "white",
  },
});

const linkItems = [
  {
    href: "https://linkedin.com/in/kennieharoldmantac",
    icon: bxlLinkedin,
  },
  {
    href: "https://facebook.com/kennieharold",
    icon: bxlFacebook,
  },
  {
    href: "https://github.com/KennieHarold",
    icon: bxlGithub,
  },
  {
    href: "mailto:kennie.harold@gmail.com",
    icon: emailSolid,
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={colorTheme}>
      <Box id="footer">
        <Fab
          onClick={() => window.scrollTo(0, 0)}
          className={classes.footerFab}
          color="secondary"
        >
          <Icon className={classes.footerFabIcon} icon={arrowheadUpOutline} />
        </Fab>

        <Box id="footer__content">
          <Box display="flex" flexDirection="row">
            {linkItems.map((linkItem) => (
              <a href={linkItem.href} target="blank">
                <Box
                  id="footer__content__icon-container"
                  className={classes.footerIconContainer}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon className={classes.foooterIcon} icon={linkItem.icon} />
                </Box>
              </a>
            ))}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="Center"
            style={{ marginTop: 50 }}
          >
            <Typography
              variant="caption"
              style={{ color: "lightgray", marginBottom: 10 }}
            >
              Design and created by me and Khryss Joy &#169; 2021
            </Typography>

            <Typography variant="caption" style={{ color: "lightgray" }}>
              Made with React and Materia-UI
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
