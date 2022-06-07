import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getEngravingLayoutBySlug } from './../../actions/engravingLayout';

const EngravingLayoutItems = (props) => {
    const engravingLayout = useSelector(state => state.engravingLayout)
    const dispatch = useDispatch()

    console.log(engravingLayout)
    useEffect(() => {
        const { match } = props;
        dispatch(getEngravingLayoutBySlug(match.params.slug))
    }, [])
    return (
        <div>
            hello, its me
        </div>
    )
}

export default EngravingLayoutItems
