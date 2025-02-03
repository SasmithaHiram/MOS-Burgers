let burgers = [];

function addBurger() {
    let itemCode = document.getElementById("code").value;
    let itemName = document.getElementById("name").value;
    let itemPrice = document.getElementById("price").value;
    let itemDescription = document.getElementById("description").value;

    if (itemCode === "" || itemName === "" || itemPrice === "" || itemDescription === "") {
        alert("All fields are required!");
    }

    burgers.push({ itemCode, itemName, itemPrice, itemDescription });
    loadItemTable();

}

function loadItemTable() {
    const burgerItemList = document.getElementById("table-body");
    burgerItemList.innerHTML = "";

    burgers.forEach((burger, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `<th scope="row">${burger.itemCode}</th>
      <td>${burger.itemName}</td>
      <td>${burger.itemPrice}</td>
      <td>${burger.itemDescription}</td>
      <td>
      <button class="btn-edit" onclick="editBurger(${index})">Edit</button>
      <button class="btn-delete" onclick="deleteBurger(${index})">Delete</button>
    </td>`;

        burgerItemList.appendChild(row);
    });

}

function editBurger(index) {
    const burger = burgers[index];
    
    document.getElementById("code").value = burger.itemCode;
    document.getElementById("name").value = burger.itemName;
    document.getElementById("price").value = burger.itemPrice;
    document.getElementById("description").value = burger.itemDescription;

    burgers.splice(index, 1);
    loadItemTable();

}

function deleteBurger(index) {
    burgers.splice(index, 1);
    loadItemTable();

}
