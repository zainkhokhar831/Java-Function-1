let items = [];
function add() {
    let item = prompt("Enter the item to add to the list:");
    if (item) {
        items.push(item);  
        alert(item + " has been added to the list.");
    } else {
        alert("No item entered.");
    }
}
function remove() {
    let item = prompt("Enter the item to remove from the list:");
    const index = items.indexOf(item);  
    if (index !== -1) {
        items.splice(index, 1); 
        alert(item + " has been removed from the list.");
    } else {
        alert(item + " is not in the list.");
    }
}
function manageList() {
    let action = prompt("Do you want to 'add' or 'remove' an item?");
  
    if (action === 'add') {
        add();  
    } else if (action === 'remove') {
        remove();  
    } else {
        alert("Invalid action. Please enter 'add' or 'remove'.");
    }

    let continueAction = prompt("Do you want to continue? (yes/no)");

    if (continueAction.toLowerCase() === "yes") {
        manageList();  
    } else {
        alert("Your final list: " + items.join(", "));
    }
}
manageList();
