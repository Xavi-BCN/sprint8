import loginlogos from "../assets/img/login-logo.png";
import '../styles/SignIn.css'
import { useContext, useState } from "react";
import { Stack, Container, Form, Button, Alert } from "react-bootstrap";
//Context
// import { StarshipsContext } from '../context/StarshipsContext'

//Firebase
import firebaseApp from "../credentials"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
const auth = getAuth(firebaseApp)


const SignIn = () => {

  const [ isempty, setIsempty ] = useState(false)
  // const { setUserGlobal, userGlobal } = useContext(StarshipsContext);
  // const [ warningErrSign , setWarningErrSign] = useState("")

  async function submitHandler(e) {
    e.preventDefault();
    const mail = e.target.formEmail.value;
    const fname = e.target.formFname.value;
    const lname = e.target.formLname.value;
    const pswd = e.target.formPswd.value;
    console.log(mail, fname, lname, pswd);

    if(!mail || !pswd){
      alert('hhhhhh')
      setIsempty(true)
    }
    
       await createUserWithEmailAndPassword(auth, mail, pswd )
        .then((res) => console.log(res))
        .catch(err => {
          alert(err.message);

          
          /* if(err.message === 'Firebase: Error (auth/email-already-in-use).'){
            setWarningErrSign('already-in-use')
            alert('Usuario esta uso')  
          }else if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            setWarningErrSign('Password should be at least 6 characters')
            alert('Password min 6 chars')  
          } */
        });
      };


  return (
    <>
      <Stack gap={3}>
        <Button
          className="btnSignIn w-25"
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
              </div>
              <form onSubmit={submitHandler}>
                <Form.Group controlId="formEmail">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control required type="email" placeholder="Email Address" />
                  </div>
                </Form.Group>
                <Form.Group controlId="formFname">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control type="text" placeholder="First Name (optional)" />
                  </div>
                </Form.Group>
                <Form.Group controlId="formLname">
                  <div className="w-75 mx-auto mb-3">
                    <Form.Control type="text" placeholder="Last Name (optional)" />
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
                    className="form-control btn btn-secondary text-center mb-5"
                    data-bs-dismiss="modal"
                  >
                    Create Account
                  </Button>
                </div>
                {isempty && 
                (<Alert color="primary" variant="danger">
                Please Fill Every Field</Alert>)
                }

              </form>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );

}

export default SignIn