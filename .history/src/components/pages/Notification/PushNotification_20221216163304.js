/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Container, Form, FloatingLabel ,Button} from "react-bootstrap";
import {  } from "bootstrap";

const PushNotification = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Push Notification
          </span>
        </div>

        <Container style={{ width: "600px", marginTop: "3%" }}>
          <Form>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <br />
            <Button variant="outline-success">Submit</Button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(PushNotification);
