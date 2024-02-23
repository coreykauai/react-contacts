import "./ContactList.css";

import ContactCard from "../ContactCard/ContactCard";

export default function ContactList({ contacts }) {
  return (
    <ul className="contact-list">
      {contacts &&
        contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.number}
              name={`${contact.firstName} ${contact.lastName}`}
              number={contact.number}
              email={contact.email}
            />
          );
        })}
    </ul>
  );
}
