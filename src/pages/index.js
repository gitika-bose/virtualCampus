import React from "react"
import {isMobile, isTablet, isEdge, isIE} from "react-device-detect";
import {HomeDesktop, HomeMobile} from '../components'

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: -1, isLandscape: false };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight,
                             isLandscape: window.innerWidth > window.innerHeight ? true : false});
    }

    // TODO: Remove duplicate code in HomeDesktop.js and HomeMobile.js
    render() {
        if (this.state.height == -1) {

            {/* On initial load */}
            return ( <HomeDesktop/> );

        } else if (isTablet) {

            {/* If Tablet: portrait, do mobile component; landscape, render desktop */}
            if (this.state.isLandscape) {
                return ( <HomeDesktop/> );
            } else {
                return ( <HomeMobile isLandscape={this.state.isLandscape}/> );
            }

        } else if (isMobile || (this.state.isLandscape === false && this.state.height > 700) || isIE || isEdge) {

            {/* For mobile component : IE or Edge must go to mobile since they do not support all css */}
            return ( <HomeMobile isLandscape={this.state.isLandscape}/> );

        } else {

            {/* Else: desktop: isBrowser */}
            return ( <HomeDesktop /> )

        }
    }
}

export default Index;