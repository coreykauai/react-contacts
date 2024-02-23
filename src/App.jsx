import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      <h1>React Contacts</h1>
      <div className="contact-card">
        <h3>Jenny Smith</h3>
        <p>Phone: 808-867-5309</p>
        <p>Email: jenny@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
