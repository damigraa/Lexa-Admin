import React from 'react'
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { Search, Sort, Tabs } from './Component';
import { Container, Row, Col } from "react-bootstrap";
import { setFileView } from "../reducers/product.reducer";
import BackButton from '../siteSetting/components/BackButton';


export const MainContainer = (props) => {
    const dispatch = useDispatch();
    if (!props) {
        return null
    }
    return (
        <Layout sidebar>
            <Container fluid={props.fluid} >
               {props.backButtonProduct && <BackButton
                    text="Назад"
                    href="containerProductPage"
                />}
                <Row>
                    <Col md={12}>
                        <h1 style={{ textAlign: "left", marginBottom: "26px" }}>{props.title}</h1>
                    </Col>
                </Row>
                {props.tabs && <Tabs />}
                {props.fullFunctional ? <Row>
                    <Col md={12}>
                        <div className="disk">
                            <button className="disk__upload-label" onClick={props.handleShow}>
                                {props.buttonText || "Добавить"}
                            </button>
                            <Search
                                search={props.search}
                                get={props.get}
                            />
                            <Sort
                                productSort={props.productSort}
                                get={props.get}
                            />
                            <button
                                className="disk__plate"
                                onClick={() => dispatch(setFileView('plate'))}
                            />
                            <button
                                className="disk__list"
                                onClick={() => dispatch(setFileView('list'))}
                            />
                        </div>

                    </Col>
                </Row> :
                    <Row>
                        <Col md={12}>
                            <div className="disk">
                                <Search
                                    search={props.search}
                                    get={props.get}
                                />
                                <Sort
                                    productSort={props.productSort}
                                    get={props.get}
                                />
                            </div>

                        </Col>
                    </Row>
                }
                {props.children}
            </Container>
        </Layout>
    )
}
