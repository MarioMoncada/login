import React, { Component } from "react";
import app from "../firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userLogged: "",
    };
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleStateEmail = this.handleStateEmail.bind(this);
    this.handleStatePassword = this.handleStatePassword.bind(this);
    this.loggOut = this.loggOut.bind(this);
  }

  handleStateEmail = (e) => {
    this.setState(() => ({
      email: e.target.value,
    }));
  };

  handleStatePassword = (e) => {
    this.setState(() => ({
      password: e.target.value,
    }));
  };

  handleUserSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
    const email = this.state.email;
    const password = this.state.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("soy el nuevo usuario", user);

        // ...
        this.setState(() => ({
          userLogged: user,
        }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error.message);
      });
  }
  loggOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("ya no estoy logeado");
        console.log(auth);
        this.setState(() => ({
          userLogged: 0,
        }));
      })
      .catch((error) => {
        // An error happened.
      });
  }
  loginWithGoogle(e) {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // ...
        this.setState(() => ({
          userLogged: user,
        }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  loginFace() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(user);
        this.setState(() => ({
          userLogged: user,
        }));
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  }

  render() {
    const isLoggedIn = this.state.userLogged;
    return (
      <div>
        {isLoggedIn == "" && (
          <div className="card  w-50 m-auto mt-5">
            <div className="card-header bg-secondary text-light text-center">
              LOGIN
            </div>
            <div className="card-body  ">
              <h5 className="card-title">Inicie sesión {isLoggedIn.email}</h5>

              <div>
                <form>
                  <label>Usuario </label>
                  <input
                    className="form-control"
                    onChange={this.handleStateEmail}
                  ></input>
                  <label className="mt-3">Contraseña</label>
                  <input
                    type="password"
                    className="form-control  "
                    onChange={this.handleStatePassword}
                  ></input>
                  <button
                    className="btn btn-primary m-3"
                    onClick={this.handleUserSubmit}
                  >
                    Ingresar
                  </button>
                </form>
                <button
                  className="btn btn-outline-primary mr-2"
                  onClick={this.loginWithGoogle}
                >
                  Inicia sesión con Google
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={this.loginFace}
                >
                  Inicia sesión con Facebook
                </button>
              </div>
            </div>
          </div>
        )}
        {isLoggedIn !== "" && isLoggedIn !== 0 && (
          <div className="alert alert-danger">
            <h1>
              Hola {this.state.userLogged.email} Estamos felices de tenerte de
              vuelta
            </h1>
            <button className="btn btn-danger ml-5" onClick={this.loggOut}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Login;
