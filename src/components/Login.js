import React, { Component } from "react";
import app from "../firebaseConfig";
import "firebase/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      email: "",
      password: "",
    };
    handleUserSubmit = () => {
      app
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
          this.state.email = userCredential.user;
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
        });
    };
  }
  login() {
    const provider = new app.auth.GoogleAuthProvider();
    console.log(provider);
  }
  loginFace() {
    const providerFace = new app.auth.FacebookAuthProvider().then((result) => {
      console.log(result);
    });
    app.auth().signInWithPopup(providerFace);
  }

  render() {
    return (
      <div>
        <div className="card  w-50">
          <div className="card-header bg-secondary text-light text-center">
            LOGIN
          </div>
          <div className="card-body">
            <h5 className="card-title">Inicie sesión </h5>
            <div>
              <form>
                <label>Usuario</label>
                <input
                  className="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                ></input>
                <label className="mt-3">Contraseña</label>
                <input
                  className="form-control  "
                  onChange={(e) => this.setState({ password: e.target.value })}
                ></input>
                <button
                  className="btn tbn-primary"
                  onClick={this.handleUserSubmit}
                >
                  Ingresar
                </button>
              </form>
              <button
                className="btn btn-outline-primary mr-2"
                onClick={this.login}
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
      </div>
    );
  }
}
export default Login;
