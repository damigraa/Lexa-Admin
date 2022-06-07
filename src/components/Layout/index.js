import React from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';
import BackButton from './../../siteSetting/components/BackButton';

const Layout = (props) => {
  return (
    <>
      <Header />

      {
        props.sidebar ?
          <Container fluid >

            <Row>
              {/* <Sidebar /> */}
              <Col md={12} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
                {props.backButton ? <BackButton
                  text="На главную"
                  href="/"
                /> : null}
                {props.children}
              </Col>
            </Row>
          </Container>
          :
          props.children
      }


    </>
  )

}

export default Layout;