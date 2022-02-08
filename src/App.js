import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import CreateProfile from "./components/create/CreateProfile";
import Contacts from "./components/contacts/Contacts";
import ContactDetails from "./components/details/ContactDetails";
import Edit from "./components/edit/Edit";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: Math.random() * 10, ...contact }]);
  };
  const updateContactHandler = (user) => {
    console.log(user);
    const { id } = user;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...user } : contact;
      })
    );
  };
  const searchHandler = (search) => {
    setSearchTerm(search);
    console.log(search);
  };
  useEffect(() => {
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
      console.log(searchTerm);
      console.log(newContactList);
    } else {
      setSearchResults(contacts);
    }
  }, [searchTerm]);
  //console.log("saerch",search);
  /* if (search!==""){
  const newContactList=contacts.filter((contact)=>{
   return Object.values(contact).join("").toLowerCase().includes(search.toLowerCase());
  })
  setSearchResults(newContactList);
}
else{
  setSearchResults(contacts)
} */

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <BrowserRouter>
        <Header
          searchTerm={searchTerm}
          searchHandler={searchHandler}
          contacts={contacts}
        />
        <Routes>
          <Route
            path="/add"
            element={<CreateProfile addContactHandler={addContactHandler} />}
            exact
          />
          <Route
            path="/"
            element={
              <Contacts
                contacts={searchTerm.length > 1 ? searchResults : contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/contact/:id"
            element={<ContactDetails deleteHandler={removeContactHandler} />}
          ></Route>
          <Route
            path="/edit"
            element={<Edit updateContactHandler={updateContactHandler} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
