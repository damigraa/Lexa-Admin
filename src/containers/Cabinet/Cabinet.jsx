import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { useSelector } from 'react-redux';
import { AiOutlineEdit, AiOutlineMail, FiUser, AiOutlineLock } from 'react-icons/all'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import EditCabinetModal from './EditCabinetModal';
import RenderDropdownDetails from './../../components/DropdownDetails/RenderDropdownDetails';
const Cabinet = (props) => {
    const user = useSelector((state) => state.auth.user);
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }
    const items = [
        {
            icon: <FiUser size="25px" />,
            text: "Личные данные",
            button: <button
                className="dropdownDetails__button"
                onClick={handleShow}
            >
                Редактировать
            </button>,
            content: <div>
                <Row>
                    <Col md="6">
                        <label className="key">Имя</label>
                        <p className="value">{user.firstName}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Фамилия</label>
                        <p className="value">{user.lastName}</p>
                    </Col>
                </Row>

                <Row>
                    <Col md="6">
                        <label className="key">Пол</label>
                        <p className="value">Мужской</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Дата Рождения</label>
                        <p className="value">18.06.1995</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Роль</label>
                        <p className="value">{user.role}</p>
                    </Col>
                </Row>
            </div>
        },
        {
            icon: <AiOutlineMail size="25px" />,
            text: "Контакты",
            button: <button
                className="dropdownDetails__button"
                onClick={handleShow}
            >
                Редактировать
            </button>,
            content: <div>
                <Row>
                    <Col md="6">
                        <label className="key">Подтверженный телефон</label>
                        <p className="value">+70537513915</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Дополнительный телефон</label>
                        <p className="value">+79654353213</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="value">{user.email}</p>
                    </Col>
                </Row>
            </div>
        },
        {
            icon: <AiOutlineLock size="25px" />,
            text: "Логин",
            content: <div>
                <Row>
                    <Col md="6">
                        <label className="key">Логин (Мобильный телефон)</label>
                        <p className="value">+70537513915</p>
                        <div className="dropdownDetails__edit-login-container"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="dropdownDetails__edit-login-icon">
                                <AiOutlineEdit size='20px' />
                            </div>
                            <div className="dropdownDetails__edit-login-text"
                                onClick={handleShow}
                            >
                                Изменить
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <label className="key">Логин(Email)</label>
                        <p className="value">+79654353213</p>
                        <div className="dropdownDetails__edit-login-container"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="dropdownDetails__edit-login-icon">
                                <AiOutlineEdit size='20px' />
                            </div>
                            <div className="dropdownDetails__edit-login-text"
                                onClick={handleShow}
                            >

                                Изменить
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        },

    ]


    return (
        <Layout sidebar>
            <div>
                <h2 className="my-4">Личные данные</h2>
                <RenderDropdownDetails items={items} handleShow={handleShow} />
            </div>

            <EditCabinetModal show={show} handleClose={handleClose} />
        </Layout>

    )
}

export default Cabinet
