import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { loadMessage } from '../../redux/messages/messages';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state);
  const loadMessageAction = bindActionCreators(loadMessage, dispatch);

  useEffect(() => {
    if (message.body === undefined) loadMessageAction();
    return () => null;
  }, []);

  return (
    <div>
      <h2>This is your random greeting page</h2>
      Message: {message.body}
    </div>
  );
}

export default Greeting
