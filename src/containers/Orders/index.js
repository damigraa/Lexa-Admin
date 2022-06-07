import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions";
import { DetailsOrder } from './../render/DetailsOrder';
import { RenderOrders } from './../render/RenderOrders';
import { MainContainer } from './../MainContainer';
import { getCustomerOrders, searchOrders } from './../../actions/order.action';
import OrderModalCenter from './../../components/UI/Modal/OrderModalCenter';
import { RenderOrdersTwo } from './../render/RenderOrdersTwo';

const Orders = (props) => {
  const [show, setShow] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const order = useSelector((state) => state.order.orders);
  const [clicked, setClicked] = useState(false) 
  const [modalShow, setModalShow] = useState(false);
  const [currentIdProd, setCurrentIdProd] = useState("");

  const [orderedProduct, setOrderedProduct] = useState([])

  const product = useSelector((state) => state.product.products)

  console.log("orderedProduct", product)

  // const leastArr = orderedProduct.length < product.length ? orderedProduct : product;
  // const biggestArr = orderedProduct.length >= product.length ? orderedProduct : product;

  // const resultArray = leastArr.filter((item) => {
  //   return biggestArr.some((item2) => item2.id === item.id)
  // });

  // console.log(resultArray);


  const orderProduct = (orderItem) => {


    const orderArray = orderItem.items.map((item) => item.productId)
    setOrderedProduct(orderArray)
    console.log(orderArray)
  }


  const [type, setType] = useState("");
  const dispatch = useDispatch();


  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const handleShow = () => setShow(true)


  const showOrderModal = (orderItem) => {
    setOrderDetails(orderItem);
    setModalShow(!modalShow);
  };
  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  return (
    <MainContainer
      title="Мои заказы"
      tabs
      fluid
      productSort
      buttonText="Оформить заказ вручную"
      search={searchOrders}
      get={getCustomerOrders}
      handleShow={handleShow}
    >
      <OrderModalCenter
        show={modalShow}
        currentIdProd={currentIdProd}
        onHide={() => setModalShow(false)}
        details={orderDetails}
        formatDate={formatDate}
        setType={setType}
        onOrderUpdate={onOrderUpdate}
      />
      <RenderOrders
        // newArrayProd={newArrayProd}
        order={order}
        showOrderModal={showOrderModal}
        orderProduct={orderProduct}
      />
    </MainContainer>
  );
};

export default Orders;