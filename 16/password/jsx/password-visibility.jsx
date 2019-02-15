const React = require('react');

const PasswordVisibility = (props) => {
  return (
    <label className="form-control">
      <input
        className=""
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      Show Password
    </label>
  )
};

export default PasswordVisibility;