import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "../create/create.module.css";
import { BiImageAdd } from "react-icons/bi";
const Edit = (props) => {
  const phoneNo = /^\d{10}$/;
  const regName = /^([a-zA-Z ]){2,30}$/;

  const location = useLocation();
  const user = location.state;
  console.log(user);
  const [baseImage, setBaseImage] = useState("");
  const { id, name, email, address, phone, gender, img } = user;
  let [state, setState] = useState({
    id: id,
    name: name,
    email: email,
    address: address,
    phone: phone,
    gender: gender,
    img: img,
  });
  const [imageChanged, setImageChanged] = useState(false);
  console.log(state.name);
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    console.log(state);
    if (!(phone.length === 10 && phoneNo.test(phone))) {
      alert("please Enter valid Phone Number and must be equal to 10 digits");
      return;
    }
    if (!regName.test(name)) {
      alert("please Enter a valid Name");
      return;
    }

    props.updateContactHandler(state);
    console.log("bvc");
    navigate(`/contact/${id}`, { state: state });
  };
  const getImage = async (e) => {
    const file = e.target.files[0];
    const base16 = await toBase16(file);
    setBaseImage(base16);
    state.img = base16;
    setImageChanged(true);
  };
  const toBase16 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
        console.log(fileReader.result);
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
        <form onSubmit={update} style={{ width: "100%" }}>
          <div className={style.imgContainer}>
            <img
              src={imageChanged ? baseImage : state.img}
              className={style.imageContainer}
            ></img>
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
              onChange={(e) => {
                setState({ ...state, name: e.target.value });
              }}
              value={state.name}
            />
          </div>
          <div>
            <input
              className={style.input}
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
              value={state.email}
            />
          </div>
          <div>
            <input
              className={style.input}
              type="text"
              name="address"
              placeholder="address"
              onChange={(e) => setState({ ...state, address: e.target.value })}
              value={state.address}
            />
          </div>
          <div>
            <input
              className={style.input}
              type="phone"
              name="phone"
              placeholder="phone number"
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              value={state.phone}
            />
          </div>
          <div>
            <select
              className={style.select}
              onChange={(e) => setState({ ...state, gender: e.target.value })}
              name="gender"
              id="gender"
            >
              <option value="hide">--Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.button_content}>
            <button className={style.button}>UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
