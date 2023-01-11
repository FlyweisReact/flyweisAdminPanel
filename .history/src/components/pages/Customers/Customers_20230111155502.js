/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { Button, Container, Form } from "react-bootstrap";
import img from "../../SVG/list.svg";


const Customers = () => {
  const [modalShow, setModalShow] = React.useState(false);


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
              <br />
              <Form.Select aria-label="Default select example">
                <option>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
              <br />
              <Form.Group>
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Wallet</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <br />
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
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }



 

 
  // SearchBar

  const filterData = !query
    ? data?.Users
    : data?.Users?.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.phoneNumber
            ?.toString()
            ?.toLowerCase()
            .includes(query?.toLowerCase())
      );



  return (
    <>
      {" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
      <StatusModal show={open} onHide={() => setOpen(false)} />
      <ViewModal show={view} onHide={() => setView(false)} />
      <AddWallet show={wallet} onHide={() => setWallet(false)} />
      {/* ---------------------- */}


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
          Customer List <br />
          <span style={{ fontSize: "14px" }}>All Customer List</span>
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
            All Customers (Total : {data?.Users?.length})
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
            Add Customers
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
                <th> Wallet </th>
                <th> Rating </th>
                <th> Status </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.email} </td>
                  <td> {i.phoneNumber} </td>
                  <td style={{ minWidth: "200px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {i.wallet}
                      <img
                        src="https://fox-jekapp.startuptrinity.com/assets/images/template-images/wallet-history3.png"
                        alt=""
                      />
                      {/* ----------------------------- */}
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          border: "1px solid #008000",
                          padding: "5px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => setWallet(true)}
                      >
                        <i
                          class="fa-solid fa-plus"
                          style={{ color: "#008000" }}
                        ></i>
                        <div
                          style={{
                            backgroundColor: "#008000",
                            height: "20px",
                            width: "2px",
                            transform: "rotate(20deg)",
                          }}
                        ></div>
                        <i
                          class="fa-solid fa-minus"
                          style={{ color: "#008000" }}
                        ></i>
                      </div>
                    </div>
                  </td>
                  <td> {i.rating} </td>
                  <td>
                    {i.status === "success" ? (
                      <div
                        className="toggleBtn2"
                        onClick={() => {
                          setID(i._id);
                          setOpen(true);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="hideOne"></div>
                      </div>
                    ) : (
                      <div className="toggleBtn">
                        <div className="hideOne"></div>
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        class="fa-solid fa-eye"
                        style={{ color: "#099ffe", cursor: "pointer" }}
                        onClick={() => {
                          setID(i._id);
                          setView(true);
                        }}
                      ></i>
                      <i
                        class="fa-solid fa-pen-to-square"
                        style={{ color: "#267cb5", cursor: "pointer" }}
                        onClick={() => {
                          setModalShow(true);
                          setEdit(true);
                        }}
                      ></i>
                      <i
                        class="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
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

export default HOC(Customers);
