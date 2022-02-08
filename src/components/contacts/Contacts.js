import React from "react";
import ContactCard from "./ContactCard";
import style from "./contacts.module.css";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const ContactList = (props) => {
  const navigate = useNavigate();
  console.log(props);
  console.log(props.contacts.length);

  if (props.contacts.length === 0) {
    return (
      <div className={style.main_content}>
        <div className={style.NoContacts}>
          <div>No Contacts Yet</div>

          <div className={style.addLink} onClick={() => navigate("add")}>
            <CgProfile />

            <p className={style.button}>&nbsp;&nbsp;Add Contacts</p>
          </div>
        </div>
      </div>
    );
  }
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <>
        <ContactCard
          contact={contact}
          clickHandler={deleteConactHandler}
          key={contact.id}
        />
      </>
    );
  });
  return (
    <>
      <main className={style.main_content}>
        <div className={style.header}>
          <div>Name</div>
          <div>Email</div>
          <div>Phone Number</div>
          <div>Gender</div>
          <div className={style.dots}>&#xFE19;</div>
        </div>

        <main className={style.list_content}>
          <table className={style.table}>
            <tbody>
              <tr>{renderContactList}</tr>
            </tbody>
          </table>
        </main>
      </main>
    </>
  );
};

export default ContactList;
