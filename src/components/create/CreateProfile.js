import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../images/images";
import style from "./create.module.css";
import { BiImageAdd } from "react-icons/bi";
const CreateProfile = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const phoneNo = /^\d{10}$/;
  const regName = /^([a-zA-Z ]){2,30}$/;
  const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const [baseImage, setBaseImage] = useState("");
  const state = {
    name: name,
    email: email,
    address: address,
    phone: phone,
    gender: gender,
    img: baseImage,
  };
  console.log(phoneNo.test(phone));
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    if (!(phone.length === 10 && phoneNo.test(phone))) {
      alert("please Enter valid Phone Number and must be equal to 10 digits");
      return;
    }
    if (!regName.test(name)) {
      alert("please Enter a valid Name");
      return;
    }
    if (!regEmail.test(email)) {
      alert("Please Enter valid Email");
      return;
    }
    console.log(state);
    props.addContactHandler(state);
    console.log("bvc");
    setName("");
    setEmail("");
    setGender("");
    setAddress("");
    setPhone("");
    navigate("/");
  };
  /* const letter = images("a");
  console.log(letter); */
  const getImage = async (e) => {
    console.log(e);
    const file = e.target.files[0];
    const base16 = await toBase16(file);
    setBaseImage(base16);
    console.log(base16);
  };
  const toBase16 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const selectFile = () => {
    document.getElementById("selectFile").click();
  };
  return (
    <div>
      <div className={style.input_content}>
        <form onSubmit={add} style={{ width: "100%" }}>
          {/*   <div>
            <input type="file" onChange={getImage} />
          </div> */}

          <div className={style.imgContainer}>
            <img src={baseImage} className={style.imageContainer}></img>
            <div className={style.addIconContainer} onClick={selectFile}>
              <div className={style.addIcon}>
                <BiImageAdd />
              </div>
            </div>
            <input
              type="file"
              onChange={getImage}
              className={style.selectFile}
              id="selectFile"
            ></input>{" "}
          </div>

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
              type="email"
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
              type="phone"
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
            <select
              className={style.select}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              id="gender"
            >
              <option value="hide">--Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.button_content}>
            <button className={style.button}>SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
