export default function Form({ formData, dispatch }) {
  function nameChangeHandler(e) {
    dispatch({ type: "change_name", name: e.target.value });
  }
  function emailChangeHandler(e) {
    dispatch({ type: "change_email", email: e.target.value });
  }

  return (
    <>
      <div className="form-wrapper">
        <form>
          <div>
            <input onChange={nameChangeHandler} value={formData.name} type="text" placeholder="name" />
            <input onChange={emailChangeHandler} value={formData.email} type="email" placeholder="email" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
