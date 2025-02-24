function addCustomer() {
  let customerName = document.getElementById("name").value;
  let customerEmail = document.getElementById("email").value;
  let customerPhoneNumber = document.getElementById("phone-number").value;

  if (
    customerName === "" ||
    customerEmail === "" ||
    customerPhoneNumber === ""
  ) {
    alert("All fields are required!");
    return;
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: customerName,
    email: customerEmail,
    phoneNumber: customerPhoneNumber,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/add-customer", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  clearCustomer();
}

loadCustomersTable();

function loadCustomersTable() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/get-all-customers", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const customerTable = document.getElementById("table-body");
      customerTable.innerHTML = "";

      result.forEach((customer) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <th scope="row">${customer.id}</th>
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.phoneNumber}</td>
      <td>
       <button class="btn-edit btn btn-primary" onclick="editCustomer('${customer.id}', '${customer.name}', '${customer.email}', '${customer.phoneNumber}')">Edit</button>
    <button class="btn-delete btn btn-danger" onclick="deleteCustomer('${customer.id}', '${customer.name}', '${customer.email}', '${customer.phoneNumber}')">Delete</button>
     </td>`;

        customerTable.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}

let currentCustomerId = null;

function editCustomer(id, name, email, phoneNumber) {
  currentCustomerId = id;

  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone-number").value = phoneNumber;

  document.getElementById("add-button").innerHTML = "Update";
  document
    .getElementById("add-button")
    .setAttribute("onclick", "updateCustomer()");
}

function updateCustomer() {
  let customerName = document.getElementById("name").value;
  let customerEmail = document.getElementById("email").value;
  let customerPhoneNumber = document.getElementById("phone-number").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    id: currentCustomerId,
    name: customerName,
    email: customerEmail,
    phoneNumber: customerPhoneNumber,
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/update-customer", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      clearCustomer();
      loadCustomersTable();
    })
    .catch((error) => console.error(error));
}

function deleteCustomer(id, name, email, phoneNumber) {
  currentCustomerId = id;

  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone-number").value = phoneNumber;

  document.getElementById("add-button").innerHTML = "Delete";
  document.getElementById("add-button").setAttribute("onclick", "deleteCustomerById()");
}

function deleteCustomerById() {
  const requestOptions = {
    method: "DELETE",
    redirect: "follow"
  };
  
  fetch(`http://localhost:8080/customer/delete-customer/${currentCustomerId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      clearCustomer();
      loadCustomersTable();
    })
    .catch((error) => console.error(error));
}

function clearCustomer() {
  let customerName = (document.getElementById("name").value = "");
  let customerEmail = (document.getElementById("email").value = "");
  let customerPhoneNumber = (document.getElementById("phone-number").value = "");
}
