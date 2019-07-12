//this is a class bas omponent
import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export default class UserForms extends Component {
    state={
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }
    //proceed to next step method

    nextStep = () =>{
        //pulling out the step from the state, so we dont hae to do this.state all the time
        const { step } = this.state;
        this.setState({
            step: step +1
        })
    }
    // go back to previous state
    prevStep = () =>{
        //pulling out the step from the state, so we dont hae to do this.state all the time
        const { step } = this.state;
        this.setState({
            step: step -1
        })
    }
    //handle fields change

    handleChange  = input => e => {
        //take the input and set it to whatever the value is
        this.setState({[input]: e.target.value})
    }




    render() {
        //to figure out what step were one and what component to display
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        //values variable is so we can pass that we pulled out, into the components
        const values = { firstName, lastName, email, occupation, city, bio }


        switch (step){
            case 1:
                return(
                    <FormUserDetails 
                    nextStep={this.nextStep}  //this will increment the step by 1
                    handleChange={this.handleChange} //for inputs
                    values={values}
                    />
                )
            case 2:
                return  (
                    <FormPersonalDetails 
                    nextStep={this.nextStep} 
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                    return  (
                        <Confirm 
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep}
                        values={values}
                        />
                    )
            case 4: 
                return <Success/>
        }
    }
}


