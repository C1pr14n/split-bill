import React from "react";
import Button from "./Button";

const Friend = ({ friend, selectedFriend, onSelection }) => {
  const isSelected = selectedFriend?.id === friend.id;
  // comparing the IDs of the friend obj with the selectedFriend obj to get a boolean in order to show our 'selected' class
  // we also place the ?. after selectedFriend in case there is null coming as data on the selectedFriend

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ows you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
