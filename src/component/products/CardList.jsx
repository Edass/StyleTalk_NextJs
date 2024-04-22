import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Spacer from "../Spacer";
import Category from "./Category";
import products from "@/helpers/products";

const CardList = () => {
  return (
    <Container>
      <Spacer />
      <div className="d-flex gap-4">
        <div className="flex-1 w-25">
          <Category />
        </div>
        <div className="flex-5 w-75">
          <ProductCard products={products} />
        </div>
      </div>
      <Spacer />
    </Container>
  );
};

export default CardList;
