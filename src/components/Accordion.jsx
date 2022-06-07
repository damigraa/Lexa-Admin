
import React, { useState } from 'react'
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Data } from './Data';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Card from './UI/Card/index';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

`;

const Wrap = styled.div`
margin: 10px;
  background: #fff;
  color: #221f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
margin: 0 auto;
  background: #fff;
  color: #00ffb9;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2rem;
  }
`;

const Accordion = ({ order }) => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <AccordionSection>
                <Container>
                    {order.map((orderItem, index) => {
                        return (
                            <>
                                <Card
                                    onClick={() => { toggle(index) }}
                                    style={{
                                        margin: "10px 0",
                                    }}
                                    key={index}
                                >

                                    <div className="order row m-1 p-2 ">
                                        <div className="col-sm-4">
                                            <div className="order__start">
                                                <div className="order__heading ">
                                                </div>
                                                <div className="order__leftContainer">
                                                    <span className="title">{` № ${index}`} от {orderItem.createdAt.slice(0, 10)}</span>
                                                    <div className="value">{orderItem.paymentStatus}</div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="title">
                                                Cумма заказа
                                            </div>
                                            <span className="value">{orderItem.totalAmount} руб.</span>

                                        </div>
                                        <div className="col-sm-5">
                                            <div className="order__rightContainer">
                                                <div className='row text-right'>
                                                    <div className="order__imgContainer">
                                                        {/* <div className='order__img '>
                                                            <img className='order__i ' src={foto} alt="foto" />
                                                        </div>
                                                        <div className='order__img '>
                                                            <img className='order__i ' src={fotoTwo} alt="foto" />
                                                        </div> */}

                                                    </div>
                                                    <div className='order-iconContainer'>
                                                        <span>{clicked === index
                                                            ? <BsChevronDown size='20px' color='#3e77aa' />
                                                            : <BsChevronUp size='20px' color="#3e77aa" />}</span>

                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                    <Wrap onClick={() => toggle(index)} key={index}>
                                    <span className="title">{` № ${index}`} от {orderItem.createdAt.slice(0, 10)}</span>

                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <span className="value">{orderItem.totalAmount} руб.</span>

                                    </Dropdown>
                                ) : null}
                                </Card>
                               
                            </>
                        );
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion;
