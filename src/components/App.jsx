import { useState } from "react";
import AddFriend from "./AddFriend";
import FriendsList from "./FriendsList";
import SideBar from "./SideBar";
import SplitForm from "./SplitForm";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [openFormId, setOpenFormId] = useState(null);

    const addFriendHandler = (name, image) => {
        let newFriend = { name, image, balance: 0, id: Date.now() };
        setFriends((prev) => [...prev, newFriend]);
    };

    const openSplitFormHandler = (id) => {
        console.log(id);
        setOpenFormId(() => id);
    };

    return (
        <div className="app">
            <SideBar
                friends={friends}
                onAddFriend={addFriendHandler}
                onOpenFrom={openSplitFormHandler}
            />
            {openFormId != null && (
                <SplitForm friendDetails={{ name: "John" }} />
            )}
        </div>
    );
}

export default App;
