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
   
    // loadCustomersTable();
     clearCustomer();
}

// function loadCustomersTable(data) {
//     const customerTable = document.getElementById("table-body");
//     customerTable.innerHTML = "";

//     customers.forEach((customer, index) => {
//         const row = document.createElement("tr");

//         row.innerHTML = `
//         <th scope="row">${customer.customerId}</th>
//       <td>${customer.customerName}</td>
//       <td>${customer.customerEmail}</td>
//       <td>${customer.customerPhoneNumber}</td>
//       <td>
//       <button class="btn-edit btn btn-primary" onclick="editCustomer(${index})">Edit</button>
//       <button class="btn-delete btn btn-danger" onclick="deleteCustomer(${index})">Delete</button>
//     </td>`;

//         customerTable.appendChild(row);
//     });

// }

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