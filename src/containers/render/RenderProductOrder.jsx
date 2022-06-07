import React from 'react'
import { generatePublicUrl } from '../../urlConfig'

const RenderProductOrder = ({ orderItem, orderProduct, item }) => {

    return (
        <div className="col-sm-8" key={item?._id}>
            <div className="row ">
                <div className="col-2">
                    <div className='order__orderImg'>
                        {/* <img className=' ' src={generatePublicUrl(item?.productPictures[0]?.img)} alt={item?.name} /> */}
                    </div>
                </div>

                <div className="col-4">
                    <a href='#'>
                        {item?.name}
                    </a>
                </div>
                <div className="col-2">
                    <span className="title">Цена</span>
                    <div className="value">{item?.price}</div>
                </div>
                <div className="col-2">
                    <span className="title">Количество</span>
                    <div className="value">{orderItem?.items.length}</div>
                </div>
                <div className="col-2">
                    <span className="title">Сумма</span>
                    <div className="value">{orderItem?.totalAmount} руб.</div>
                </div>
            </div>
        </div>
    )
}

export default RenderProductOrder
