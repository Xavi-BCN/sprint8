import loginlogos from "../assets/img/login-logo.png";
import { useContext, useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

//Firebase
import firebaseApp from "../credentials"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
const auth = getAuth(firebaseApp)


const SignIn = () => {

  const [isregistering, setIsregistering] = useState(false)
  // const { setUserGlobal, userGlobal } = useContext(StarshipsContext);

  async function submitHandler(e) {
    e.preventDefault();
    const mail = e.target.formEmail.value;
    const fname = e.target.formFname.value;
    const lname = e.target.formLname.value;
    const pswd = e.target.formPswd.value;
    console.log(mail, fname, lname, pswd);
    // if(isregistering){
      //Si se registra
      const usuario = await createUserWithEmailAndPassword(auth, mail, pswd )
      console.log(usuario);
    // }else{
      // Se inicia sesion
      // signInWithEmailAndPassword(auth, mail, pswd)
    // }
  };


  return (
    <Container>
      <Stack gap={3}>
        <Button
          className="w-50"
          type="button"
          variant="dark"
          data-bs-toggle="modal"
          data-bs-target="#register"
        >
          SIGN IN
        </Button>


        <div
          className="modal fade"
          id="register"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="registerLabel"
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
                <h4 style={{ color: "yellow" }}>CREATE YOUR ACCOUNT</h4>
                <button className=" btn btn-dark "> Back </button>
                <span style={{ color: "white" }}>mail de la persona</span>
              </div>
              <form onSubmit={submitHandler}>
                <Form.Group controlId="formEmail">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control type="email" placeholder="Email Address" />
                  </div>
                </Form.Group>
                <Form.Group controlId="formFname">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control type="text" placeholder="First Name" />
                  </div>
                </Form.Group>
                <Form.Group controlId="formLname">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control type="text" placeholder="Last Name" />
                  </div>
                </Form.Group>
                <Form.Group controlId="formPswd">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control type="password" placeholder="Password" />
                  </div>
                </Form.Group>


                <div className="w-75 mx-auto mb-3">
                  <Button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="form-control btn btn-secondary text-center mb-5"
                  >
                    Create Account
                  </Button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </Stack>
    </Container>
  );

}

export default SignIn