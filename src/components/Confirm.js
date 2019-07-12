import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

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
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <List>
                    <ListItem
                        primaryText="First Name"//label
                        secondaryText={ firstName } //data from firstNamr
                    />
                    <ListItem
                        primaryText="Last Name"//label
                        secondaryText={ lastName } //data from firstNamr
                    />
                    <ListItem
                        primaryText="Email"//label
                        secondaryText={ email } //data from firstNamr
                    />
                    <ListItem
                        primaryText="Occupation"//label
                        secondaryText={ occupation } //data from firstNamr
                    />
                    <ListItem
                        primaryText="City"//label
                        secondaryText={ city } //data from firstNamr
                    />
                    <ListItem
                        primaryText="Bio"//label
                        secondaryText={ bio } //data from firstNamr
                    />
                    </List>
                    
                    
                    <br/>
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false} //just the color
                        style={styles.button}
                        onClick={this.back}
                    />
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}