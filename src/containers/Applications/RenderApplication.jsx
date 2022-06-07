import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';


export const RenderApplication = (props) => {
    const { showApplicationDetailsModal } = props
    const applications = useSelector(state => state.application.applications);

    if (applications.length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            <div>
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Мобильный</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">Username</th>
                            <th scope="col">Время</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0
                            ? applications.map((a, index) =>
                                <tr key={a._id}
                                    onClick={() => showApplicationDetailsModal(a)}

                                >
                                    <th scope="row">{index + 1}</th>
                                    <td>{a.contactNumber}</td>
                                    <td>{a.firstName}</td>
                                    <td>{a.lastName}</td>
                                    <td>{a.email}</td>
                                    <td>{a.createdAt.slice(11, 19)}</td>
                                </tr>
                            )
                            : null}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
