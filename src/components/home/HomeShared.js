import React from "react"
import classNames from "classnames";
import {MetaData, CustomHeader, CustomButton, Title} from "../"
import HomeEvents from "./HomeEvents";

export function HomepageHeadingShared() {
  return (
      <div>
        <MetaData title={'Columbia Virtual Campus'}/>
        <CustomHeader active={''} brand={''}/>
      </div>
  );
};

export function HomepageLandingShared({styles}) {
  const manual = styles;
  return (
      <div className={classNames(manual.landing)}>
        <div className={classNames(manual.landingText)}>
          <h1 className={classNames(manual.toAll, manual.toAllSecondary)}>
            Stay connected through
          </h1>
          <h1 className={classNames(manual.toAll, manual.toAllPrimary)}>
            Columbia Virtual Campus
          </h1>
          <h1 className={classNames(manual.toAllSubHeading)}>
            Navigate Columbia and Barnard by keeping track of upcoming virtual events and online resources
          </h1>
          <CustomButton href={"/events"} text={'EXPLORE'} color={"orange"} size={"large"}/>
        </div>
      </div>
  );
};

export function HomepageUpcomingEvents({styles, Classes}) {
  const manual = styles;
  const classes = Classes;

  return (
      <div className={classNames(classes.main, manual.eventsSection)} style={{textAlign:'left',  background: "transparent"}}>
        <div className={classes.container} id="explore">
          <Title color={"blue"}>Upcoming Events</Title>
          <div style={{textAlign: "center"}}>
            <h1 className={classNames(manual.toAllSubHeadingUpEvents)}>
              Do you or your club want to host your own event on Columbia Virtual Campus? Answer some short questions to get started!
            </h1>
          </div>
          <div style={{textAlign:'center'}}>
            <CustomButton href={'https://forms.gle/fzKvSZqkAVNN6cHY6'} text={'HOST A NEW EVENT'}
                          color={"orange"} size={"large"}/>
            <div style={{marginBottom: "40px"}}/>
          </div>
          <HomeEvents/>
          <div style={{marginBottom: "100px"}}/>
        </div>
      </div>
  );
};
