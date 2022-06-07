import React from 'react'
import { Row } from 'react-bootstrap';

const FooterCabinet = () => {

    return (
        <div className="footerCabinet">
            <Row>
                <Col md="4">
                    <div className="footerCabinet__container">
                        

                        <label className="footerCabinet__">Подтверженный телефон</label>
                        <p className="value">+70537513915</p>

                    </div>
                </Col>
                <Col md="4">
                    <label className="key">Дополнительный телефон</label>
                    <p className="value">+79654353213</p>
                </Col>
            </Row>
        </div>
    )
}

export default FooterCabinet
