import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import style from "./contactDetails.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const ContactDetails = (props) => {
  const location = useLocation();
  const user = location.state;
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  //show modal
  const showDeleteHandler = () => {
    setShowDelete(!showDelete);
    console.log(showDelete);
  };

  //delete and cancel modal
  const DeleteContent = () => {
    //Delete operation at modal
    const deleteHandler = () => {
      props.deleteHandler(user.id);
      navigate("/");
    };
    return (
      <div>
        <nav>
          <ul>
            <div className={style.delete_cancel}>
              <li onClick={deleteHandler}>delete</li>
              <li onClick={() => setShowDelete(false)}>cancel</li>
            </div>
          </ul>
        </nav>
      </div>
    );
  };
  //Edit handler
  const editHandler = () => {
    navigate("/edit", { state: user });
  };

  return (
    <div className={style.container}>
      <div className={style.upper}>
        <div className={style.basic_detail}>
          <span>
            <Link to="/">
              <AiOutlineArrowLeft />
            </Link>
          </span>
          <div className={style.name_box}>
            <div className="img">
              <img src={user.img}></img>
            </div>
            <div className={style.name}>{user.name}</div>
          </div>
        </div>

        <div className={style.edit}>
          {showDelete ? <DeleteContent /> : ""}
          <div className={style.icon}>
            <BsThreeDotsVertical onClick={showDeleteHandler} />
          </div>
          <div>
            <button onClick={editHandler}>Edit</button>
          </div>
        </div>
      </div>

      <div className={style.details_container}>
        <div className={style.header}>contact details</div>
        <div className={style.div}>
          <div className={style.phone_icon}>
            <BsTelephone />
          </div>
          <div className={style.details}>
            <span>
              <a href={`tel:+91${user.phone}`}>{user.phone}</a>
            </span>
            <span>
              &nbsp;<small>• mobile</small>
            </span>
            <span>
              &nbsp;<small>{user.gender}</small>
            </span>
            <br></br>
            <br></br>
            <span>
              <small>
                <b>Address:</b> {user.address ? user.address : "none"}
              </small>
            </span>
            <br></br>
            <span>
              {user.email ? (
                <small>
                  <AiOutlineMail /> &nbsp;
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </small>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
