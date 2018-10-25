import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "process.env.AIzaSyBG5f44i0Z7u08aC4jvzwt5WtOA8FC_Ntw",
    authDomain: "process.env.burgerqueen-4582f.firebaseapp.com",
    databaseURL: "process.env.https://burgerqueen-4582f.firebaseio.com",
    projectId: "process.env.burgerqueen-4582f",
    storageBucket: "process.env.burgerqueen-4582f.appspot.com",
    messagingSenderId: "process.env.791271137757",
};

const devConfig = {
    apiKey: "process.env.AIzaSyBG5f44i0Z7u08aC4jvzwt5WtOA8FC_Ntw",
    authDomain: "process.env.burgerqueen-4582f.firebaseapp.com",
    databaseURL: "process.env.https://burgerqueen-4582f.firebaseio.com",
    projectId: "process.env.burgerqueen-4582f",
    storageBucket: "process.env.burgerqueen-4582f.appspot.com",
    messagingSenderId: "process.env.791271137757",
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if(!firebase.apps.length) {
    firebase.initializeApp(config);
}
const db= firebase.database();
const auth=firebase.auth();

export {
    db,
    auth,
};
