let balance = 0;

while (true) {
    const action = prompt("Choose action: -deposit -withdraw -check balance -exit").toLowerCase();
    if (action === "deposit") {
        let amount = prompt("Deposit balance:");
        if (amount < 0) {
            alert("Please enter a balance amount.");
        } else {
            balance += amount;
            alert(`Deposit balance is ${amount}. New balance is: ${balance}`);
        }
    }
    else if (action === "withdraw") {
        let amount = prompt("Enter amount to withdraw:");
        if (amount > balance) {
            alert("Insufficient balance");
        } else {
            balance -= amount;
            alert(`Withdrawn ${amount}. New balance is: ${balance}`);
        }
    }
    else if (action === "check balance") {
        alert(`Your balance is:${balance}`);
    }
    else if (action === "exit") {
        alert("Thank you for using Bank Manager")
    }
}