export const nameReducer = (state, action) => {
  switch (action) {
    case "CHANGE_NAME":
      return "Paani Bhardo";

    default:
      break;
  }
};
