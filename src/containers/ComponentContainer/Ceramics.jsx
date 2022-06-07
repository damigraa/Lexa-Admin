import React, { useState, useEffect } from 'react'
import { getCeramics } from './../../actions';
import { useDispatch, useSelector } from "react-redux";
import { MainContainer } from './../MainContainer';
import { Container, Row, Col } from 'react-bootstrap';
import { RenderCeramics } from './../render/RenderCeramics';
import { AddCeramic } from './../create/AddCeramic';
import { DetailsCeramic } from './../render/DetailsCeramic';

const Ceramics = () => {

    const [show, setShow] = useState(false);
    const [ceramicsDetailsModal, setCeramicsDetailModal] = useState(false);
    const [ceramicsDetails, setCeramicsDetails] = useState(null);
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();

    const ceramics = useSelector((state) => state.ceramics.ceramics)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    useEffect(() => {
        dispatch(getCeramics())
    }, [])



    const showCeramicsModal = (ceramics) => {
        setCeramicsDetails(ceramics);
        setCeramicsDetailModal(true);
    };
    return (
        <MainContainer
            item={ceramics}
            backButtonProduct
            // productSort
            fullFunctional
            get={getCeramics}
            handleShow={handleShow}
        >
            <Container>
                <Row>
                    <Col>
                        <RenderCeramics
                            showCeramicsModal={showCeramicsModal}
                            setShow={setShow}
                            setCurrentId={setCurrentId}
                            ceramics={ceramics}
                        />
                    </Col>
                </Row>
            </Container>
            <AddCeramic
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <DetailsCeramic
                ceramicsDetailsModal={ceramicsDetailsModal}
                ceramicsDetails={ceramicsDetails}
                setCeramicsDetailModal={setCeramicsDetailModal}
            />
        </MainContainer >
    );
}

export default Ceramics
