import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function MessageOk() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going!</Alert.Heading>
        <p>
          Wellcome to Star Wars . Now you can to see the StarShips.
          ENJOY !!! </p>
        <hr />
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default MessageOk