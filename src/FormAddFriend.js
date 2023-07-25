import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !img) return;

    //creating a newFriend obj so we can add it later on our array:
    const id = crypto.randomUUID(); // creates random IDs right in the browser
    const newFriend = {
      id,
      name,
      image: `${img}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImg("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
