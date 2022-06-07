import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteChooseMemorialPhotos } from '../../actions'
import Loader from "../../components/Loader"




const RenderChooseMemorialPhotos = (props) => {
    const dispatch = useDispatch()

    const { chooseMemorialPhotos } = props

    if (chooseMemorialPhotos.length === 0) {
        return (
            <Loader />
        )
    }
    return (
        <div>

            {chooseMemorialPhotos.length > 0 ?
                chooseMemorialPhotos.map((c) =>
                    <div key={c.id}>

                        <span>----------------------</span>
                        <div>Мини-Заголовок: {c.heading || "-------"}</div>
                        <div>Основной заголовок: {c.title || "-------"}</div>
                        <div>Подробнее: {c.description || "-------"}</div>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                const payload = {
                                    chooseMemorialPhotosId: c._id,
                                };
                                dispatch(deleteChooseMemorialPhotos(payload));
                            }}
                        >
                            Удалить
                </button>
                    </div>

                ) : "Пока что пусто"
            }
        </div>
    )
}

export default RenderChooseMemorialPhotos