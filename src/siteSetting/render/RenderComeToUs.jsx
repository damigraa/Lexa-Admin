import React from 'react'
import { deleteComeToUs } from '../../actions'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';

export const RenderComeToUs = ({ comeToUs, setCurrentId, handleShow }) => {
    const dispatch = useDispatch()
    if (!comeToUs) {
        return (
            <Loader />
        )
    }

    return (

        <div>
            {comeToUs.length > 0 ?
                comeToUs.map((comeToUs) =>
                    <div key={comeToUs._id}>
                        <div style={{ margin: "20px" }}>
                            <h3><span style={{ color: "#fff" }}>Заголовок - </span>{comeToUs.heading || "-----"}</h3>
                            <h3><span style={{ color: "#fff" }}>Описание - </span> {comeToUs.description || "-----"}</h3>

                        </div>
                        <div style={{ textAlign: "center" }}>
                        </div>
                        <button className="btn btn-secondary" onClick={() => dispatch(deleteComeToUs(comeToUs._id))}>Удалить</button>
                        <button className="btn btn-secondary" onClick={setCurrentId(comeToUs._id), () => handleShow()}>Редактировать</button>
                    </div>

                ) : null}
        </div>
    )
}
