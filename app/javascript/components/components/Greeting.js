import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { loadMessage } from '../../redux/messages/messages';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state);
  const loadMessageAction = bindActionCreators(loadMessage, dispatch);

  const handleClick = () => {
    loadMessageAction()
  }

  useEffect(() => {
    if (message.body === undefined) loadMessageAction();
    return () => null;
  }, []);

  return (
    <div>
      <h2>This is your random greeting page</h2>
      <p>Message: {message.body}</p>
      <button type="button" onClick={handleClick}>Refresh Greeting</button>
    </div>
  );
}

export default Greeting
