import { FormEvent, useState } from "react";
import "./Form.css";

const Form = () => {
  const [ipAddressInput, setIpAddressInput] = useState("");
  const submitHandler = (e: FormEvent) => {
    //prevent page refresh:
    e.preventDefault();

    //clear form:
    setIpAddressInput("");
  };
  return (
    <form className="Form" onSubmit={submitHandler}>
      <label htmlFor="ip-address-input"></label>
      <input
        type="text"
        name="ip-address-input"
        id="ip-address-input"
        value={ipAddressInput}
        onChange={(e) => {
          setIpAddressInput(e.target.value);
        }}
      />
      <button>
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
};

export default Form;
