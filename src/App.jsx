import { useState } from "react";
import { dummyContacts } from "./assets/data/contacts";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import MaskedInput from "react-text-mask";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="page">
      <h1>React Contacts</h1>

      <form className="form-container">
        <label>
          First Name:
          <input
            type="text"
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setFirstName(value);
            }}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setLastName(value);
            }}
          />
        </label>

        <label>
          Phone Number:
          <MaskedInput
            mask={[
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            guide={true}
            className="form-input"
            onChange={(event) => {
              const value = event.target.value;
              setNumber(value);
            }}
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            className="form-input"
            pattern=".+@example\.com"
            onChange={(event) => {
              const value = event.target.value;
              setEmail(value);
            }}
          ></input>
        </label>
        <button
          type="submit"
          className="form-button"
          onClick={(event) => {
            event.preventDefault();
            const newContact = {
              firstName,
              lastName,
              number,
              email,
            };

            const updatedContacts = [...contacts, newContact];
            setContacts(updatedContacts);

            console.log("Submit clicked!");
          }}
        >
          Create Contact
        </button>
      </form>

      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
