import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function PostModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //HANDLECLICK PAS ENCORE FINI ***
  const handleClick = () => {
    console.log('excuse enregistrée!');
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Créer sa propre excuse
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Quelle est votre excuse ??</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="post-excuse">
              <Form.Label>Ecrivez votre excuse ici</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Enregistrer votre excuse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostModal;