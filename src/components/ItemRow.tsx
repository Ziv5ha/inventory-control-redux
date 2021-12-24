import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ItemRow({
  item: { name, fullQuantity, missing, added },
}: {
  item: ReduxTypes.InventoryState;
}) {
  const inventory = useSelector((state: RootState) => state.inventory);
  const dispatch = useDispatch();
  const currentRef = useRef<HTMLInputElement>(null);

  const changeHandler = () => {
    const current = currentRef.current?.value;
    dispatch({
      type: 'INVENTORY_CHECK',
      payload: [...inventory],
      current,
      name,
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{fullQuantity}</td>
      <td>
        <input
          type='number'
          ref={currentRef}
          onChange={changeHandler}
          min={0}
          max={fullQuantity}
          defaultValue={missing ? fullQuantity - missing : 0}
        />
      </td>
      <td>{missing || 0}</td>

      {added ? (
        <button
          onClick={() => {
            dispatch({
              type: 'REMOVE_PRODUCT',
              payload: [{ name, fullQuantity, missing, added }],
            });
          }}
        >
          Remove
        </button>
      ) : (
        ''
      )}
    </tr>
  );
}
