import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EngravingLayoutItems from './EngravingLayoutItems';
import Layout from './../../components/Layout/index';

const EngravingLayout = (props) => {
   

  
    return (
        <Layout sidebar>
            <EngravingLayoutItems {...props} />
        </Layout>
    )

}

export default EngravingLayout
