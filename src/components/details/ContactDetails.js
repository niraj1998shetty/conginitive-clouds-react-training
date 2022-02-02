import React from "react";
import { useLocation,Link} from "react-router-dom";
import style from "./contactDetails.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
const ContactDetails = (props) => {
  const location = useLocation();
  const user = location.state;
  return (
    <div className={style.container}>
      <div className={style.upper}>
        <div className={style.basic_detail}>
          <span>
            <Link to="/"><AiOutlineArrowLeft /></Link>
          </span>
          <div className={style.name_box}>
            <div className="img">
              <img src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/V8BNOaftJmYAp2p_Gru2GDD5qNFKgOOLwCLcDEAEiGQoBQRD___________8BGKevgvj______wE/s272-p-k-rw-no/photo.jpg"></img>
            </div>
            <div className={style.name}>{user.name}</div>
          </div>
        </div>
        <div className={style.edit}>
          <div className={style.icon}>
            <BsThreeDotsVertical />
          </div>
          <div>
            <button>Edit</button>
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
            <span><a href="tel:+919901660291">{user.phone}</a></span>
            <span>&nbsp;<small>• mobile</small></span>
            <span>&nbsp;<small>• {user.gender}</small></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
