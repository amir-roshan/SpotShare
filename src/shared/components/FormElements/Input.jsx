import "./Input.css";

const Input = ({ id, label, element, type, placeholder, rows }) => {
  const createdElement =
    element === "input" ? (
      <input type={type} id={id} placeholder={placeholder} />
    ) : (
      <textarea id={id} placeholder={placeholder} rows={rows || 3}></textarea>
    );

  return (
    <>
      <div className={`form-control`}>
        <label htmlFor={id}>{label}</label>
        {createdElement}
      </div>
    </>
  );
};

export default Input;
