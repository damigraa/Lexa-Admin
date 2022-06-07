import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import { generatePublicUrl } from '../../urlConfig';
import Modal from '../../components/UI/Modal/index';


export const DetailsCeramic = ({ ceramicsDetailsModal, setCeramicsDetailModal, ceramicsDetails }) => {
    if (!ceramicsDetails) {
        return null;
    }

    return (
        <Modal
            show={ceramicsDetailsModal}
            handleClose={() => setCeramicsDetailModal(false)}
            modalTitle={"Подробное описание"}
            size="lg"
        >
            <Row>
                <Col md="6">
                    <label className="key">Название</label>
                    <p className="value">{ceramicsDetails.name}</p>
                </Col>
                <Col md="6">
                    <label className="key">Цена</label>
                    <p className="value">От {ceramicsDetails.price} руб.</p>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <label className="key">Размер</label>
                    <p className="value">{ceramicsDetails.size}</p>
                </Col>
                <Col md="6">
                    <label className="key">Вес</label>
                    <p className="value">{ceramicsDetails.weight}</p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Подробное Описание</label>
                    <p className="value">{ceramicsDetails.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="key">Фотографии</label>
                    <div style={{ display: "flex" }}>
                        {ceramicsDetails.ceramicsPictures.map((ceramics) => (
                            <div className="productImgContainer">
                                <img src={generatePublicUrl(ceramics.img)} />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Modal>
    );
}
