import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../actions';
import Loader from './../../components/Loader';
import Modal from "../../components/UI/Modal";
import { Container, Row, Col } from "react-bootstrap";
import { searchUser } from './../../actions/user.actions';
import { MainContainer } from '../MainContainer';


const Users = () => {
    const [userDetailModal, setUserDetailModal] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    const users = useSelector((state) => state.user.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleCloseUserDetailsModal = () => {
        setUserDetailModal(false)
    }

    const showUserDetailsModal = (user) => {
        setUserDetails(user);
        setUserDetailModal(true); 
    };
    const renderUserDetailModal = () => {
        if (!userDetails) {
            return null
        }
        return (
            <Modal
                show={userDetailModal}
                handleClose={handleCloseUserDetailsModal}
                modalTitle={"Подробно про пользователя"}
                size="lg"
            >
                <Row>
                    <Col md="6">
                        <label className="key">Имя</label>
                        <p className="value">{userDetails.firstName}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Фамилия</label>
                        <p className="value">От {userDetails.lastName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Роль</label>
                        <p className="value">{userDetails.role}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="value">{userDetails.email}</p>
                    </Col>
                </Row>
            </Modal>

        )
    }
    const renderUsers = () => {

        if (users.length === 0) {
            return (
                <Loader />
            )
        }

        return (
            <div style={{ marginTop: "20px" }}>
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Роль</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">email</th>
                            <th scope="col">Дата регестрации</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0
                            ? users.map((u, index) =>
                                <tr key={u._id}
                                    onClick={() => showUserDetailsModal(u)}

                                >
                                    <th scope="row">{index + 1}</th>
                                    <td>{u.role}</td>
                                    <td>{u.firstName}</td>
                                    <td>{u.lastName}</td>
                                    <td>{u.email}</td>
                                    <td>20.2.2021</td>
                                    {/* <td>{u.createdAt.slice(11, 19)}</td> */}
                                </tr>
                            )
                            : null}

                    </tbody>
                </table>
            </div>

        )
    }
    return (
        <MainContainer
            search={searchUser}
            get={getUsers}
            title={"Зарегестрированные пользователи"}
        // handleShow={handleShow}
        >
            <Row>
                <Col>
                    {renderUsers()}
                </Col>
            </Row>
            {renderUserDetailModal()}
        </MainContainer>
    )
}

export default Users
