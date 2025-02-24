
loadItemTable();
clearItem();

function addBurger() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  // let discount = document.getElementById("discount").value;
  let itemImage = document.getElementById("image").files[0];
  let image = itemImage ? URL.createObjectURL(itemImage) : "";
  let category = document.getElementById("select").value;

  if (name === "" || price === "" || image === "") {
    alert("All fields are required!");
    return;
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: name,
    price: price,
    image: image,
    category: category,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/item/add-item", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  loadItemTable();
  clearItem();
}

function loadItemTable() {
  const burgerItemList = document.getElementById("table-body");
  burgerItemList.innerHTML = "";

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:8080/item/get-all-items", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      result.forEach((item) => {
        const row = document.createElement("tr");

        row.innerHTML = `<th scope="row">${item.code}</th>
                <td>${item.name}</td>
                <td>${item.price}</td>
                 <td><img src="${item.image}" alt="image" height="100" width="100"></td>
                <td>
                 <button class="btn-edit btn btn-primary" onclick="editItems('${item.code}', '${item.name}', '${item.price}', '${item.image}')">Edit</button>
                 <button class="btn-delete btn btn-danger" onclick="deleteItems('${item.code}')">Delete</button>
              </td>`;
        burgerItemList.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}

function editItems(category, index) {
  const item = menu[category][index];

  document.getElementById("code").value = item.id;
  document.getElementById("name").value = item.name;
  document.getElementById("price").value = item.price;
  document.getElementById("image").value = "";

  menu[category].splice(index, 1);
  loadItemTable();
}

// function deleteItems(category, index) {
//   menu[category].splice(index, 1);
//   loadItemTable();
//   clearItem();
// }

function clearItem() {
  let name = (document.getElementById("name").value = "");
  let price = (document.getElementById("price").value = "");
  // let discount = document.getElementById("discount").value;
  let itemImage = document.getElementById("image").files[0];
  let image = itemImage ? URL.createObjectURL(itemImage) : "";
}
