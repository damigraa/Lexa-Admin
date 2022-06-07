import React from 'react';
import Layout from '../../components/Layout';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Diagram from './../Diagram/Diagram';


const Home = (props) => {

  return (
    <Layout sidebar>
      <h1 style={{
        marginBottom: "20px",
        textAlign: "center"
      }}>
        Главная страница
      </h1>
<Diagram />
    </Layout>
  )

}

export default Home