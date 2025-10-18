let product_list = [];
let table = "";

const display_product = () => {
    table = "";
    product_list.forEach((item, index) => {
        table += `
                    <tr>
                        <td style="width: 80%;">${item}</td>
                        <td><button onclick="edit_product(${index})" style="display: flex; justify-content: center; align-items: center;">Edit</button></td>
                        <td><button onclick="delete_product(${index})" style="display: flex; justify-content: center; align-items: center;">Delete</button></td>
                    </tr>
                `;
    });

    document.getElementById("display_product").innerHTML = table;
    document.getElementById("total_product").innerText = `${product_list.length} products`;
};

const add_product = () => {
    let product_items = document.getElementById("add_product").value.trim();
    if (product_items !== "") {
        product_list.push(product_items);
        display_product();
        document.getElementById("add_product").value = "";
    } else {
        alert("Please enter a product name!");
    }
};

const edit_product = (index) => {
    const new_name = prompt("Enter the new name for the product:", product_list[index]);
    if (new_name !== null && new_name.trim() !== "") {
        product_list[index] = new_name.trim();
        display_product();
    }
};

const delete_product = (index) => {
    if (confirm("Are you sure you want to delete this product?")) {
        product_list.splice(index, 1);
        display_product();
    }
};

document.addEventListener("DOMContentLoaded", display_product);
document.getElementById("add_items").addEventListener("click", add_product);