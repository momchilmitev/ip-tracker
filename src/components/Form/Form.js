import "./Form.scss";

const Form = () => {
  return (
    <form className="search__form">
      <input
        className="search__input"
        type="text"
        placeholder="Search for IP or domain"
      />
      <button className="search__btn"></button>
    </form>
  );
};

export default Form;
