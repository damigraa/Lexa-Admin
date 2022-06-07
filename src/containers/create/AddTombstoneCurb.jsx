

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addTombstoneCurb, updateTombstoneCurb } from '../../actions';


export const AddTombstoneCurb = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const tombstoneCurb = useSelector((state) => currentId ? state.tombstoneCurb.tombstoneCurb.find((item) => item._id === currentId) : null)

    const [img, setImg] = useState([]);

    const [tombstoneCurbForm, setTombstoneCurbForm] = useState({
        name: "",
        size: "",
        price: "",
        description: "",
        weight: ""
    })


    useEffect(() => {
        if (tombstoneCurb) setTombstoneCurbForm(tombstoneCurb)
    }, [tombstoneCurb])


    const submitTombstoneCurbForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateTombstoneCurb(currentId, tombstoneCurbForm))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", tombstoneCurbForm.name);
            form.append("size", tombstoneCurbForm.size);
            form.append("price", tombstoneCurbForm.price);
            form.append("description", tombstoneCurbForm.description);
            form.append("weight", tombstoneCurbForm.weight);
            for (let pic of img) {
                form.append("img", pic);
            }
            dispatch(addTombstoneCurb(form)).then(() => handleClose());
        }

    };



    // function fileUploadHandler(event) {
    //     const files = [...event.target.files]
    //     // files.forEach(file => dispatch(uploadFile(file, currentDir)))
    // }

    const handleProductPictures = (e) => {
        setImg([...img, e.target.files[0]]);
    };

    const clear = () => {
        setCurrentId(null)
        setTombstoneCurbForm({
            name: "",
            size: "",
            price: "",
            description: "",
            weight: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить новое надгробие или цветник"}
            onSubmit={submitTombstoneCurbForm}
        >

            <Input
                label="Название"
                name="name"
                value={tombstoneCurbForm.name}
                placeholder={`Название`}
                onChange={(e) => setTombstoneCurbForm({ ...tombstoneCurbForm, name: e.target.value })}
            />
            <Input
                label="Размер"
                name="size"
                value={tombstoneCurbForm.size}
                placeholder={"Размер"}
                onChange={(e) => setTombstoneCurbForm({ ...tombstoneCurbForm, size: e.target.value })}
            />
            <Input
                label="Цена"
                name="price"
                value={tombstoneCurbForm.price}
                placeholder={"Цена"}
                onChange={(e) => setTombstoneCurbForm({ ...tombstoneCurbForm, price: e.target.value })}
            />
            <Input
                label="Вес"
                name="weight"
                value={tombstoneCurbForm.weight}
                placeholder={"Вес"}
                onChange={(e) => setTombstoneCurbForm({ ...tombstoneCurbForm, weight: e.target.value })}

            />
            <Input
                label="Подробное описание"
                name="description"
                value={tombstoneCurbForm.description}
                placeholder={"Подробное описание"}
                onChange={(e) => setTombstoneCurbForm({ ...tombstoneCurbForm, description: e.target.value })}
            />
            {img.length > 0
                ? img.map((pic, index) => (
                    <div key={index}>{pic.name}</div>
                ))
                : null}
            <input
                type="file"
                name="img"
                onChange={handleProductPictures}
                required
                multiple
            />
            {/* <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input" /> */}

            {/* <button onClick={(e) => clearAddedPhotos(e)}>Удалить фото</button> */}
        </Modal>
    )
}
