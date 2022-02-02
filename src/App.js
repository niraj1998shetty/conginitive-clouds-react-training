import React, { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css";
import Header from "./components/header/Header";
import CreateProfile from "./components/create/CreateProfile";
import Contacts from "./components/contacts/Contacts";
import ContactDetails from "./components/details/ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id:Math.random()*10, ...contact}]);
    
  };

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
      <Header/>
      <Routes>
      <Route path="/add" element={<CreateProfile addContactHandler={addContactHandler}/>} exact/>
      <Route path="/" element={<Contacts contacts={contacts} getContactId={removeContactHandler}/>}/>
      <Route path="/contact/:id" element={<ContactDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
