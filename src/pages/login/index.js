import React, { PureComponent } from "react";
import { LoginWrapper, LoginBox, Input, Button, CheckboxWrapper, Checkbox, Checkboxlabel } from "./style";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import {actionCreators} from './store';

class Login extends PureComponent {
  render() {
    const {loginStatus, changeLogin} = this.props;      
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
              <Input className='name' placeholder='Full Name'></Input>
              <Input className='password' placeholder='Password'></Input>
              <CheckboxWrapper>
                  <Checkbox/>
                  <Checkboxlabel>Yes! I want to get the most out of Udemy by receiving emails with exclusive deals, personal recommendations and learning tips!</Checkboxlabel>
              </CheckboxWrapper>
              <Button onClick={()=>changeLogin(loginStatus)}>Login</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return(
        <Redirect to='/home'/>
      )
    }      
  }  
}

const mapState = state => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  };
};

const mapDispatch = (dispatch) => ({    
    changeLogin(loginStatus){
      dispatch(actionCreators.changeLogin(loginStatus))
    }
});

export default connect(
    mapState,
    mapDispatch
)(Login);