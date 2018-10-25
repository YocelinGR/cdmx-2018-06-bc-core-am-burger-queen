import { auth} from './firebase';
// Sign UP
export const doCreateUserWithEmailAndPasword = (email,password) =>
    auth.createUserWithEmailAndPasword(email, password);

// Sign in
export const doSignInWithEmailAndPasword = (email,password) =>
    auth.signInWithEmailAndPasword(email, password);

// Sign out
export const doSignOut = () => 
    auth.signOut();

//Password reset
export const doPassordReset = (email) => 
    auth.sendPasswordResetEmail(email);

// Password Change

export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);