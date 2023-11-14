import { useState } from "react";
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
    let selectedFriendData = null;

    const addFriendHandler = (name, image) => {
        let newFriend = { name, image, balance: 0, id: Date.now() };
        setFriends((prev) => [...prev, newFriend]);
    };

    const openSplitFormHandler = (id) => {
        setOpenFormId(() => id);
    };

    const updateBalanceHandler = (id, balance) => {
        setFriends((prev) => {
            let updated_list = prev.map((el) => {
                if (el.id === id) {
                    el.balance = balance;
                }
                return el;
            });

            return updated_list;
        });
    };

    if (openFormId != null) {
        let filteredFrnd = friends.filter((el) => el.id === openFormId);
        selectedFriendData = filteredFrnd[0];
    }
    return (
        <div className="app">
            <SideBar
                friends={friends}
                onAddFriend={addFriendHandler}
                onOpenFrom={openSplitFormHandler}
            />
            {openFormId != null && (
                <SplitForm
                    friendDetails={selectedFriendData}
                    onBalanceUpdate={updateBalanceHandler}
                />
            )}
        </div>
    );
}

export default App;
