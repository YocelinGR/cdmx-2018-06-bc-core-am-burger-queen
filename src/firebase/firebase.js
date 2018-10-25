import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyBG5f44i0Z7u08aC4jvzwt5WtOA8FC_Ntw",
    authDomain: "burgerqueen-4582f.firebaseapp.com",
    databaseURL: "https://burgerqueen-4582f.firebaseio.com",
    projectId: "burgerqueen-4582f",
    storageBucket: "burgerqueen-4582f.appspot.com",
    messagingSenderId: "791271137757"
};

const devConfig = {
    apiKey: "AIzaSyBG5f44i0Z7u08aC4jvzwt5WtOA8FC_Ntw",
    authDomain: "burgerqueen-4582f.firebaseapp.com",
    databaseURL: "https://burgerqueen-4582f.firebaseio.com",
    projectId: "burgerqueen-4582f",
    storageBucket: "burgerqueen-4582f.appspot.com",
    messagingSenderId: "791271137757"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if(!firebase.apps.length) {
    firebase.inizializeApp(config);
}
const db= firebase.database();
const auth=firebase.auth();

export {
    db,
    auth,
};
