import React, { useState } from "react";
import style from "./contacts.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
const ContactCard = (props) => {
  const { id, name, email, address, phone, gender, img } = props.contact;
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const detailsClick = () => {
    navigate(`/contact/${id}`, { state: props.contact });
  };
  const editClick = () => {
    navigate("/edit", { state: props.contact });
  };
  const hover = () => {
    setIsHover(true);
  };
  return (
    <div className="item">
      <div
        onMouseOver={hover}
        onMouseLeave={() => setIsHover(false)}
        className={style.card}
      >
        {/* <div><span>{name}</span>---<span>{email}</span>---<span>{address}</span>---<span>{phone}</span>---<span>{gender}</span></div> */}
        <td className={style.td}>
          <div className={style.img_name} onClick={detailsClick}>
            <div>
              <img className={style.img} src={img}></img>
            </div>
            <div className={style.name}>{name}</div>
          </div>
        </td>
        <td className={style.td}>
          <div className={style.email_content} onClick={detailsClick}>
            {email}
          </div>
        </td>
        <td className={style.td}>
          <div className={style.phone_content} onClick={detailsClick}>
            {phone}
          </div>
        </td>
        <td className={style.td}>
          <div className={style.gender_content} onClick={detailsClick}>
            {gender}
          </div>
        </td>
        <td className={style.td}>
          <div
            className={
              !isHover ? style.hover : (style.trash, style.trash_content)
            }
          >
            <MdDelete
              onClick={() => {
                props.clickHandler(id);
              }}
            />
            &nbsp;&nbsp;&nbsp;
            <MdModeEditOutline onClick={editClick} />
          </div>
        </td>
      </div>
    </div>
  );
};

export default ContactCard;
