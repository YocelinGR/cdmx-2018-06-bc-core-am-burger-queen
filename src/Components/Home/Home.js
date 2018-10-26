/*import React, { Component } from 'react';

// import { Config } from '../../config'; // eslint-disable-next-line
import './Home.css'
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

//import firebase from 'firebase';
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import NavBar from '../NavBar/NavBar';
//import FoodBar from '../FoodBar/FoodBar';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };/*
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <p>Acceso restringido para usuarios</p>

        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);*/

import React, { Component } from 'react';

import { Config } from '../../config'; // eslint-disable-next-line
import './Home.css'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import NavBar from '../NavBar/NavBar';
import FoodBar from '../FoodBar/FoodBar';
import GetYourOrder from '../GetYourOrder/GetYourOrder';

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
            <h3>Hoy será una gran día de trabajo</h3>
            <h4>Hola: {firebase.auth().currentUser.displayName}</h4>
            {firebase.auth().currentUser.photoURL===null ?
            (<img className = "photo-user" alt = "foto de usuario" src="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-burger-queen/blob/master/assets/waitress-avatar.jpg?raw=true" />) :
            (<img className = "photo-user" alt = "foto de usuario" src= {firebase.auth().currentUser.photoURL} />)}
            <button className = "btn btn-floating lighten-1 btn-user" onClick={() => firebase.auth().signOut()}>Salir</button>
            <FoodBar/>
          </div>
          <div>
            <GetYourOrder />
          </div>
        </div>
        ) : (
        <div>
          <h1>Burguer</h1>
          <h2><strong>Queen</strong></h2>
          <p>Para los amantes de lo bueno</p>
          <img alt ="An hamburguer for the main view" src="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-burger-queen/blob/master/assets/hamb-burgue-circle.png?raw=true" />
            <StyledFirebaseAuth uiConfig= {this.uiConfig} firebaseAuth = {firebase.auth()} />
        </div>
        )}
      </div>
    )
  }
}
export default Home;