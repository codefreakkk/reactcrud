import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function Edituser() {
  const params = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [state, setState] = useState(false);
  let navigate = useNavigate();

  function getUsersData() {
    let url = `http://localhost:8000/getuser/${params.id}`;
    url = `https://merncrud.vercel.app/getuser/${params.id}`;
    try {
      axios.get(url).then((response) => {
        setName(response.data.uname);
        setEmail(response.data.uemail);
        setState(true);
      });
    } catch (err) {
      alert("Some error occured");
    }
  }

  // handle submit
  function handleSubmit() {
    let url = `http://localhost:8000/edituser/${params.id}`;
    url = `https://merncrud.vercel.app/edituser/${params.id}`;
    if (name && email != "") {
      axios
        .patch(url, {
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
        {state ? (
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
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
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

export default Edituser;
