import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import style from "./edit.module.css"
const Edit = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const state = {
    name: name,
    email: email,
    address:address,
    phone:phone,
    gender:gender
  };
  const navigate = useNavigate();


  const add = (e) => {
    e.preventDefault();
    console.log(state);
    if (name === "" || email === "") {
      alert("all the fields are mandatory!");
      return;
    }
    props.addContactHandler(state);
    console.log("bvc");
    setName("");
    setEmail("");
    setGender("");
    setAddress("");
    setPhone("");
    navigate('/');
  };

  return (
    <div>
      <div className={style.input_content}>
        <form onSubmit={add} style={{width:"100%"}}>
          <div>
            <input
            className={style.input}
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            
            <input
            className={style.input}
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            
            <input
            className={style.input}
              type="text"
              name="address"
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div>
            
            <input
            className={style.input}
              type="text"
              name="phone"
              placeholder="phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div>
            
            {/* <input
              type="select"
              name="gender"
              placeholder="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            /> */}
            <select className={style.select} onChange={(e) => setGender(e.target.value)} name="gender" id="gender">
              <option value="hide">--Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.button_content}><button className={style.button}>SAVE</button></div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
