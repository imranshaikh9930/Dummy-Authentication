import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Profile() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("userData"));

  const id = data.id;
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data)
        setUser(data);
      });
  }, [id]);
  function handleLogout() {
    navigate("/");
  }

  console.log(user);

  return (
    <div className="profile">
      {user ? (
        <>
          <p>
            {" "}
            <b>ID:</b> {user.id}
          </p>
          <p>
            {" "}
            <b>Email:</b> {user.email}
          </p>
          <p>
            {" "}
            <b>FirstName: </b>
            {user.firstName}
          </p>
          <p>
            {" "}
            <b>LastName: </b>
            {user.lastName}
          </p>
          <p>
            {" "}
            <b>Gender: </b>
            {user.gender}
          </p>
          <img src={user.image} alt="" />

          <p>
            <b>UserName:</b>
            {user.username}
          </p>
          <p>
            <b>phone:</b>
            {user.phone}
          </p>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        "No Data Found"
      )}
    </div>
  );
}

export default Profile;
