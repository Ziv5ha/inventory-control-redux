import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/inventory-form.css';

export default function NewItemForm() {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const currentRef = useRef<HTMLInputElement>(null);
  const clickHandler = () => {
    const name = nameRef.current?.value;
    const fullQuantity = quantityRef.current?.value;
    const current = currentRef.current?.value;
    dispatch({
      type: 'ADD_PRODUCT',
      payload: [{ name, fullQuantity, current }],
    });
  };
  return (
    <div className='form-container'>
      <div className='inputs'>
        <label htmlFor='name'>Product Name:</label>
        <input
          name='name'
          placeholder='Enter Product Name'
          ref={nameRef}
          type='text'
        />
      </div>

      <div className='inputs'>
        <label htmlFor='quantity'>Quantity:</label>
        <input
          name='quantity'
          placeholder='Enter Quantity'
          ref={quantityRef}
          type='number'
        />
      </div>

      <div className='inputs'>
        <label htmlFor='current'>Current Quantity:</label>
        <input
          name='current'
          placeholder='Enter Current Quantity'
          ref={currentRef}
          type='number'
        />
      </div>

      <button onClick={clickHandler}>Submit New Product</button>
    </div>
  );
}
