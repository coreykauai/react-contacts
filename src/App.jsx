import { useState } from "react";
import { dummyContacts } from "./assets/data/contacts";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [searchText, setSearchText] = useState("");
  const displayedContacts = contacts.filter((contact) => {
    const lowerCaseName = `
      ${contact.firstName} ${contact.lastName}`.toLowerCase();
    return lowerCaseName.includes(searchText.toLowerCase());
  });

  return (
    <div className="page">
      <h1>React Contacts</h1>

      <ContactForm
        onFormSubmissionHandler={(newContact) => {
          const isEmailOrPhoneinContacts = contacts.some((contact) => {
            return (
              contact.number === newContact.number ||
              contact.email === newContact.email
            );
          });
          if (isEmailOrPhoneinContacts) {
            alert("Duplicate Card");
            return;
          }
          const updatedContacts = [...contacts, newContact];
          setContacts(updatedContacts);
        }}
      />

      <div className="searcher">
        <input
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          type="text"
          placeholder="Search Contacts"
        />
      </div>

      <ContactList
        contacts={displayedContacts}
        onCardDeleteClicked={(number) => {
          const updatedContacts = contacts.filter((contact) => {
            return contact.number !== number;
          });
          setContacts(updatedContacts);
        }}
      />
    </div>
  );
}

export default App;
