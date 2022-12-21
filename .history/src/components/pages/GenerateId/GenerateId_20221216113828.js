/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Modal, Form, Container } from "react-bootstrap";

const users = [
  {
    image:
      "https://st.depositphotos.com/2101611/4338/v/950/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg",
    name: "Akhilesh",
    phone: 1452367890,
    email: "Akhilesh@gmail.com",
    dob: "12/01/2000",
    city: "Delhi",
    website: "www.google.com",
    gender: "Male",
  },
  {
    image: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
    name: "Amitabh",
    phone: 1452367890,
    email: "amitabh@gmail.com",
    dob: "12/01/2000",
    city: "Delhi",
    website: "www.google.com",
    gender: "Male",
  },
  {
    image:
      "https://c.ndtvimg.com/2020-09/v262v3i8_raftaar-_625x300_09_September_20.jpg?im=Resize=(1230,900)",
    name: "Raftaar",
    phone: 1452367890,
    email: "amitabh@gmail.com",
    dob: "12/01/2000",
    city: "Delhi",
    website: "www.google.com",
    gender: "Male",
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
              <Form.Label> Profile </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label> Name </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number </Form.Label>
              <Form.Control type="tel" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date of Birth </Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group>
              <Form.Label>City </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Website </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <br />
            <Form.Select aria-label="Default select example">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
            <br />
            <Button variant="outline-dark">Submit</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

const GenerateId = () => {
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
            All Hero's
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Hero's
          </Button>
        </div>
      </section>

      <Container style={{ overflowX: "auto", width: "900px" }}>
        
      </Container>

      <div style={{ overflowX: "auto", width: "900px" }}>
      
      </div>
    </>
  );
};
export default HOC(GenerateId);
