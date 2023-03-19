import '../entities/user';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';
import { auth } from '../infrastructure/firebase';

const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: './signedin',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
      forceSameDevice: false,
    },
  ],
  tosUrl: './tos',
  privacyPolicyUrl: () => {
    window.location.assign('./privacy-policy');
  },
};

const getSignInUI = () => {
  var ui = firebaseui.auth.AuthUI.getInstance();
  if (!ui) {
    ui = new firebaseui.auth.AuthUI(auth);
  }
  return ui;
};

const SignIn = () => {
  const ui = getSignInUI();
  return (
    <>
      <div id="firebaseui-auth-container" />
      {ui.start('#firebaseui-auth-container', uiConfig)}
    </>
  );
};

export default SignIn;
