function selectButton(state = {}, action) {
  switch (action.type) {
    case "SELECT_BUTTON":
      console.log("4.Update redux state");

      return {
        selectedButton: action.selectedButton
      };

    case "RESET BUTTON":
      return {
        selectedButton: undefined
      };

    default:
      return state;
  }
}

export default selectButton;
