import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  let [data, setData] = useState([]);
  let [state, setState] = useState(false);

  // delete user
  function handleDelete(id) {
    let url = `http://localhost:8000/deleteuser/${id}`;
    url = `https://merncrud.vercel.app/deleteuser/${id}`;
    axios.delete(url);
  }

  // get users
  function getUsers() {
    let url = "http://localhost:8000/adduser";
    url = "https://merncrud.vercel.app/adduser";
    axios
      .get(url)
      .then((response) => {
        setState(true);
        setData(response.data);
      })
      .catch((err) => console.log("Some error occured"));
  }

  useEffect(() => {
    getUsers();
  });

  return (
    <>
      <div className="container mt-5">
        {state ? (
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
        ) : (
          <div
            className="container"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {<Spinner animation="border" />}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
