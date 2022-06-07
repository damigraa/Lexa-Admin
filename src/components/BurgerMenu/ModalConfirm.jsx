import React from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const ModalConfirm = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Если вы действительно хотите выйти, то подтвердите это
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Вернуться обратно
                </Button>
                <Button variant="primary" onClick={props.onClick}>Подтвердить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalConfirm
