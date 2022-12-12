/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

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


const NotifyLabour = () => {
  return (
    <>


      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Booking's
          </span>
  
        </div>
      </section>

      <Table
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
            <th> Customer </th>
            <th> Hero </th>
            <th> Service </th>         
            <th> Location </th>         
            <th> Date  </th>
            <th>Amount </th>
            <th>Payment Method </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td>
                <img
                  src={i.image}
                  className="fast-food"
                  style={{ borderRadius: "100%" }}
                  alt=""
                />
              </td>
              <td> {i.name} </td>
              <td> {i.phone} </td>
              <td> {i.email} </td>
              <td> {i.dob} </td>
              <td> {i.city} </td>
              <td> {i.website} </td>
              <td> {i.gender} </td>
          
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default HOC(NotifyLabour);
