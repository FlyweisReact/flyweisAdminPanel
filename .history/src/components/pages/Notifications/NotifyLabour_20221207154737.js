/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const users = [
  {
   customer : 'Abhisekh' ,
   Hero : 'Arpan' ,
   service : 'Photo' , 
   location : 'delhi' , 
   date  : '12/02/2005' , 
   amount : '5,000' , 
   mode : 'online'
  },
  {
   customer : 'Sharukh' ,
   Hero : 'Gauri' ,
   service : 'Photo' , 
   location : 'delhi' , 
   date  : '12/02/2005' , 
   amount : '5,000' , 
   mode : 'online'
  },
  {
   customer : 'Abhisekh' ,
   Hero : 'Arpan' ,
   service : 'Photo' , 
   location : 'delhi' , 
   date  : '12/02/2005' , 
   amount : '5,000' , 
   mode : 'online'
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
            <th> Date </th>
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
