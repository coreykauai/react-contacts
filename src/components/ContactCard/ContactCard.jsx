import "./ContactCard.css";
export default function ContactCard({ name, number, email }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>Phone:{number}</p>
      <p>Email:{email}</p>
    </div>
  );
}
