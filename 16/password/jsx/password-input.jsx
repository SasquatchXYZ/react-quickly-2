const React = require('react');

const PasswordInput = (props) => {
  return (
    <input
      className="form-control"
      type={props.visible ? 'text' : 'password'}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  )
};

export default PasswordInput;