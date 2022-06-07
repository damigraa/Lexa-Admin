import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePromotion } from '../../actions';
import Loader from '../../components/Loader';
import { generatePublicUrl } from '../../urlConfig';
import { updatePromotion } from './../../actions/components/promotions';

export const RenderPromotion = ({ promotion, setCurrentId, setShow }) => {
    const dispatch = useDispatch()


    if (!promotion) {
        return (
            <Loader />
        )
    }

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {promotion ?
                promotion.map((item) =>
                    <div className="col-sm-3" key={item._id} style={{ textAlign: "center", height: "220px", paddingTop: "20px", margin: "auto" }}>
                        <img style={{ width: "40px", height: "40px" }} src={generatePublicUrl(item.iconImg)} />
                        <div>{item.title || null}</div>
                        <div>{item.description || null}</div>
                        <button
                            onClick={() => {
                                const payload = {
                                    promotionId: item._id,
                                };
                                dispatch(deletePromotion(payload));
                            }}
                        >
                            Удалить
                        </button>
                        <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                    </div>
                ) : <h2>"Акций пока что нет..."</h2>
            }
        </div >
    )
}
