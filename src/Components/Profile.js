import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import "../App.css";
function Profile() {
    const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("userData"));
 
  const id = data.id;
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
       console.log(data)
      });
  }, [id]);
  function handleLogout(){

    navigate("/");
  }

  return (
    <div className="profile">

          {data ? (
        <>
          <p>
            {" "}
            <b>ID:</b> {data.id}
          </p>
          <p>
            {" "}
            <b>Email:</b> {data.email}
          </p>
          <p>
            {" "}
            <b>FirstName: </b>
            {data.firstName}
          </p>
          <p>
            {" "}
            <b>Gender: </b>
            {data.gender}
          </p>
          <img src={data.image} alt="" />
          <p className="token">
            <b>Token:</b> {data.token}
          </p>
          <p>
            <b>UserName:</b>
            {data.username}
          </p>
          <button className="logout" onClick={handleLogout}>Logout</button>
   
        </>
      ) : (
        "No Data Found"
      )}
    </div>
  );
}

export default Profile;
