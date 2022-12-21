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

      <div style={{ overflowX: "auto" }}>
        <tabel
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
              <th>Profile Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Camera / Drone</th>
              <th>Eqiument Specification</th>
              <th>Gadget Photo</th>
              <th>Website/Porfolio</th>
              <th>Prefrence</th>
              <th>expertise</th>
              <th>Driving License</th>
              <th>Driving License Number</th>
              <th>Aadhaar Card</th>
              <th>Tranfer Data Through</th>
              <th>Ready to travel Out</th>
              <th>Willing to travel within a radius 30-50KM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={
                    "https://c.ndtvimg.com/2020-09/v262v3i8_raftaar-_625x300_09_September_20.jpg?im=Resize=(1230,900)"
                  }
                  alt=""
                  className="fast-food"
                  style={{ borderRadius: "100%" }}
                />
              </td>
              <td>User</td>
              <td>Male</td>
              <td>5412369874</td>
              <td>12/02/2204</td>
              <td>Sony</td>
              <td>canon Mark 4, 50mm lens</td>
              <td>
                <div style={{display : 'flex'}}>
                  <img
                    src="https://www.sony.co.in/image/866e0cf8ceadb357257bdad65453b5c4?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
                    alt=""
                    className="fast-food"

                  />
                  <img
                    src="https://www.reliancedigital.in/medias/SONY-W810-Point-and-shoot-Camera-491099230-26?context=bWFzdGVyfGltYWdlc3wxOTc2MnxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDU1Lzk1NzUyNTA5MTk0NTQuanBnfDU1NWIwNTJiMThlY2E0YzNiNTZhOGQwYWM3MWYxZjVjZmI5YzI0MWY1MDNjYTNhMzE5NTlmMmUwZTk2ZTIwNGY"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://asset.conrad.com/media10/isa/160267/c1/-/en/1094190_BB_00_FB/image.jpg?x=400&y=4000"
                    alt=""
                    className="fast-food"
                  />
                </div>
              </td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
              <td>User</td>
            </tr>

            {/* <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() =>
                      toast.success("Hero Deleted SuccessFully")
                    }
                  />
                  <AiFillEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => setModalShow(true)}
                  />
                </div>
              </td> */}
          </tbody>
        </tabel>
      </div>
    </>
  );
};
export default HOC(GenerateId);
