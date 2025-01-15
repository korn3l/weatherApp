const initialState = "metric";

const unitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UNITS":
      return action.payload;
    default:
      return state;
  }
};

export default unitsReducer;
