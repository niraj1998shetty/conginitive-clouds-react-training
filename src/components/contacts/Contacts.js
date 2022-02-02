import React from "react";
import ContactCard from "./ContactCard";
import style from "./contacts.module.css";
const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (<>
      <ContactCard
        contact={contact}
        clickHandler={deleteConactHandler}
        key={contact.id}
      />
   </> );
  });
  return (
    <div>
      <main className={style.main_content}>
        <div className={style.header}>
          <div>Name</div>
          <div>Email</div>
          <div>Phone Number</div>
          <div>Gender</div>
          <div className={style.dots}>&#xFE19;</div>
        </div>
<div></div>
        <div className={style.list_content}>
          <table className={style.table}>
            <tbody><tr>
          {renderContactList}
          </tr></tbody></table></div>
      </main>
    </div>
  );
};

export default ContactList;
