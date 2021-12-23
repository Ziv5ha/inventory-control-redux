import { iteratorSymbol } from 'immer/dist/internal';
import { fullEquipmentList } from '../../DB';
export const inventoryReducer = (
  state: ReduxTypes.InventoryState[] = fullEquipmentList,
  action: ReduxTypes.InventoryAction
) => {
  if (!action.payload) return state;
  switch (action.type) {
    case 'INVENTORY_CHECK':
      const currentInventory = action.payload.map(
        ({ name, current, fullQuantity }) => ({
          name,
          fullQuantity,
          missing: fullQuantity - current,
        })
      );
      return currentInventory;
    case 'ADD_PRODUCT':
      const { name, current, fullQuantity } = action.payload[0];
      return [
        ...state,
        { name, fullQuantity, missing: fullQuantity - current, added: true },
      ];
    case 'REMOVE_PRODUCT':
      const item = action.payload[0];
      const newState = state.filter(
        ({ name, added }) => !added && name !== item.name
      );
      return newState;

    default:
      return state;
  }
};
