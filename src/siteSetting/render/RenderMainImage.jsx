import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteMainImage } from '../../actions';
import Loader from '../../components/Loader';
import { generatePublicUrl } from '../../urlConfig';

export const RenderMainImage = ({ setCurrentId, setShow, mainImage }) => {
    const dispatch = useDispatch()


    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div>
            <div>
                {!mainImage ? <Loader /> :
                    mainImage.map((item) =>
                        <div style={{ margin: "20px" }} key={item._id}>
                            <div style={{ width: "500px", }} >
                                <img style={{ width: "400px", }} src={generatePublicUrl(item.image)} />

                            </div>
                            <h3>Заголовок: {item.header || null}</h3>

                            <h3>Название сайта: {item.name || null}</h3>
                            <h3>Описание: {item.description || null}</h3>
                            <h3>Дополнение: {item.descriptionButton || null}</h3>
                            <h3>Кнопка: {item.buttonText || null}</h3>
                            <button
                                // onClick={() => dispatch(deletePromotion(promotion._id))}
                                onClick={() => {
                                    const payload = {
                                        mainImageId: item._id,
                                    };
                                    dispatch(deleteMainImage(payload));
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
