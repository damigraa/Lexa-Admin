import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEngraving } from '../../actions'
import Loader from "../../components/Loader"
import { generatePublicUrl } from '../../urlConfig'




const RenderEngraving = ({ engraving }) => {
    const dispatch = useDispatch()

    return (
        <div>
            {!engraving > 0 ? <Loader /> :
                engraving.map((eng) =>
                    <div key={eng._id}>
                        <div style={{ margin: "20px" }}>
                            <h3><span style={{ color: "#fff" }}>Основной заголовок - </span>{eng.heading || "-----"}</h3>
                            <h3><span style={{ color: "#fff" }}>Заголовок - </span> {eng.title || "-----"}</h3>
                            <h3><span style={{ color: "#fff" }}>Подробнее - </span> {eng.description || "-----"}</h3>
                            <h3><span style={{ color: "#fff" }}>О фотографиях - </span> {eng.imageTitle || "-----"}</h3>
                            {/* <h3><span style={{ color: "#fff" }}>Список - </span> {eng.textList.map((item, index) => <div>{`${index}: ${item}`}</div>) || "-----"}</h3> */}
                            <img
                                style={{ width: "120px", height: "210" }}
                                src={generatePublicUrl(eng.engImage) }
                                alt={eng.imageTitle} />
                        </div>
                        <button onClick={() => dispatch(deleteEngraving(eng._id))}>
                            Удалить
                        </button>
                    </div>

                )}
        </div>
    )
}

export default RenderEngraving