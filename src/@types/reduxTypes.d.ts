declare namespace ReduxTypes {
  interface InventoryState {
    name: string;
    fullQuantity: number;
    missing?: number;
    added?: boolean;
  }
  interface InventoryAction {
    type: string;
    payload?: {
      name: string;
      current: number;
      fullQuantity: number;
    }[];
  }

  interface EmployeeState {
    fullName?: string;
    workPlace?: string;
    date?: Date;
  }
  interface EmployeeAction {
    type: string;
    payload?: {
      fullName: string;
      workPlace: string;
      date: Date;
    };
  }

  interface EquipmentItem {
    name: string;
    fullQuantity: number;
  }
}
