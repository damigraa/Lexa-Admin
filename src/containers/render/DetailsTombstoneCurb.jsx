import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import { generatePublicUrl } from '../../urlConfig';
import Modal from '../../components/UI/Modal/index';


export const DetailsTombstoneCurb = ({ tombstoneCurbDetailModal, setTombstoneCurbDetailModal, tombstoneCurbDetails }) => {
    if (!tombstoneCurbDetails) {
        return null;
    }

    return (
        <Modal
            show={tombstoneCurbDetailModal}
            handleClose={() => setTombstoneCurbDetailModal(false)}
            modalTitle={"Подробное описание"}
            size="lg"
        >
            <Row>
                <Col md="6">
                    <label className="key">Название</label>
                    <p className="value">{tombstoneCurbDetails.name}</p>
                </Col>
                <Col md="6">
                    <label className="key">Цена</label>
                    <p className="value">От {tombstoneCurbDetails.price} руб.</p>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <label className="key">Размер</label>
                    <p className="value">{tombstoneCurbDetails.size}</p>
                </Col>
                <Col md="6">
                    <label className="key">Вес</label>
                    <p className="value">{tombstoneCurbDetails.weight}</p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Подробное Описание</label>
                    <p className="value">{tombstoneCurbDetails.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="key">Фотографии</label>
                    <div style={{ display: "flex" }}>
                        {tombstoneCurbDetails.img.map((picture) => (
                            <div className="productImgContainer">
                                <img src={generatePublicUrl(picture.img)} />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Modal>
    );
}
