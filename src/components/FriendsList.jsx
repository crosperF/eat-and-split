import Friend from "./Friend";

const FriendsList = ({ friends_data, onOpenFrom, openFriendId }) => {
    return (
        <ul>
            {friends_data.map((el) => (
                <Friend
                    key={el.id}
                    friend_data={el}
                    onOpenFrom={onOpenFrom}
                    selected={openFriendId == el.id}
                />
            ))}
        </ul>
    );
};

export default FriendsList;
