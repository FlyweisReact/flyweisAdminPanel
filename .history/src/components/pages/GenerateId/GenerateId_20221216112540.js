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
                  style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                  }}
                />
              </td>
              <td>Hero</td>
              <td>Male</td>
              <td>5412369874</td>
              <td>12/02/2204</td>
              <td>Sony</td>
              <td>canon Mark 4, 50mm lens</td>
              <td style={{ display: "flex" }}>
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
              </td>
              <td>Sony.In</td>
              <td>PhotoGraphy</td>
              <td>
              Birthday Party , Portrait Fhasion , Product E-Com
              </td>
              <td style={{ display: "flex" }}>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://www.reliancedigital.in/medias/SONY-W810-Point-and-shoot-Camera-491099230-26?context=bWFzdGVyfGltYWdlc3wxOTc2MnxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDU1Lzk1NzUyNTA5MTk0NTQuanBnfDU1NWIwNTJiMThlY2E0YzNiNTZhOGQwYWM3MWYxZjVjZmI5YzI0MWY1MDNjYTNhMzE5NTlmMmUwZTk2ZTIwNGY"
                  alt=""
                  className="fast-food"
                />
             
              </td>
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
