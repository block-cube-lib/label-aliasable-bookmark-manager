import { useState, useEffect } from 'react';
import { EmailAuthProvider } from 'firebase/auth';
import { app, auth } from '../infrastructure/firebase';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: './signedin',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
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
    <div>
      <div id="firebaseui-auth-container" />
      {ui.start('#firebaseui-auth-container', uiConfig)}
    </div>
  );
};

export default SignIn;
