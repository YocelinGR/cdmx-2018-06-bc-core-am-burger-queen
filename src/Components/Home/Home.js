import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import {
  Button, Row, Col,
  Input,
} from 'react-materialize';
import { Config } from '../../config'; 
import './Home.css'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Home extends Component{
  state = { isSignedIn: false}
  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      sigInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user})
      console.log("user", user);
    });
  }

  render() {
    return(
      <div className= "LogInStyle">
        {this.state.isSignedIn ? (
        <div>
          <div className = "user-loged">
            <h3>Hola, hoy serás una gran día de trabajo</h3>
            <h4>Hola: {firebase.auth().currentUser.displayName}</h4>
            {firebase.auth().currentUser.photoURL===null ?
            (<img alt = "foto de usuario" src="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-burger-queen/blob/master/assets/waitress-avatar.jpg?raw=true" />) :
            (<img alt = "foto de usuario" src= {firebase.auth().currentUser.photoURL} />)}
            <button className = "btn btn-floating pink lighten-1" onClick={() => firebase.auth().signOut()}>Salir</button>
          </div>
        </div>
        ) : (
          <StyledFirebaseAuth uiConfig= {this.uiConfig} firebaseAuth = {firebase.auth()} />
        )}
      </div>
    )
  }
}
export default Home;
