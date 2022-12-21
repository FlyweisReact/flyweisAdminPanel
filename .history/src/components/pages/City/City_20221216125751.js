import React from 'react'
import HOC from '../../layout/HOC'

const City = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Coupon's
            </span>
            <Button variant="outline-success" onClick={() => setModalShow(true)}>
              Add Coupon's
            </Button>
          </div>
        </section>
  
        <Container
          style={{
            overflowX: "auto",
            width: "80%",
            marginTop: "2%",
            padding: "10px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
        <table style={{marginTop : '2%' , marginLeft : '10%'}}>
        <thead>
            <tr style={{border : '1px solid black'}}>
              <th>Coupon code</th>
              <th> Minimum Amount </th>
              <th>Activation Date </th>
              <th>Expiry Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{border : '1px solid black'}} >
            {users.map((i, index) => (
              <tr key={index} style={{borderBottom : '1px solid black'}}>
                <td> {i.code} </td>
                <td> ₹{i.amount} </td>
                <td> {i.aDate} </td>
                <td> {i.eDate} </td>
                <td>
                  <AiFillDelete color="red" cursor={'pointer'}/>
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
  
        </Container>
      </>
    );
  };

export default HOC(City)