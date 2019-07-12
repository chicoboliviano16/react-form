import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export default class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        //process form// where youd send data to backend
         this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep(); 
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <h1>
                        Thank you for your Submission
                    </h1>
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
