import React from 'react'
import Modal from '../../components/UI/Modal'
import Input from './../../components/UI/Input/index';
const EditCabinetModal = ({ show, handleClose }) => {


    return (
        <Modal
            modalTitle="Форма Для удаления"
            show={show}
            handleClose={handleClose}
        >

            <Input
                label="Заголовок"
                name={"title"}
                // value={formFooter.title}
                placeholder={"Заголовок"}
                // onChange={changeHandler}
            />

            <Input
                label="Описание"
                // value={formFooter.description}
                placeholder={"Введите описание"}
                name={"description"}
                // onChange={changeHandler}
            />
        </Modal>
    )
}

export default EditCabinetModal
