import React from "react"
import PropTypes from "prop-types"

const Greeting = ({message}) => {
  console.log(message)
  return (
    <React.Fragment>
      Message: {message}
    </React.Fragment>
  );
}

Greeting.propTypes = {
  message: PropTypes.string
};

export default Greeting
