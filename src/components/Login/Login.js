import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { } from './../../ducks/reducer';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';


class Login extends Component {
  constructor(){
    super();
 
  }
  
  render(){
      return (
          <div className="Login">
            <div className="login-box">
              <h1>Admin Login</h1>
              <div className="login-inputs">
                <input ref='username' type="text" className="login-username" placeholder="username"/>
                <input ref='password' type="text" className="login-password" placeholder="password"/>
                <Link to='/admin' className='link'>
                  <FlatButton 
                      label="Login" 
                      labelStyle={{fontSize: '25px'}}
                      style={{
                          color: 'white', 
                          'font-family': 'spaceage',
                          height: '40px'}}/>
              </Link>
              </div>
            </div>
          </div>
      )
  }
}

function mapStateToProps(state){
    return {
        
    }
  }
  
  export default withRouter(connect(mapStateToProps, { })(Login));