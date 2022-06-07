import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import { generatePublicUrl } from '../../urlConfig';
import Modal from '../../components/UI/Modal/index';


export const DetailsBlog = ({ blogDetailModal, setBlogDetailModal, blogDetails }) => {
    if (!blogDetails) {
        return null;
    }

    return (
        <Modal
            show={blogDetailModal}
            handleClose={() => setBlogDetailModal(false)}
            modalTitle={"Подробное описание"}
            size="lg"
        >
            <Row>
                <Col md="6">
                    <label className="key">Заголовок</label>
                    <p className="value">{blogDetails.title}</p>
                </Col>
                <Col md="6">
                    <label className="key">Артикул</label>
                    <p className="value">{blogDetails.slug}</p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Подробное Описание</label>
                    <p className="value">{blogDetails.description}</p>
                </Col>

            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Видео</label>
                    <p className="value">{blogDetails.videoHref}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="key">Фотографии</label>
                    <div style={{ display: "flex" }}>
                        {blogDetails.images.map((picture) => (
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
