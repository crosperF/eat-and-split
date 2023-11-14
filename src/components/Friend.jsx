const Friend = ({ friend_data, onOpenFrom, selected }) => {
    let msg;
    let msgClass;

    if (friend_data.balance == 0) {
        msgClass = "";
        msg = `You and ${friend_data.name} are even`;
    } else if (friend_data.balance < 0) {
        msgClass = "red";
        msg = `You owe ${friend_data.name} $${Math.abs(friend_data.balance)}`;
    } else {
        msgClass = "green";
        msg = `${friend_data.name} owes you $${Math.abs(friend_data.balance)}`;
    }

    return (
        <li className={selected ? "selected" : ""}>
            <img src={friend_data.image} alt="user" />
            <h3>{friend_data.name}</h3>
            <p className={msgClass}>{msg} </p>
            <button
                className="button"
                onClick={() => onOpenFrom(friend_data.id)}
            >
                {selected ? "Close" : "Select"}
            </button>
        </li>
    );
};

export default Friend;
