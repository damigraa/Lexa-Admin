
import React, { useEffect, useState } from 'react'
import { addEngravingCategory, updateEngravingCategory } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/UI/Input';
import NewModal from './../../components/UI/Modal/index';

const AddEngravingCategory = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const engravingCategory = useSelector((state) => currentId ? state.engravingCategory.engravingCategory.find((item) => item._id === currentId) : null)

    const [img, setImg] = useState([]);
    const [engravingCategoryForm, setEngravingCategoryForm] = useState({
        name: ""
    })
    
        useEffect(() => {
            if (engravingCategory) setEngravingCategoryForm(engravingCategory)
        }, [engravingCategory])

    const submitEngravingCategoryForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateEngravingCategory(currentId, engravingCategoryForm))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("name", engravingCategoryForm.name);
            for (let pic of img) {
                form.append("img", pic);
            }
            dispatch(addEngravingCategory(form)).then(() => handleClose());
        }

    };
    const handleProductPictures = (e) => {
        setImg([...img, e.target.files[0]]);
    };

    const clear = () => {
        setCurrentId(null)
        setEngravingCategoryForm({
            name: ""
        })
    }

    return (
        <NewModal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить новую категорию"}
            onSubmit={submitEngravingCategoryForm}
        >

            <Input
                label="Название"
                name="name"
                value={engravingCategoryForm.name}
                placeholder={`Название`}
                onChange={(e) => setEngravingCategoryForm({ ...engravingCategoryForm, name: e.target.value })}
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
            />
        </NewModal>
    )

}
export default AddEngravingCategory
