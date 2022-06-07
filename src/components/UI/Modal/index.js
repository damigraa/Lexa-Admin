import React from "react";
import { Modal, Button } from "react-bootstrap";

const NewModal = (props) => {
  return (
    <Modal size={props.size} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton={props.closeButton}>
        <Modal.Title>{props.modalTitle || null}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.buttons ? (
          props.buttons.map((btn, index) => (
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ))
        ) : (
          <>

            <Button
              variant="primary"
              style={{ backgroundColor: "red" }}
              className="btn-sm"
              onClick={props.handleClose}

            >
              Закрыть
            </Button>
            <Button
              variant="primary"
              {...props}
              style={{ backgroundColor: "#333" }}
              className="btn-sm"
              onClick={props.onSubmit}

            >
              Подтвердить
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default NewModal;




