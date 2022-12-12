/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const users = [
  {
  name : 'Wedding/Pre-wedding' , 
  PG : '4599.91' , 
  VG : '6533.87' , 
  DG : '4578.54'
  },
  {
  name : 'Maternity/Baby Photoshoot' , 
  PG : '4599.91' , 
  VG : '6533.87' , 
  DG : '4578.54'
  },
  {
  name : 'Birthday party (Kids)' , 
  PG : '4599.91' , 
  VG : '6533.87' , 
  DG : '4578.54'
  },
  {
  name : 'Birthday party(Adult)' , 
  PG : '4599.91' , 
  VG : '6533.87' , 
  DG : '4578.54'
  },

];

const Payment = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Transactions
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
            <th>Name</th>
            <th> PhotoGuy </th>
            <th>VideoGuy </th>
            <th>DroneGuy </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td> {i.PG} </td>
              <td> {i.VG} </td>
              <td> {i.DG} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() =>
                      toast.success("Service Deleted SuccessFully")
                    }
                  />
                  <AiFillEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => setModalShow(true)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Payment);
