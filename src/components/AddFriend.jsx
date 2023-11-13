import { useState } from "react";

const AddFriend = ({ onAddFriend }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const onSubmittHandler = (e) => {
        e.preventDefault();
        if (name.trim().length == 0 || image.trim().length == 0) {
            return;
        }
        setName("");
        setImage("https://i.pravatar.cc/48");

        onAddFriend(name, image);
    };

    return (
        <form className="form-add-friend" onSubmit={onSubmittHandler}>
            <label>🔥 Friend Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <label>📱 image URL</label>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button className="button">Add</button>
        </form>
    );
};

export default AddFriend;
