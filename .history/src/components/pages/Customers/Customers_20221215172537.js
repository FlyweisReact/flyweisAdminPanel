/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Container, Form } from "react-bootstrap";

const users = [
  {
    name: "Arpan",
    email: "Arpan@gmail.com",
    phone: 4512369870,
    city: "Delhi",
    Gender: "Male",
    Age: "24",
    Website: "Arpan.com",
    Rating: 5,
  },
  {
    name: "Krishna",
    email: "Krishna@gmail.com",
    phone: 4512369870,
    city: "Delhi",
    Gender: "Male",
    Age: "28",
    Website: "Arpan.com",
    Rating: 2,
  },
];

const Customers = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Customer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
             <br />
                <Form.Select aria-label="Default select example">
                  <option>Sele</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      {" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Customers
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Customers
          </Button>
        </div>
      </section>
      =
      <Table
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
            <th>Name</th>
            <th>Email</th>
            <th> Phone Number </th>
            <th> City </th>
            <th> Gender </th>
            <th> Age </th>
            <th> Website </th>
            <th> Rating </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td> {i.email} </td>
              <td> {i.phone} </td>
              <td> {i.city} </td>
              <td> {i.Gender} </td>
              <td> {i.Age} </td>
              <td> {i.Website} </td>
              <td> {i.Rating} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => toast.success("User Deleted SuccessFully")}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Customers);
