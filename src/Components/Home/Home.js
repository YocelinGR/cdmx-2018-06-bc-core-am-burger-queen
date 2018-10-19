import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import {
  Button, Row, Col,
  Input,
} from 'react-materialize';
import { Config } from '../../config';
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
          <div className = "user-loged">
            <h3>Hola, hoy serás una mejor versión de ti misma</h3>
            <h4>Diabeamigo: {firebase.auth().currentUser.displayName}</h4>
            <img alt = "foto de usuario" src= {firebase.auth().currentUser.photoURL} />
            <button className = "btn btn-floating pink lighten-1" onClick={() => firebase.auth().signOut()}>Salir</button>
          </div>
        ) : (
          <StyledFirebaseAuth uiConfig= {this.uiConfig} firebaseAuth = {firebase.auth()} />
        )}
      </div>
    )
  }
}
export default Home;
