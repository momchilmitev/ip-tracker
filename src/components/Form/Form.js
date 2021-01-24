import "./Form.scss";
import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <form
      className="search__form"
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(term);
        setTerm("");
      }}
    >
      <input
        className="search__input"
        type="text"
        placeholder="Search for IP or domain"
        value={term}
        onChange={onInputChange}
      />
      <button className="search__btn"></button>
    </form>
  );
};

export default Form;
