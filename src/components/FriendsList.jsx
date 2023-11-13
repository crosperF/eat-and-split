import Friend from "./Friend";

const FriendsList = ({ friends_data, onOpenFrom }) => {
    return (
        <ul>
            {friends_data.map((el) => (
                <Friend key={el.id} friend_data={el} onOpenFrom={onOpenFrom} />
            ))}
        </ul>
    );
};

export default FriendsList;
