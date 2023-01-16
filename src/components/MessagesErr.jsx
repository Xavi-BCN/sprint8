// import loginlogos from "../assets/img/login-logo.png";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const MessagesErr = ({ error }) => {

  const [show, setShow] = useState(true);

  if (show) {
    // setTimeout(() => {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {error} Try again. 
          </p>
        </Alert>
      );
    // }, "5000")
  }

   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}



export default MessagesErr