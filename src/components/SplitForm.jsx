import { useState } from "react";

const SplitForm = ({ friendDetails }) => {
    const [totalBill, setTotalBill] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [friendExpense, setFriendExpense] = useState(0);

    const totalBillHandler = () => {};
    const yourExpenseHandler = () => {};
    const friendExpenseHandler = () => {};
    const selectFriendHandler = () => {};

    return (
        <form className="form-split-bill">
            <h2>Split a bill with {friendDetails.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={totalBill} onChange={totalBillHandler} />

            <label>🧍‍♀️ Your expense</label>
            <input
                type="text"
                value={yourExpense}
                onChange={yourExpenseHandler}
            />

            <label>👫 {friendDetails.name}&apos;s expense</label>
            <input
                type="text"
                disabled=""
                value={friendExpense}
                onChange={friendExpenseHandler}
            />

            <label onChange={selectFriendHandler} >🤑 Who is paying the bill</label>
            <select>
                <option value="user">You</option>
                <option value="friend">{friendDetails.name}</option>
            </select>
            <button className="button">Split bill</button>
        </form>
    );
};

export default SplitForm;
