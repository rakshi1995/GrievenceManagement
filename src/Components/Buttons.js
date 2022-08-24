import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Buttons() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (

    <>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
       ADD
   </button>
    {/* <p className='text-5xl'>Grievence</p> */}
      <Button className='text-5xl' variant="primary" onClick={handleShow}>
        ADD GRIEVENCES
      </Button>
      <Button variant="primary" onClick={handleShow}>
        NO GRIEVENCES
      </Button>


      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>GRIEVENCES</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Grievence type</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Buttons;
