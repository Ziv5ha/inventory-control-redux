export const employeeReducer = (
  state: ReduxTypes.EmployeeState = {},
  action: ReduxTypes.EmployeeAction
) => {
  if (!action.payload) return state;
  switch (action.type) {
    case 'CURRENT_EMPLOYEE':
      const { fullName, workPlace, date } = action.payload;
      return { fullName, workPlace, date };

    default:
      return state;
  }
};
