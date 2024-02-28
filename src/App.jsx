import { useState } from "react";
import { dummyContacts } from "./assets/data/contacts";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <div className="page">
      <h1>React Contacts</h1>

      <ContactForm
        onFormSubmissionHandler={(newContact) => {
          const updatedContacts = [...contacts, newContact];
          setContacts(updatedContacts);
        }}
      />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
