import React, {useState} from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function ExpensesForm() {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

  return (
    <div>
      <Container>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name Here" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Date Purchased</Form.Label>
            <Form.Control type="date" placeholder="Date Here" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Amount(GH$)</Form.Label>
              <Form.Control type="number" placeholder="Amount Here" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Select defaultValue="Food and Drinks">
                <option>Food and Drinks</option>
                <option>Accomdation</option>
                <option>Transportation</option>
                <option>Housing and Rent</option>
                <option>MIscellaneous</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ExpensesForm;
