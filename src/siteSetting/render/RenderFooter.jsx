import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteFooter } from '../../actions';
import Loader from '../../components/Loader';
import { generatePublicUrl } from '../../urlConfig';

export const RenderFooter = ({ setCurrentId, setShow, footer }) => {
    const dispatch = useDispatch()


    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }

    return (
        <div>
            <div>
                {!footer ? <Loader /> :
                    footer.map((item) =>
                        <div style={{ margin: "20px" }} key={item._id}>
                            <div style={{ width: "500px", }} >
                                <img style={{ width: "400px", }} src={generatePublicUrl(item.img)} />

                            </div>
                            <h3>Заголовок: {item.title || null}</h3>

                            <h3>Описание: {item.description || null}</h3>
                            <button
                                onClick={() => {
                                    dispatch(deleteFooter(item._id));
                                }}
                            >
                                Удалить
                            </button>
                            <button onClick={() => Edit(item)}>Редактировать</button>
                        </div>
                    )
                }

            </div>

        </div >
    )
}
