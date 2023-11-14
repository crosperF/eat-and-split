import { useState } from "react";

const SplitForm = ({ friendDetails, onBalanceUpdate }) => {

    const [totalBill, setTotalBill] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [friendExpense, setFriendExpense] = useState(0);
    const [payer, setPayer] = useState("user");

    const totalBillHandler = (e) => {
        setTotalBill(Number(e.target.value));
    };
    const yourExpenseHandler = (e) => {
        setYourExpense(Number(e.target.value));
    };
    const friendExpenseHandler = (e) => {
        setFriendExpense(Number(e.target.value));
    };
    const selectPayerHandler = (e) => {
        setPayer(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (yourExpense + friendExpense != totalBill) {
            alert("split vales does not add up to the total bill");
            return;
        }

        let balance = 0;
        if (payer === "user") {
            let friend_owes = totalBill - yourExpense;
            balance = friend_owes;
        } else {
            let you_owe = totalBill - friendExpense;
            balance = you_owe * -1;
        }

        onBalanceUpdate(friendDetails.id, balance);

        setTotalBill(0);
        setYourExpense(0);
        setFriendExpense(0);
        setPayer("user");
    };

    return (
        <form className="form-split-bill" onSubmit={formSubmitHandler}>
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

            <label onChange={selectPayerHandler}>
                🤑 Who is paying the bill
            </label>
            <select value={payer} onChange={selectPayerHandler}>
                <option value="user">You</option>
                <option value="friend">{friendDetails.name}</option>
            </select>
            <button className="button">Split bill</button>
        </form>
    );
};

export default SplitForm;
