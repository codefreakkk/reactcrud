import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  let [data, setData] = useState([]);

  // delete user
  function handleDelete(id) {
    axios.delete(`http://localhost:8000/deleteuser/${id}`);
  }

  // get users
  function getUsers() {
    axios
      .get("http://localhost:8000/adduser")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log("Some error occured"));
  }

  useEffect(() => {
    getUsers();
  }, [handleDelete]);

  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => {
              return (
                <tr key={ele._id}>
                  <td>{ele.uname}</td>
                  <td>{ele.uemail}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{ marginRight: 10 }}
                    >
                      <Link
                        to={`/edituser/${ele._id}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Edit
                      </Link>
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleDelete(ele._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
