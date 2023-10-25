import { useState } from "react";

export default function Form({ setDirty }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function nameChangeHandler(e) {
    setName(e.target.value);
    setDirty(true);
  }
  function emailChangeHandler(e) {
    setEmail(e.target.value);
    setDirty(true);
  }

  return (
    <>
      <div className="form-wrapper">
        <form>
          <div>
            <input onChange={nameChangeHandler} value={name} type="text" placeholder="name" />
            <input onChange={emailChangeHandler} value={email} type="email" placeholder="email" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}