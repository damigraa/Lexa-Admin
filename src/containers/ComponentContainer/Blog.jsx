
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from './../../actions';
import { MainContainer } from './../MainContainer';
// import BackButton from './../../siteSetting/components/BackButton';
import { RenderBlog } from "../render/RenderBlog";
import { DetailsBlog } from '../render/DetailsBlog';
import { AddBlog } from '../create/AddBlog.jsx';


const Blog = (props) => {

  const [show, setShow] = useState(false);
  const [blogDetailModal, setBlogDetailModal] = useState(false);
  const [blogDetails, setBlogDetails] = useState(null);
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blog.blog)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    dispatch(getBlog())
  }, [])



  const showBlogDetailsModal = (blog) => {
    setBlogDetails(blog);
    setBlogDetailModal(true);
  };
  return (
    <MainContainer
    backButtonProduct
      // productSort
      fullFunctional
      get={getBlog}
      handleShow={handleShow}
    >
      <Container>
        <Row>
          <Col>
            <RenderBlog
              showBlogDetailsModal={showBlogDetailsModal}
              setShow={setShow}
              setCurrentId={setCurrentId}
              blog={blog}
            />
          </Col>
        </Row>
      </Container>
      <AddBlog
        show={show}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <DetailsBlog
        blogDetailModal={blogDetailModal}
        blogDetails={blogDetails}
        setBlogDetailModal={setBlogDetailModal}
      />
    </MainContainer >
  );
};

export default Blog;
