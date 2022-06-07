import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEngraving } from '../../actions';
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export const AddEngraving = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch()

    const [formEngraving, setFormEngraving] = useState({
        heading: "",
        title: "",
        description: "",
        imageTitle: "",
        imageTitle: "",
        engImages: "",
        listText: ''
    })
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), listText: '' },
    ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEngraving(inputFields.listText)).then(() => handleClose());

        console.log("InputFields", inputFields);
    };
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }




    const submitEngravingForm = () => {
        const form = new FormData();
        form.append("heading", formEngraving.heading);
        form.append("title", formEngraving.title);
        form.append("description", formEngraving.description);
        form.append("imageTitle", formEngraving.imageTitle);
        form.append("engImage", formEngraving.engImages);
        form.append("listText", formEngraving.listText);
        // form.append("listText", inputFields);
        dispatch(addEngraving(form)).then(() => handleClose());
    };
    const changeHandler = event => {
        setFormEngraving({ ...formEngraving, [event.target.name]: event.target.value })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить Категорию гравировка"}
            onSubmit={submitEngravingForm}
        >
            <Input
                label="Главный Заголовок"
                placeholder={"Введите Главный заголовок"}
                value={formEngraving.heading}
                name={"heading"}
                onChange={changeHandler}
            />
            <Input
                label="Заголовок"
                placeholder={"Введите заголовок"}
                name={"title"}
                value={formEngraving.title}
                onChange={changeHandler}
            />
            <Input
                label="лист"
                placeholder={"Введите лист"}
                value={formEngraving.listText}
                name={"listText"}
                onChange={changeHandler}
            />
            {inputFields.map(inputField => (
                <div key={inputField.id}>
                    <TextField
                        name="listText"
                        label="Список"
                        variant="filled"
                        value={inputField.listText}
                        onChange={event => handleChangeInput(inputField.id, event)}
                    />

                    <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton
                        onClick={handleAddFields}
                    >
                        <AddIcon />
                    </IconButton>
                </div>
            ))}
            <Input
                label="Подробнее"
                placeholder={"Введите описание"}
                value={formEngraving.description}
                name={"description"}
                onChange={changeHandler}
            />


            <Input
                label="Заголовок изображений"
                placeholder={"Введите заголовок к изображениям"}
                value={formEngraving.imageTitle}
                name={"imageTitle"}
                onChange={changeHandler}
            />
            {/* <input
                type="file"
                name="engImages"
                onChange={(e) => setFormEngraving({ ...formEngraving, image: e.target.files[0] })}
            /> */}
            {/* <div>
            {engImages &&engImages.length > 0 ?
                engImages.map((i, index) => (
                    <div key={index}>
                        <img src={i.img} />
                    </div>
                )) : "Здесь должны быть фото..."
            }
        </div> */}
            {/* {console.log("test", engImages)} */}
        </Modal>

    )
}
