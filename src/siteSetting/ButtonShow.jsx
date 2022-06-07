import React from 'react'
import { IoIosAdd } from 'react-icons/io';

export const ButtonShow = (props) => {


    return (
        <>
            <button
                className="btn btn-secondary"
                onClick={props.setShow}>
                <IoIosAdd /> <span>Добавить</span>
            </button>
        </>
    )
}
