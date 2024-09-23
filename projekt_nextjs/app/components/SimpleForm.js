"use client"
import { useState } from "react";
function SimpleForm({ label, placeholder }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Wprowadzono:", inputValue);
  };
  return (
    <form onSubmit={handleSubmit}><label>{label}</label><input type="text"placeholder={placeholder}value={inputValue}onChange={(e) => setInputValue(e.target.value)}
    />
      
      <button type="submit">Wyślij</button></form>
  );
}

export default SimpleForm;