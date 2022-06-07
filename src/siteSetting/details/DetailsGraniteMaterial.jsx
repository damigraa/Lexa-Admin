import React from 'react'
import { Row, Col } from "react-bootstrap";
import Modal from "../../components/UI/Modal";
import { generatePublicUrl } from '../../urlConfig'


export const DetailsGraniteMaterial = ({ materialDetailModal, setMaterialDetailModal, materialDetails }) => {
    if (!materialDetails) {
        return null;
    }

    return (
        <Modal
            show={materialDetailModal}
            handleClose={() => setMaterialDetailModal(false)}
            modalTitle={"Подробное описание"}
            size="lg"
        >
            <Row>
                <Col md="6">
                    <label className="key">Имя</label>
                    <p className="value">{materialDetails.name}</p>
                </Col>
                <Col md="6">
                    <label className="key">Заголовок</label>
                    <p className="value">{materialDetails.title}</p>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <label className="key">Быстрый переход</label>
                    <p className="value">{materialDetails.buttonHref}</p>
                </Col>
                <Col md="6">
                    <label className="key">Заголовок преимущества</label>
                    <p className="value">{materialDetails.advantage}</p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Список</label>
                    <div className="value">{materialDetails.list.map((item, index) => <div>{`${index + 1}: ${item}`}</div>)}</div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Подробное Описание</label>
                    <p className="value">{materialDetails.description}</p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Цвет камня</label>
                    <p className="value">{materialDetails.colorText}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="key">Фотографии</label>
                    <div style={{ display: "flex" }}>
                        <div className="productImgContainer">
                            <img src={materialDetails.graniteImg} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
}
