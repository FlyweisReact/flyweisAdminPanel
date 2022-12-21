/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { AiFillDelete } from "react-icons/ai";

import { Container } from "react-bootstrap";

const GenerateId = () => {
  const Big = () => {
    const target = document.getElementById("PP");
    target.style.width = '400px'
    target.style.height = '400px'
    target.style.position ='absolute'
    target.style.left ='40%'
    target.style.borderRadius ='0%'
    target.style.boxShadow ='rgba(0, 0, 0, 0.35) 0px 5px 15px'
    target.style.borderRadius ='rgba(0, 0, 0, 0.35) 0px 5px 15px'
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Hero's
          </span>
        </div>
      </section>

      <Container
        style={{
          overflowX: "auto",
          width: "100%",
          marginTop: "2%",
          padding: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <tabel>
          <thead>
            <tr>
              <th>Profile Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Camera / Drone</th>
              <th>Eqiument Specification</th>
              <th>Gadget Photo</th>
              <th>Website/Porfolio</th>
              <th>Prefrence</th>
              <th>expertise</th>
              <th>Driving License</th>
              <th>Driving License Number</th>
              <th>Aadhaar Card</th>
              <th>Tranfer Data Through</th>
              <th>Ready to travel Out</th>
              <th>Willing to travel within a radius 30-50KM</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={
                    "https://c.ndtvimg.com/2020-09/v262v3i8_raftaar-_625x300_09_September_20.jpg?im=Resize=(1230,900)"
                  }
                  alt=""
                  className="fast-food"
                  style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    cursor : 'pointer'
                  }}
                  id="PP"
                  onClick={() => Big()}
                />
              </td>
              <td>Hero</td>
              <td>Male</td>
              <td>5412369874</td>
              <td>12/02/2204</td>
              <td>Sony</td>
              <td>canon Mark 4, 50mm lens</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://www.sony.co.in/image/866e0cf8ceadb357257bdad65453b5c4?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://www.reliancedigital.in/medias/SONY-W810-Point-and-shoot-Camera-491099230-26?context=bWFzdGVyfGltYWdlc3wxOTc2MnxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDU1Lzk1NzUyNTA5MTk0NTQuanBnfDU1NWIwNTJiMThlY2E0YzNiNTZhOGQwYWM3MWYxZjVjZmI5YzI0MWY1MDNjYTNhMzE5NTlmMmUwZTk2ZTIwNGY"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://asset.conrad.com/media10/isa/160267/c1/-/en/1094190_BB_00_FB/image.jpg?x=400&y=4000"
                  alt=""
                  className="fast-food"
                />
              </td>
              <td>Sony.In</td>
              <td>PhotoGraphy</td>
              <td>Birthday Party , Portrait Fhasion , Product E-Com</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                  alt=""
                  className="fast-food"
                />
              </td>
              <td>Dhjas41278</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                  alt=""
                  className="fast-food"
                />
              </td>
              <td>Online</td>
              <td>Yes</td>
              <td>No</td>{" "}
              <td>
                <AiFillDelete
                  color="red"
                  cursor={"pointer"}
                  style={{ width: "20px", height: "20px" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={
                    "https://c.ndtvimg.com/2020-09/v262v3i8_raftaar-_625x300_09_September_20.jpg?im=Resize=(1230,900)"
                  }
                  alt=""
                  className="fast-food"
                  style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                  }}
                />
              </td>
              <td>Hero</td>
              <td>Male</td>
              <td>5412369874</td>
              <td>12/02/2204</td>
              <td>Sony</td>
              <td>canon Mark 4, 50mm lens</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://www.sony.co.in/image/866e0cf8ceadb357257bdad65453b5c4?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://www.reliancedigital.in/medias/SONY-W810-Point-and-shoot-Camera-491099230-26?context=bWFzdGVyfGltYWdlc3wxOTc2MnxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDU1Lzk1NzUyNTA5MTk0NTQuanBnfDU1NWIwNTJiMThlY2E0YzNiNTZhOGQwYWM3MWYxZjVjZmI5YzI0MWY1MDNjYTNhMzE5NTlmMmUwZTk2ZTIwNGY"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://asset.conrad.com/media10/isa/160267/c1/-/en/1094190_BB_00_FB/image.jpg?x=400&y=4000"
                  alt=""
                  className="fast-food"
                />
              </td>
              <td>Sony.In</td>
              <td>PhotoGraphy</td>
              <td>Birthday Party , Portrait Fhasion , Product E-Com</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                  alt=""
                  className="fast-food"
                />
              </td>
              <td>Dhjas41278</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <img
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                  alt=""
                  className="fast-food"
                />
                <img
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                  alt=""
                  className="fast-food"
                />
              </td>
              <td>Online</td>
              <td>Yes</td>
              <td>No</td>
              <td>
                <AiFillDelete
                  color="red"
                  cursor={"pointer"}
                  style={{ width: "20px", height: "20px" }}
                />
              </td>
            </tr>
          </tbody>
        </tabel>
      </Container>

      <div style={{ overflowX: "auto", width: "900px" }}></div>
    </>
  );
};
export default HOC(GenerateId);
