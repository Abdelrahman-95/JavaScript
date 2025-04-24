let = storItems =   ["iphone11" , "iphone12" , "iphone13"] ;

function showItmes(){
    console.clear()
    console.table(storItems);
}

function addItmes(){
    newItem = prompt("add new itme to list items");
    storItems.push(newItem);
    showItmes();
}

function editItems(){
    let editItem = confirm("You want edit by index or by item of name (by index = ok , by item name = cancel )");
    if(editItem){
        Index = +prompt("Enter index of Items to Edit.");
        editItemByIndex = prompt(`You want change ${storItems[Index]} to `);
        storItems[Index] = editItemByIndex
    }
    else{
        editItemByIndex = prompt("Enter name of Items to Edit.");
        let toName = storItems.indexOf(editItemByIndex);
        editItemByName = prompt(`You want change ${storItems[toName]} to `);
        storItems[toName] = editItemByName
    }
    showItmes()
}

function removeItems(){
    let removeItem = confirm("You want delete by index or by item of name (by index = ok , by item name = cancel )");
    if(removeItem){
        remove = +prompt("Enter index of Items to Delete.");
        // delete(storItems[remove]);
        storItems.splice(remove,1)
    }
    else{
        remove = prompt("Enter name of Items to Delete.");
        toInedx = storItems.indexOf(remove);
        storItems.splice(toInedx,1)
    }
    showItmes();
}