/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import img from "../../SVG/list.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const ViewCustomer = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = React.useState(false);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://u4x75z11l9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/cues/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [token, id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Add Customer
  function MyVerticallyCenteredModal(props) {

    const [name , setName ] = useState('')
    const [mobile , setMobile ] = useState('')
    const [email , setEmail ] = useState('')
    const [category , setCategory ] = useState('')

    const postHandler =  async (e) => {
      e.preventDefault()
      try{

        const { data } = await axios.post('https://u4x75z11l9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/add/customer')


      }catch(E) {
        console.log(E)
        toast.error(``)
      }

    }

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
              <Form.Control type="tel" pattern="[0-9]{10}" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>Select Category</option>
                <option value="A+">A+</option>
                <option value="Good+">Good+</option>
                <option value="Good">Good</option>
                <option value="About To Pay">About To Pay</option>
                <option value="Payment">Payment</option>
              </Form.Select>
            </Form.Group>

            <Button variant="outline-success">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  // SearchBar

  const filterData = !query
    ? data?.data
    : data?.data?.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.mobile?.toString()?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.category?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
          Member Customer List <br />
          <span style={{ fontSize: "14px" }}>All Member Customer List</span>
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
        {data?.data?.length === 0 ? (
          <div className="alertDiv">
            <Alert variant="info" className="ale">
              No Customer Found
            </Alert>

            <Button
              variant="outline-success"
              onClick={() => setModalShow(true)}
            >
              {" "}
              Add Customer
            </Button>
          </div>
        ) : (
          <>
            <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
              <span
                style={{ color: "black", fontSize: "15px", fontWeight: "400" }}
              >
                All Customers ( Total : {data?.data?.length} )
                <hr style={{ width: "70%" }} />
              </span>
            </div>

            <div className="three-box">
              <div className="items" onClick={() => setQuery("")}>
                All
              </div>
              <div className="items" onClick={() => setQuery("Good+")}>
                Good+
              </div>
              <div className="items" onClick={() => setQuery("Good")}>
                Good
              </div>
              <div className="items" onClick={() => setQuery("About To Pay")}>
                About To Pay
              </div>
              <div className="items" onClick={() => setQuery("Payment")}>
                Payment
              </div>
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
                    <th> Category </th>
                    <th className="Comm"> Comment </th>
                    <th>Reminder</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.name} </td>
                      <td> {i.email} </td>
                      <td> {i.mobile} </td>
                      <td> {i.category} </td>
                      <td style={{ maxWidth: "200px" }} className="Comm">
                        {i.comment}
                      </td>
                      <td>{i.reminder}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HOC(ViewCustomer);
