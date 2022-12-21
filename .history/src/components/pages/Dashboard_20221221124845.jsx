/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { MdDashboardCustomize, MdPayment, MdPrivacyTip } from "react-icons/md";
import {
  FaUserFriends,
  FaCity,
  FaUserTie,
  FaUser,
  FaFileInvoice,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsFillPieChartFill } from "react-icons/bs";
import { BiHelpCircle, BiSupport, BiLogOutCircle } from "react-icons/bi";
import { AiFillNotification } from "react-icons/ai";
import { RiCoupon3Line } from "react-icons/ri";
import { ImPriceTag, ImImage } from "react-icons/im";

// SVG
import img from "../SVG/home.svg";

export const dash = (data) => {
  return data;
};
const Dashboard = () => {
  const card = [
    {
      progress: "bg-green-400",
      title: "Total Users",
      number: "100",
      icon: <FaUserFriends className="text-2xl text-[rgb(241,147,48)]" />,
      link: "/customer",
    },
    {
      progress: "bg-yellow-400",
      title: "Total Heros",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      link: "/generateId",
    },
    {
      progress: "bg-yellow-400",
      title: "Ongoing tast",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      link: "/Notice/Labour",
    },
  ];

  const smallCards = [
    {
      progress: "bg-green-400",
      title: " Users",
      number: "100",
      icon: <FaUserFriends className="text-2xl text-[#19ac5e]" />,
      link: "/customer",
      color: "rgb(64,153,255)",
    },
    {
      progress: "bg-yellow-400",
      title: "City",
      number: "150",
      icon: <FaCity className="text-2xl text-[rgb(170,93,225)]" />,
      link: "/city",
      color: "rgb(170,93,225)",
    },
    {
      progress: "bg-yellow-400",
      title: "Analatical Graph",
      number: "150",
      icon: <BsFillPieChartFill className="text-2xl text-[rgb(67,136,232)]" />,
      link: "/graph",
      color: "rgb(239,76,77)",
    },
    {
      progress: "bg-green-400",
      title: "Notification",
      number: "100",
      icon: <AiFillNotification className="text-2xl text-[rgb(244,169,52)]" />,
      link: "/notification",
      color: "#36b672",
    },
    {
      progress: "bg-yellow-400",
      title: " Hero's",
      number: "150",
      icon: <FaUserTie className="text-2xl text-[rgb(237,77,77)]" />,
      link: "/generateId",
      color: "#36b672",
    },
    {
      progress: "bg-yellow-400",
      title: "Common Users",
      number: "150",
      icon: <FaUser className="text-2xl text-[rgb(241,147,48)]" />,
      link: "/common",
      color: "rgb(170,93,225)",
    },
    {
      progress: "bg-green-400",
      title: "Booking",
      number: "100",
      icon: <MdPayment className="text-2xl text-[#19ac5e]" />,
      link: "/Notice/Labour",
      color: "rgb(239,76,77)",
    },
    {
      progress: "bg-yellow-400",
      title: "Coupons",
      number: "150",
      icon: <RiCoupon3Line className="text-2xl text-[rgb(170,93,225)]" />,
      link: "/Notice/Customer",
      color: "rgb(170,93,225)",
    },
    {
      progress: "bg-yellow-400",
      title: "Pricing Section",
      number: "150",
      icon: <ImPriceTag className="text-2xl text-[rgb(67,136,232)]" />,
      link: "/pay",
      color: "#36b672",
    },
    {
      progress: "bg-green-400",
      title: "Transiction",
      number: "100",
      icon: <FaFileInvoice className="text-2xl text-[rgb(244,169,52)]" />,
      link: "/trans",
      color: "#ff5370",
    },
    {
      progress: "bg-yellow-400",
      title: "Banners",
      number: "150",
      icon: <ImImage className="text-2xl text-[rgb(237,77,77)]" />,
      link: "/cat",
      color: "rgb(239,76,77)",
    },
    {
      progress: "bg-yellow-400",
      title: "Terms&Condition",
      number: "150",
      icon: <BiHelpCircle className="text-2xl text-[rgb(241,147,48)]" />,
      link: "/terms",
      color: "rgb(170,93,225)",
    },

    {
      progress: "bg-green-400",
      title: "Privacy Policy",
      number: "100",
      icon: <MdPrivacyTip className="text-2xl text-[#19ac5e]" />,
      link: "/privacy",
      color: "#ff5370",
    },
    {
      progress: "bg-yellow-400",
      title: "Help&Support",
      number: "150",
      icon: <BiSupport className="text-2xl text-[rgb(170,93,225)]" />,
      link: "/help",
      color: "rgb(170,93,225)",
    },

    {
      progress: "bg-yellow-400",
      title: "Logout",
      number: "150",
      icon: <BiLogOutCircle className="text-2xl text-[rgb(170,93,225)]" />,
      link: "/",
      color: "#ff5370",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <img src={img} alt=""  style={{backgroundColor : 'blue' , color : 'white'}} />
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
              key={index}
              onClick={() => navigate(`${card.link}`)}
              style={{ cursor: "pointer" }}
            >
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

      <section
        className="grid md:grid-cols-5 grid-cols-2 gap-y-6 gap-x-4"
        style={{ marginTop: "20%" }}
      >
        {smallCards.map((card, index) => {
          return (
            <div
              className="px-3 py-2 space-y-2 shadow-xl flex flex-col  rounded-md"
              key={index}
              onClick={() => navigate(`${card.link}`)}
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>{card.icon}</div>
                <div style={{ color: `${card.color}`, textAlign: "right" }}>
                  <span>{card.number}</span>
                  <p>{card.title} </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
