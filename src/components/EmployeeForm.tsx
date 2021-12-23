import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

export default function EmployeeForm() {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const wordPlaceRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const submitFunc = () => {
    if (!(nameRef.current && wordPlaceRef.current && dateRef.current)) return;
    const fullName = nameRef.current.value;
    const workPlace = wordPlaceRef.current.value;
    const date = dateRef.current.value;
    dispatch({
      type: 'CURRENT_EMPLOYEE',
      payload: { fullName, workPlace, date },
    });
  };
  return (
    <div>
      <label htmlFor='name-input'></label>
      <input
        ref={nameRef}
        type='text'
        name='name-input'
        placeholder='Enter Name'
      />
      <label htmlFor='work-place-input'></label>
      <input
        ref={wordPlaceRef}
        type='text'
        name='work-place-input'
        placeholder='Enter Work Place'
      />
      <label htmlFor='date-input'></label>
      <input ref={dateRef} type='date' name='date-input' />
      <button onClick={submitFunc}>Continue</button>
    </div>
  );
}
