import React, { useEffect, useState } from "react";
import Layout from '../components/Layout/index';
import BackButton from '../siteSetting/components/BackButton';
import { getEngravingCategory } from './../actions/engravingCategory';
import { useDispatch, useSelector } from 'react-redux';
import RenderEngravingCategory from './render/RenderEngravingCategory';
import AddEngravingCategory from './create/AddEngravingCategory';
import { Button } from "@mui/material";
import { MainContainer } from './MainContainer';


const ContainerEngravingCategoryPage = () => {
    const categoryEngraving = useSelector((state) => state.engravingCategory.engravingCategory)
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState(null)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    console.log("categoryEngraving", categoryEngraving)

    return (
        <MainContainer
            sidebar
            backButton
            fullFunctional
            get={getEngravingCategory}
            handleShow={handleShow}
        >

            <RenderEngravingCategory
                categoryEngraving={categoryEngraving}
                setCurrentId={setCurrentId}
                setShow={setShow}
            />
            <AddEngravingCategory
                show={show}
                handleClose={handleClose}
                setCurrentId={setCurrentId}
                currentId={currentId}
            />
        </MainContainer>
    )
}

export default ContainerEngravingCategoryPage