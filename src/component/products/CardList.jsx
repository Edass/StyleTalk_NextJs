import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Spacer from "../Spacer";
import Category from "./Category";
import products from "@/helpers/products";

const CardList = () => {


  return (
    <Container>
      <Spacer />

      <Row className="g-4">
        <Col md={2}>
          <Category />
        </Col>

        <Col md={10}>
          <ProductCard products={products} />
        </Col>
      </Row>
    </Container>
  );
};

export default CardList;
