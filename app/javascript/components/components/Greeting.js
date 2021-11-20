import React from "react"
import PropTypes from "prop-types"

const Greeting = ({message}) => {
  console.log(message)
  return (
    <div>
      <h2>This is your random greeting</h2>
      Message: {message}
    </div>
  );
}

Greeting.propTypes = {
  message: PropTypes.string
};

export default Greeting
