/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { Button, Container, Form } from "react-bootstrap";
import img from "../../SVG/list.svg";

const Saler = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [query, setQuery] = useState("");
  const [edit, setEdit] = useState(false);
  const [ view , setView]  = useState(false)

  // Add Customer
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
            {edit ? "Edit Sales Member" : "Add Sales Member"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {edit ? (
              <Form>
                <Form.Group className="my-3">
                  <Form.Select aria-label="Default select example">
                    <option>Select Category</option>
                    <option value="1">Good</option>
                    <option value="2">About To Pay</option>
                    <option value="2">Pending</option>
                  </Form.Select>
                </Form.Group>
                <Button
                  variant="outline-success"
                  onClick={() => {
                    setModalShow(false);
                    toast.success("Category Edit Successfully");
                  }}
                >
                  Submit
                </Button>
              </Form>
            ) : (
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Phone Number </Form.Label>
                  <Form.Control type="tel" pattern="[0-9]{10}" />
                </Form.Group>

                <Button
                  variant="outline-success"
                  onClick={() => {
                    setModalShow(false);
                    toast.success("Customer added Successfully");
                  }}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const data = [
    {
      name: "Abhishek",
      email: "Customer1@gmail.com",
      phoneNumber: "1245789632",
      category: "Good+",
      comment:
        "stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le",
      time: "04:56pm",
    },
    {
      name: "New Customer",
      email: "Customer1@gmail.com",
      phoneNumber: "1245789632",
      category: "Good",
      comment:
        "stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le",
      time: "04:56pm",
    },
    {
      name: "Rajan",
      email: "Customer1@gmail.com",
      phoneNumber: "5478962145",
      category: "About To Pay",
      comment:
        "stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le",
      time: "04:56pm",
    },
    {
      name: "New",
      email: "Customer1@gmail.com",
      phoneNumber: "7845965412",
      category: "Payment",
    },
    {
      name: "Customer",
      email: "Customer1@gmail.com",
      phoneNumber: "1245789632",
      category: "Good",
      comment:
        "stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le",
      time: "04:56pm",
    },
    {
      name: "Customer2",
      email: "Customer1@gmail.com",
      phoneNumber: "5478962145",
      category: "About To Pay",
      time: "04:56pm",
    },
    {
      name: "Customer3",
      email: "Customer1@gmail.com",
      phoneNumber: "7845965412",
      category: "Payment",
    },
  ];
  // SearchBar

  const filterData = !query
    ? data
    : data.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.phoneNumber
            ?.toString()
            ?.toLowerCase()
            .includes(query?.toLowerCase()) ||
          i?.category?.toLowerCase().includes(query?.toLowerCase())
      );


      function ViewMember(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               View Member
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>

              <p style={{}}>
                Name : Member
              </p>
               
              </Container>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        );
      }
    


  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
      <ViewMember
        show={view}
        onHide={() => setView(false)}
      />{" "}


      <div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "40px",
            height: "40px",
            marginTop: "5px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Sales List <br />
          <span style={{ fontSize: "14px" }}>All Sales List</span>
        </p>
      </div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
        className="response"
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Sales Members ( Total : {data.length} )
            <hr style={{ width: "70%" }} />
          </span>
          <Button
            style={{
              backgroundColor: "#4099ff",
              color: "#fff",
              borderRadius: "0",
              border: "1px solid #4099ff",
              padding: "10px",
            }}
            onClick={() => {
              setModalShow(true);
              setEdit(false);
            }}
          >
            Add New
          </Button>
        </div>

        <div>
          <div style={{ color: "black" }}>
            Search:{" "}
            <input
              type={"search"}
              style={{
                border: "1px solid #bfbfbf",
                width: "250px",
                color: "black",
                padding: "5px",
              }}
              placeholder="Search by Name , Phone number.."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflow: "auto", marginTop: "2%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th> Phone Number </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.email} </td>
                  <td> {i.phoneNumber} </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                      <i
                        class="fa-solid fa-eye"
                        style={{ color: "blue", textAlign: "center" , cursor : 'pointer' }}
                        onClick={() => setView(true)}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(Saler);
