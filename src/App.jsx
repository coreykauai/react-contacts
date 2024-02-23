import { useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard/ContactCard";

function App() {
  return (
    <div className="page">
      <h1>React Contacts</h1>
      <ContactCard
        name={"Jenny Smith"}
        number={" 808-867-5309"}
        email={" jenny@gmail.com"}
      />
    </div>
  );
}

export default App;
