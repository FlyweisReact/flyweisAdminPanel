/** @format */

import React from "react";
import HOC from "../layout/HOC";

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
          marginTop: "10%",
          paddingBottom: "2%",
        }}
      >
        <h2 style={{ color: "black", textAlign: "center", paddingTop: "1%" }}>
          Common Users
        </h2>

        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "5%",
            width: "90%",
            marginLeft: "5%",
          }}
        >
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
