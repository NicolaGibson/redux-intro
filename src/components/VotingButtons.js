import React from "react";
import cx from "classnames";

const buttons = ["Camel", "Duck", "Donut", "Potato", "Mash potato"];

function VotingButtons({ selectedButton, dispatch }) {
  function handleClick(button) {
    dispatch({
      type: "SELECT_BUTTON",
      selectedButton: button
    });
    console.log("3.Dispatch new button select action");
  }

  function onClick(event) {
    event.preventDefault();
    dispatch({
      type: "RESET BUTTON"
    });
  }

  return (
    <div>
      {buttons.map(button => {
        const classes = cx("voting-button", {
          "voting-button--selected": selectedButton === button
        });
        return (
          <button
            key={button}
            className={classes}
            onClick={event => handleClick(button)}
          >
            {button}
          </button>
        );
      })}
      <a onClick={onClick} href="#">
        Reset
      </a>
    </div>
  );
}

export default VotingButtons;
