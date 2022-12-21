/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Button, Modal, Form, Container } from "react-bootstrap";

const users = [
  {
    code: "KHDG45",
    amount: "450",
    aDate: "12/02/2001",
    eDate: "12/03/2004",
  },
];

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Hero</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label> Coupon Code </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Minimum Amount </Form.Label>
              <Form.Control type="tel" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Activation Date </Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Expiry Date </Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <br />
            <Button variant="outline-dark">Submit</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
const NotifyCustomer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupon's
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Coupon's
          </Button>
        </div>
      </section>

      {/* <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Coupon code</th>
            <th> Minimum Amount </th>
            <th>Activation Date </th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.code} </td>
              <td> ₹{i.amount} </td>
              <td> {i.aDate} </td>
              <td> {i.eDate} </td>
          
            </tr>
          ))}
        </tbody>
      </Table> */}

      <Container
        style={{
          overflowX: "auto",
          width: "100%",
          marginTop: "2%",
          padding: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
      <table>
        
      </table>

      </Container>
    </>
  );
};

export default HOC(NotifyCustomer);
