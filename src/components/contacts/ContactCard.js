import React from "react";
import style from "./contacts.module.css";
import { Link, useNavigate,useParams } from "react-router-dom";
import {MdDeleteForever} from "react-icons/md"
import {MdModeEditOutline} from "react-icons/md"
const ContactCard = (props) => {
  const { id, name, email, address, phone, gender } = props.contact;
  const navigate=useNavigate();

  const detailsClick=()=>{
navigate(`/contact/${id}`,{state:props.contact});
  }
 
  return (
    <div className="item">
      <div className={style.card}>
        {/* <div><span>{name}</span>---<span>{email}</span>---<span>{address}</span>---<span>{phone}</span>---<span>{gender}</span></div> */}
        <td className={style.td}>
          <div onClick={detailsClick}>{name}</div>
        </td>
        <td className={style.td}>
          <div onClick={detailsClick}>{email}</div>
        </td>
        <td className={style.td}>
          <div onClick={detailsClick}>{phone}</div>
        </td>
        <td className={style.td}>
          <div onClick={detailsClick}>{gender}</div>
        </td>
        <td className={style.td}>
          <div className={style.trash}><MdDeleteForever onClick={()=>{props.clickHandler(id)}}/>&nbsp;&nbsp;&nbsp;<MdModeEditOutline onClick={()=>{navigate("/edit",{state:props.contact});}}/></div>
        </td>
      </div>
    </div>
  );
};

export default ContactCard;
