import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import landingImage from "../../assets/images/home/graphic.png";
import styles from "../../assets/material-kit-assets/jss/material-kit-react/views/landingPage.js";
import {HomepageHeadingShared, HomepageLandingShared, HomepageUpcomingEvents} from "./HomeShared";


const useStyles = makeStyles(styles);

const manualPortrait = makeStyles(() => ({
  toAll: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '1.2rem',
    fontSize: '1.5rem',
    color:'#0072CE',
  },
  toAllSubHeading: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '.75rem',
    maxWidth: '69%',
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    lineHeight: '18px',
    color:'#000000',
  },
  toAllSubHeadingUpEvents: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '.84rem',
    marginTop: "1rem",
    marginBottom: "1.5rem",
    maxWidth: '93%',
    margin: "auto",
    color:'#000000',
  },
  toAllSecondary: {
    color: "#BFD8E9",
    lineHeight: ".2rem",
  },
  buttonSpan:{
    paddingLeft: "1px",
    paddingRight: "1px",
    color: '#FB750D',
  },
  landingText:{
    margin: '0',
    float:'left',
    marginLeft: '5%',
    marginTop: "20%" ,
    textAlign:'left',
    width: 'auto'
  },
  landing: {
    background: `url(${landingImage})`,
    backgroundSize: '110% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '97% bottom',
    height: "70vh",
    width: "100%"
  },
  button:{
    background: "#FFFFFF",
    border: "1px solid #FB750D",
    boxSizing: "border-box",
    borderRadius: "10px",
  },
  eventsSection: {
    position:'relative',
    left:'0px',
    backgroundColor:'transparent',
  },

}));


const manualLandscape = makeStyles(() => ({
  toAll: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '1.2rem',
    fontSize: '1.5rem',
    color:'#0072CE',
  },
  toAllSubHeading: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '.75rem',
    maxWidth: '50%',
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    lineHeight: '18px',
    color:'#000000',
  },
  toAllSubHeadingUpEvents: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '.84rem',
    marginTop: "1rem",
    marginBottom: "1.5rem",
    maxWidth: '93%',
    margin: "auto",
    color:'#000000',
  },
  toAllSecondary: {
    color: "#BFD8E9",
    lineHeight: ".2rem",
  },
  buttonSpan:{
    paddingLeft: "1px",
    paddingRight: "1px",
    color: '#FB750D',
  },
  landingText:{
    margin: '0',
    float:'left',
    marginLeft: '12%',
    marginTop: "3%" ,
    textAlign:'left',
    width: 'auto'
  },
  landing: {
    background: `url(${landingImage})`,
    backgroundSize: '52% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% bottom',
    height: "80vh",
    width: "100%"
  },
  button:{
    background: "#FFFFFF",
    border: "1px solid #FB750D",
    boxSizing: "border-box",
    borderRadius: "10px",
  },
  eventsSection: {
    position:'relative',
    left:'0px',
    backgroundColor:'transparent',
  },

}));
export default function HomeMobile({isLandscape}) {
  const classes = useStyles();
  let manual;
  if (isLandscape) {
    manual = manualLandscape();
  } else {
    manual = manualPortrait();
  }
  return (
      <div style={{background: "white"}}>

        <HomepageHeadingShared />
        <HomepageLandingShared styles={manual} />
        <div style={{marginBottom: "2.5vh", background: "transparent"}} />
        <HomepageUpcomingEvents styles={manual} Classes={classes} />

      </div>
  )
};