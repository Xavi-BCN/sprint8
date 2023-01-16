import loginlogos from "../assets/img/login-logo.png";
import '../styles/Login.css'
// Context
import { StarshipsContext } from "../context/StarshipsContext";
//Components
import MessagesErr from "./MessagesErr";
// import FormSignIn from "./FormSignIn";
// Deps
import { useContext, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

//Firebase

import firebaseApp from "../credentials"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import MessageOk from "./MessageOk";
const auth = getAuth(firebaseApp)



const FormLogin = () => {

  
  const [ warningErr , setWarningErr] = useState("")

  // const { setUserGlobal, userGlobal } = useContext(StarshipsContext);

  async function submitHandler(e) {
    e.preventDefault();
    const mail = e.target.formBasicEmail.value;
    const pswd = e.target.formPswd.value;
    console.log(mail, pswd);
    signInWithEmailAndPassword(auth, mail, pswd)
      .then((res) => alert('Wellcome to StarWars'))
      .catch(err => {setWarningErr(err.message)
      });
  };

  return (
    <>
      
        <Button
          className="btnlogin"
          type="button"
          variant="dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >LOGIN
        </Button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <img
                  className="logosInLogin w-75 mx-auto"
                  src={loginlogos}
                  alt="our logos"
                />
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body w-75 mx-auto">
                <h4 style={{ color: "yellow" }}>ENTER YOUR EMAIL ADDRESS</h4>
              </div>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control required type="email" placeholder="Email Address" />
                  </div>
                </Form.Group>
                
                <Form.Group controlId="formPswd">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control required type="password" placeholder="Password" />
                  </div>
                </Form.Group>
                
                
                  <div className="w-75 mx-auto mb-3">
                    <Button
                      type="submit"
                      // data-bs-dismiss="modal"
                      className="form-control btn btn-secondary text-center mb-5">
                      Continue
                    </Button>
                        { warningErr && <MessagesErr error={warningErr} />}
                  </div>
              </Form>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default FormLogin;
