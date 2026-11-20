let inputItem = document.getElementById("inputItem");
let addItemButton = document.getElementById("addItemButton");
const listContainer = document.getElementById("shoppinglist");
const listItems = document.querySelectorAll("#shoppinglist li");
const shoppingList = Array.from(listItems, li=>li.textContent.trim());


//********************************************* */
//adding item to the list
addItemButton.addEventListener("click", function () {
  
 
  if (inputItem.value.trim() === "") {
    alert("Please enter a Item!");
    return;
  }
  shoppingList.push(inputItem.value);
  displayList(shoppingList);
  inputItem.value = ""; // Clear the input field
});


//********************************************* */
//deleting item to the list
let deleteItemButton = document.getElementById("deleteItemButton");

 
deleteItemButton.addEventListener("click", function () {
    // const itemText = inputItem.value.trim();
    //     if (itemText === "") {
    //     alert("Please enter a item!");
    //     return;
    // }
    // const indexNo=shoppingList.indexOf(itemText);
    //     if (indexNo===-1){
    //         alert("Item is not present in the shopping list");
    //         inputItem.value = ""; // Clear the input field
            
    //     }

    //     else{
    //         shoppingList.splice(indexNo, 1);
    //         displayList(shoppingList);
    //         inputItem.value = ""; // Clear the input field

    //     }
        shoppingList.pop();
        displayList(shoppingList);
        inputItem.value = ""; // Clear the input field

    }) 

//************************************************ */
//function to update the shopping list on webpage 

    function displayList(list) {
  
    listContainer.innerHTML = "";     // delete existing listfrom webpage

  
  for (const item of list) {
    const li = document.createElement("li");
    li.textContent = item;
    console.log(li.textContent);
    listContainer.appendChild(li);
  }
}

/********************************************************** */
//adding item to the list
addUniqueItemButton.addEventListener("click", function () {
    if (inputItem.value.trim() === "") {
    alert("Please enter a Item add!");
    return;
  }
    addItem();
})


function addItem(){
    const itemText = inputItem.value.trim();
    const indexNo=shoppingList.indexOf(itemText);
        if (indexNo===-1){
            shoppingList.push(inputItem.value);
            displayList(shoppingList);
            inputItem.value = ""; // Clear the input field                        
        }

        else{
            alert("Item is already present in the shopping list");
            inputItem.value = ""; // Clear the input field

        }
}

/********************************************************** */
//Search item in the list
searchItemButton.addEventListener("click", function () {
    if (inputItem.value.trim() === "") {
    alert("Please enter a Item to search!");
    return;
  }
    filterItems();
})

function filterItems(){
    const itemText = inputItem.value.trim();
    const searchedItems=shoppingList.filter(item => item.includes(itemText));
    displayList(searchedItems);
    inputItem.value = ""; // Clear the input field      
}

refreshButton.addEventListener("click", function () {
  displayList(shoppingList);  
})









