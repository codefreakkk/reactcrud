import axios from "axios";
import React, { useState } from "react";

function Adduser() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  //   handle form
  function handleSubmit() {
    if (name && email != "") {
      axios
        .post("http://localhost:8000/adduser", {
          uname: name,
          uemail: email,
        })
        .then((response) => {
          if (response.data.inserted) {
            setName("");
            setEmail("");
            alert("data inserted");
          }
        })
        .catch((err) => alert("Some error Occured"));
    } else {
      alert("Please fill all the data");
    }
  }

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

export default Adduser;
