/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { Table } from "react-bootstrap";

export const dash = (data) => {
  return data;
};
const Dashboard = () => {
  const card = [
    {
      progress: "bg-blue-400",
      title: "Total Installion Nedded",
      number: "20",
      icon: <FaUserFriends className="text-2xl text-[rgb(241,147,48)]" />,
    },
    {
      progress: "bg-green-400",
      title: "Total Users",
      number: "100",
      icon: <FaUserFriends className="text-2xl text-[rgb(241,147,48)]" />,
    },
    {
      progress: "bg-yellow-400",
      title: "Total Heros",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
    },
    {
      progress: "bg-yellow-400",
      title: "Ongoing tast",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md">
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"  , width : '90%' , display : 'block' , margin : 'auto' , margin}}>
        <h2 style={{ color: "black", textAlign: "center", marginTop: "2%" }}>
          Common Users
        </h2>

        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "5%",
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
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Dashboard);
