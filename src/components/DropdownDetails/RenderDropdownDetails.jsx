import React, { useState } from 'react'
import Card from '../UI/Card/index';
import { BsChevronUp, BsChevronDown, } from 'react-icons/bs';
const RenderDropdownDetails = ({ items, handleShow }) => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <div>

            {items.map((item, index) => (
                <Card
                    onClick={() => { toggle(index) }}
                    style={{
                        margin: "10px 0",
                    }}
                >
                    <div className="dropdownDetails">
                        <div className="dropdownDetails__container">
                            <div className="dropdownDetails__header-left m-1 p-2">
                                <div className="dropdownDetails__icon">
                                    {item.icon}
                                </div>
                                <h3>
                                    {item.text}
                                </h3>
                            </div>
                            <div className='dropdownDetails__icons'>
                                <span>{clicked === index
                                    ? <BsChevronDown size='17px' color='#3e77aa' />
                                    : <BsChevronUp size='17px' color="#3e77aa" />}</span>
                            </div>
                        </div>
                    </div>
                    {clicked === index ? <div className="mx-5">
                        {item.content}

                        <div className="dropdownDetails__container-button" onClick={e => e.stopPropagation()}>
                            {item.button && item.button}
                        </div>

                    </div> : null}
                </Card>
            )
            )}
        </div>
    )

}

export default RenderDropdownDetails
