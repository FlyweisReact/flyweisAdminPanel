/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";

const CommonUser = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Push Notification
          </span>
        </div>
      </section>

      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Website</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abhishek</td>
              <td>Abhi@gmail.com</td>
              <td>1234567890</td>
              <td>Delhi</td>
              <td>Male</td>
              <td>30</td>
              <td>Abhi.com</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>Abhi@gmail.com</td>
              <td>1234567890</td>
              <td>Delhi</td>
              <td>Male</td>
              <td>30</td>
              <td>Abhi.com</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>Abhi@gmail.com</td>
              <td>1234567890</td>
              <td>Delhi</td>
              <td>Male</td>
              <td>30</td>
              <td>Abhi.com</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(CommonUser);
