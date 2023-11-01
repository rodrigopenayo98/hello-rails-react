import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './store/greetingSlice';


const Greeting = () => {

  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.value);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (

    <div>
      <h1>{greeting}</h1>
    </div>
    
  );
};


export default Greeting;