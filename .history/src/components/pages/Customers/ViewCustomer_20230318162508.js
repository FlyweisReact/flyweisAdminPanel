/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import img from "../../SVG/list.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const ViewCustomer = () => {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://u4x75z11l9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/cues/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [token, id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // SearchBar

  const filterData = !query
    ? data?.data
    : data?.data?.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.mobile?.toString()?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.category?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "40px",
            height: "40px",
            marginTop: "5px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Member Customer List <br />
          <span style={{ fontSize: "14px" }}>All Member Customer List</span>
        </p>
      </div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
        className="response"
      >
        {data?.data?.length === 0 ? <Alert variant="info">No Customer Found</Alert> : 
        
        <>


        </>
        }
      
    </>
  );
};

export default HOC(ViewCustomer);
