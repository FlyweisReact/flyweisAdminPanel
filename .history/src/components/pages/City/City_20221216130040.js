/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const users = [
  {
    code: "Delhi",
    amount: "450",
    aDate: "12/02/2001",
    eDate: "12/03/2004",
  },
  {
    code: "Mumbai",
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
              <Form.Label> City </Form.Label>
              <Form.Control type="text" />
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
const City = () => {
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
              All City's
            </span>
            <Button variant="outline-success" onClick={() => setModalShow(true)}>
              Add City's
            </Button>
          </div>
        </section>
  
        <Table  striped bordered hover>
        <thead>
            <tr style={{border : '1px solid black'}}>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{border : '1px solid black'}} >
            {users.map((i, index) => (
              <tr key={index} style={{borderBottom : '1px solid black'}}>
                <td> {i.code} </td>
                <td>
                  <AiFillDelete color="red" cursor={'pointer'}/>
                </td>
            
              </tr>
            ))}
          </tbody>
        </Table>
  
      </>
    );
  };

export default HOC(City)