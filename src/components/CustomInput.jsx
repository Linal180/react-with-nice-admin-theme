

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="row mb-3">
      <label htmlFor={name} className="col-md-4 col-lg-3 col-form-label">{label}</label>
      <div className="col-md-8 col-lg-9">
        <input
          name={name}
          type={type}
          className="form-control"
          id={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
