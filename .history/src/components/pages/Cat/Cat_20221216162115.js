/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Ban = [
  {
    img: "https://images.template.net/wp-content/uploads/2022/05/Banner-Ideas.jpg",
    name: "Banner",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbOr66i--Hhx3JClhr5HHf7vRoqrUclmPZg&usqp=CAU",
    name: "Banner",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGL0V6RT1B6WNquZOzKEkGoE-ANS_PJ6EHj7V2GlWjtnOX9rl37zzrmYHKBhnm5pdBocU&usqp=CAU",
    name: "Banner",
  }
];
const CustomerBan  = [
  {
    img: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5c99af2eef263_template_image_1553575726.webp",
    name: "Banner",
  },
  {
    img: "data:image/jpeg;base64,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",
    name: "Banner",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGL0V6RT1B6WNquZOzKEkGoE-ANS_PJ6EHj7V2GlWjtnOX9rl37zzrmYHKBhnm5pdBocU&usqp=CAU",
    name: "Banner",
  }
];

const Cat = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Customer Banners
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Customer Banner
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {Ban.map((i , index) => {
          return (
            <>
              <div className="card-container" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.img}
                      alt=""
                      style={{ width: "100%", height: "200px" }}
                    />

                    <div
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <Button
                        variant="outline-danger"
                        style={{ width: "100%" }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>



      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Hero's Banners
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Hero's Banner
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {CustomerBan.map((i , index) => {
          return (
            <>
              <div className="card-container" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.img}
                      alt=""
                      style={{ width: "100%", height: "200px" }}
                    />

                    <div
                      style={{
                        marginTop: "2%",
                      }}
                    >
                      <Button
                        variant="outline-danger"
                        style={{ width: "100%" }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Cat);
