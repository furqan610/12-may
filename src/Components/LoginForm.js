import React, {Component} from "react";
import {Card , CardSection, Input, CustomButton} from "./common";
import {connect} from "react-redux";
import {emailChanged} from "../actions";

class LoginForm extends Component {
    onEmailChange(text){

    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="user@gmail.com" onChangeText={this.onEmailChange.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                   />
                </CardSection>
                <CardSection>
                    <CustomButton>
                        Sign In
                    </CustomButton>
                    </CardSection>
            </Card>
        );
    }
}

export default connect(null, emailChanged)(LoginForm);