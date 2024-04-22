import { Col, Form, Row } from "react-bootstrap";

const Category = () => {
  return (
    <Row>
      <Col>
        <Form>
          <div className="mb-3 d-flex flex-column">
            <Form.Check
              inline
              label="Shoes"
              name="group1"
              type="checkbox"
              value="shoes"
            />

            <Form.Check
              inline
              label="Top"
              name="group1"
              type="checkbox"
              value="Top"
            />

            <Form.Check
              inline
              label="Bottom"
              name="group1"
              type="checkbox"
              value="Bottom"
            />

            <Form.Check
              inline
              label="Accessories"
              name="group1"
              type="checkbox"
              value="Accessories"
            />
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Category;
