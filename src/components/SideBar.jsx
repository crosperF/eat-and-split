import { useState } from "react";
import AddFriend from "./AddFriend";
import FriendsList from "./FriendsList";

const SideBar = ({ friends, onAddFriend, onOpenFrom }) => {
    const [showAddForm, setShowAddForm] = useState(false);

    const showFormHandler = () => {
        setShowAddForm((prev) => !prev);
    };

    return (
        <div className="sidebar">
            <FriendsList friends_data={friends} onOpenFrom={onOpenFrom}/>
            {showAddForm && <AddFriend onAddFriend={onAddFriend} />}

            <button className="button" onClick={() => showFormHandler()}>
                {showAddForm ? "Close" : "Add Friend"}
            </button>
        </div>
    );
};

export default SideBar;
