import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getApplication, searchApplication, deleteApplicationById } from './../../actions/application.action';
import Modal from "../../components/UI/Modal";
import { MainContainer } from '../MainContainer';
import { RenderApplication } from './RenderApplication';
import { generatePublicUrl } from '../../urlConfig';

const Applications = (props) => {
    const [applicationDetails, setApplicationDetails] = useState(null);
    const [applicationDetailModal, setApplicationDetailModal] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApplication())
    }, [])

    const showApplicationDetailsModal = (a) => {
        setApplicationDetails(a);
        setApplicationDetailModal(true);
    };
    const handleCloseApplicationDetailsModal = () => {
        setApplicationDetailModal(false);
    };
    const deleteCloseModal = () => {
        dispatch(deleteApplicationById(applicationDetails._id))
        setApplicationDetailModal(false)
    } 
    const renderApplicationDetailsModal = () => {
        if (!applicationDetails) {
            return null;
        }
        return (
            <Modal
                show={applicationDetailModal}
                handleClose={handleCloseApplicationDetailsModal}
                modalTitle={"Детали запроса на звонок"}
                size="lg"
            >
                <Row>
                    <Col md="6">
                        <label className="key">Имя</label>
                        <p className="value">{applicationDetails.firstName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Номер</label>
                        <p className="value">{applicationDetails.contactNumber}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email
                        </label>
                        <p className="value">{applicationDetails.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="key">Описание проблемы</label>
                        <p className="value">{applicationDetails.descriptionProblem}</p>
                    </Col>
                    <Col>
                        <button className="btn btn-secondary" onClick={deleteCloseModal}>Удалить</button>

                    </Col>

                    <img
                        src={generatePublicUrl(applicationDetails.samplePhoto)} style={{ margin: "20px", height: "200px", width: "200px" }} />
                </Row>
            </Modal>
        );
    };

    return (
        <MainContainer
            search={searchApplication}
            get={getApplication}
            title={"Запросы на Звонок"}
        >
            <Row style={{ marginTop: "15px" }}>
                <Col>
                    <RenderApplication
                        showApplicationDetailsModal={showApplicationDetailsModal}
                    />
                </Col>
            </Row>
            {renderApplicationDetailsModal()}
        </MainContainer>
    )
}

export default Applications
