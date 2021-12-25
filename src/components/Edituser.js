import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Edituser() {
  const params = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  function getUsersData() {
    try {
      axios
        .get(`http://localhost:8000/getuser/${params.id}`)
        .then((response) => {
          setName(response.data.uname);
          setEmail(response.data.uemail);
        });
    } catch (err) {
      alert("Some error occured");
    }
  }

  // handle submit
  function handleSubmit() {
    if (name && email != "") {
      axios
        .patch(`http://localhost:8000/edituser/${params.id}`, {
          uname: name,
          uemail: email,
        })
        .then((response) => {
          if (response.data.updated == true) {
            navigate("/");
          } else {
            alert("Some error Occured");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill all the data");
    }
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Edituser;
