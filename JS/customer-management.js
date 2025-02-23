function addCustomer() {
    let customerName = document.getElementById("name").value;
    let customerEmail = document.getElementById("email").value;
    let customerPhoneNumber = document.getElementById("phone-number").value;

    if (customerName === "" || customerEmail === "" || customerPhoneNumber === "") {
        alert("All fields are required!");
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": customerName,
        "email": customerEmail,
        "phoneNumber": customerPhoneNumber
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
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
        redirect: "follow"
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
       <button class="btn-edit btn btn-primary" onclick="editCustomer(${customer.id})">Edit</button>
    <button class="btn-delete btn btn-danger" onclick="deleteCustomer(${customer.id})">Delete</button>
     </td>`;

                customerTable.appendChild(row);

            });
        })
        .catch((error) => console.error(error));
}

// function editCustomer(index) {
//     const customer = customers[index];

//     document.getElementById("id").value = customer.customerId;
//     document.getElementById("name").value = customer.customerName;
//     document.getElementById("email").value = customer.customerEmail;
//     document.getElementById("phone-number").value = customer.customerPhoneNumber;

//     customers.splice(index, 1);
//     loadCustomersTable();

// }

// function deleteCustomer(index) {
//     customers.splice(index, 1);
//     loadCustomersTable();
//     clearCustomer();
// }

function clearCustomer() {
    let customerName = document.getElementById("name").value = "";
    let customerEmail = document.getElementById("email").value = "";
    let customerPhoneNumber = document.getElementById("phone-number").value = "";
}