const menuTable = document.getElementById("card");

loadAllMenu();

function loadAllMenu() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("http://localhost:8080/item/get-all-items", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            result.forEach(item => {
                menuTable.innerHTML += `<div class="col-md-3 mb-4">
        <div class="card shadow-lg w-100" style="max-width: 300px; height: 400px">
            <img id="itemImage1" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" src="${item.image}" alt="Menu Item">
            <div class="card-body text-center">
                <h5 id="itemName1" class="card-id">${item.code}</h5>
                <h5 id="itemName2" class="card-name">${item.name}</h5>
                <p id="itemPrice1" class="text-primary fw-bold fs-5">LKR ${item.price}</p>
                <button class="btn btn-success add-to-cart" data-id="${item.id}" data-name="${item.name}" data-discount="${item.discount}" data-price="${item.price}" data-image="${item.image}">ADD TO CART</button>
            </div>
        </div>
    </div>`
            });
        })
        .catch((error) => console.error(error));
}

// function loadBurgers() {
//     menuTable.innerHTML = "";
//     menu.burgers.forEach(burger => {
//         menuTable.innerHTML += `<div class="col-md-3 mb-4">
//     <div class="card shadow-lg w-100" style="max-width: 300px; height: 400px">
//         <img id="itemImage1" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" src="${burger.image}" alt="Menu Item">
//         <div class="card-body text-center">
//             <h5 id="itemName1" class="card-id">${burger.id}</h5>
//             <h5 id="itemName2" class="card-name">${burger.name}</h5>
//             <p id="itemPrice1" class="text-primary fw-bold fs-5">LKR ${burger.price}</p>
//             <button class="btn btn-success add-to-cart" data-id="${burger.id}" data-name="${burger.name}" data-discount="${burger.discount}" data-price="${burger.price}" data-image="${burger.image}">ADD TO CART</button>
//         </div>
//     </div>
// </div>`
//     });

// }

// function loadSubmarines() {
//     menuTable.innerHTML = "";
//     menu.submarines.forEach(submarine => {
//         menuTable.innerHTML += `<div class="col-md-3 mb-4">
//     <div class="card shadow-lg w-100" style="max-width: 300px; height: 400px">
//         <img id="itemImage1" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" src="${submarine.image}" alt="Menu Item">
//         <div class="card-body text-center">
//             <h5 id="itemName1" class="card-id">${submarine.id}</h5>
//             <h5 id="itemName2" class="card-name">${submarine.name}</h5>
//             <p id="itemPrice1" class="text-primary fw-bold fs-5">LKR ${submarine.price}</p>
//             <button class="btn btn-success add-to-cart" data-id="${submarine.id}" data-name="${submarine.name}" data-discount="${submarine.discount}" data-price="${submarine.price}" data-image="${submarine.image}">ADD TO CART</button>
//         </div>
//     </div>
// </div>`
//     });

// }

// function loadFries() {
//     menuTable.innerHTML = "";
//     menu.fries.forEach(frie => {
//         menuTable.innerHTML += `<div class="col-md-3 mb-4">
//     <div class="card shadow-lg w-100" style="max-width: 300px; height: 400px">
//         <img id="itemImage1" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" src="${frie.image}" alt="Menu Item">
//         <div class="card-body text-center">
//             <h5 id="itemName1" class="card-id">${frie.id}</h5>
//             <h5 id="itemName2" class="card-name">${frie.name}</h5>
//             <p id="itemPrice1" class="text-primary fw-bold fs-5">LKR ${frie.price}</p>
//             <button class="btn btn-success add-to-cart" data-id="${frie.id}" data-name="${frie.name}" data-discount="${frie.discount}" data-price="${frie.price}" data-image="${frie.image}">ADD TO CART</button>
//         </div>
//     </div>
// </div>`
//     });

// }

// function loadPastas() {
//     menuTable.innerHTML = "";
//     menu.pasta.forEach(pasta => {
//         menuTable.innerHTML += `<div class="col-md-3 mb-4">
//     <div class="card shadow-lg w-100" style="max-width: 300px; height: 400px">
//         <img id="itemImage1" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" src="${pasta.image}" alt="Menu Item">
//         <div class="card-body text-center">
//             <h5 id="itemName1" class="card-id">${pasta.id}</h5>
//             <h5 id="itemName2" class="card-name">${pasta.name}</h5>
//             <p id="itemPrice1" class="text-primary fw-bold fs-5">LKR ${pasta.price}</p>
//             <button class="btn btn-success add-to-cart" data-id="${pasta.id}" data-name="${pasta.name}" data-discount="${pasta.discount}" data-price="${pasta.price}" data-image="${pasta.image}">ADD TO CART</button>
//         </div>
//     </div>
// </div>`
//     });

// }

// function loadChickens() {
//     menuTable.innerHTML = "";
//     menu.chicken.forEach(chicken => {
//         menuTable.innerHTML += `<div class="col-md-3 mb-4">
//     <div class="card shadow-lg w-100" style="max-width: 300px; height: 400px">
//         <img id="itemImage1" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" src="${chicken.image}" alt="Menu Item">
//         <div class="card-body text-center">
//             <h5 id="itemName1" class="card-id">${chicken.id}</h5>
//             <h5 id="itemName2" class="card-name">${chicken.name}</h5>
//             <p id="itemPrice1" class="text-primary fw-bold fs-5">LKR ${chicken.price}</p>
//             <button class="btn btn-success add-to-cart" data-id="${chicken.id}" data-name="${chicken.name}" data-discount="${chicken.discount}" data-price="${chicken.price}" data-image="${chicken.image}">ADD TO CART</button>
//         </div>
//     </div>
// </div>`
//     });

// }

// function loadBeverages() {
//     menuTable.innerHTML = "";
//     menu.beverages.forEach(beverage => {
//         menuTable.innerHTML += `<div class="col-md-3 mb-4">
//     <div class="card shadow-lg w-100" style="max-width: 300px; height: 400px">
//         <img id="itemImage1" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;" src="${beverage.image}" alt="Menu Item">
//         <div class="card-body text-center">
//             <h5 id="itemName1" class="card-id">${beverage.id}</h5>
//             <h5 id="itemName2" class="card-name">${beverage.name}</h5>
//             <p id="itemPrice1" class="text-primary fw-bold fs-5">LKR ${beverage.price}</p>
//             <button class="btn btn-success add-to-cart" data-id="${beverage.id}" data-name="${beverage.name}" data-discount="${beverage.discount}" data-price="${beverage.price}" data-image="${beverage.image}">ADD TO CART</button>
//         </div>
//     </div>
// </div>`
//     });

// }

// document.addEventListener("click", function (event) {
//     if (event.target.classList.contains("add-to-cart")) {
//         const item = {
//             id: event.target.getAttribute("data-id"),
//             name: event.target.getAttribute("data-name"),
//             price: event.target.getAttribute("data-price"),
//             quantity: 1
//         };
//         addToCart(item);
//     }

// });

// function addToCart(item) {
//     let existingItem = cart.find(cartItem => cartItem.id === item.id);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push(item);
//     }
//     updateCartUI();

// }

// function updateCartUI() {
//     const cartTable = document.getElementById("table-cart-body");
//     cartTable.innerHTML = "";

//     cart.forEach((item, index) => {
//         cartTable.innerHTML += `<tr> 
//         <td>${item.id}</td>
//               <td>${item.name}</td>
//               <td>${item.quantity}</td>
//                <td>${item.price}</td>
//               <td>
//               <button class="btn-delete" onclick="remove(${index})">Delete</button>
//             </td> 
//             </tr>`;
//     });
//     netTotal();

// }

// function remove(index) {
//     cart.splice(index, 1);
//     updateCartUI();
// }

// function netTotal() {
//     const textNetTotal = document.getElementById("total");
//     let total = 0;
// cart.forEach(item => {
//     total += item.quantity * item.price;
// });

//     textNetTotal.innerHTML = `<h1 id="net-total">Net Total : LKR ${total.toFixed(2)}</h1>`;

// }

// document.getElementById('download-pdf').addEventListener('click', function() {
//     const { jsPDF } = window.jspdf; 
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.setFont('helvetica', 'bold');
//     doc.text('MOS Burgers', doc.internal.pageSize.width / 2, 15, null, null, 'center');

//     doc.setFontSize(14);
//     doc.setFont('helvetica', 'normal');
//     doc.text('Cart Details', doc.internal.pageSize.width / 2, 25, null, null, 'center');

//     doc.setFontSize(12);
//     doc.setFont('helvetica', 'normal');
//     doc.text('ID', 10, 40);
//     doc.text('Name', 40, 40);
//     doc.text('Quantity', 130, 40);
//     doc.text('Price', 180, 40);

//     let yPosition = 50;

//     cart.forEach(item => {
//         doc.text(item.id, 10, yPosition);
//         doc.text(item.name, 40, yPosition);
//         doc.text(item.quantity.toString(), 130, yPosition);
//         doc.text(`LKR ${item.price}`, 180, yPosition);
//         yPosition += 10;
//     });

//     const total = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
//     doc.setFontSize(14);
//     doc.setFont('helvetica', 'bold');
//     doc.text(`Net Total: LKR ${total.toFixed(2)}`, doc.internal.pageSize.width / 2, yPosition + 10, null, null, 'center'); // Centered total

//     doc.save('cart_details.pdf');
    
// });
