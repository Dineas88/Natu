// Global cart array
let cart = [];

// Function to show product details in modal
function buyNow(productName, description, price) {
    document.getElementById("modal-product-name").textContent = productName;
    document.getElementById("modal-product-description").textContent = description;
    document.getElementById("modal-product-price").textContent = price;
    document.getElementById("product-modal").style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

// Function to add product to cart
function addToCart() {
    const size = document.getElementById("size").value;
    const product = {
        name: document.getElementById("modal-product-name").textContent,
        price: document.getElementById("modal-product-price").textContent,
        size: size,
    };
    cart.push(product);
    alert(`${product.name} (Size: ${product.size}) added to cart!`);
    updateCart();
    closeModal();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Size: ${item.size} - Price: ${item.price}`;
        cartItems.appendChild(li);

        total += parseFloat(item.price.replace("RM ", ""));
    });

    totalPrice.textContent = `Total: RM ${total.toFixed(2)}`;
}

// Function to checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let summary = "Order Summary:\n";
    let total = 0;

    cart.forEach((item, index) => {
        summary += `${index + 1}. ${item.name} - Size: ${item.size} - Price: ${item.price}\n`;
        total += parseFloat(item.price.replace("RM ", ""));
    });

    summary += `\nTotal: RM ${total.toFixed(2)}`;
    alert(summary);

    const paymentMethod = prompt("Choose a payment method:\n1. PayPal\n2. Card");
    if (paymentMethod === "1") {
        alert("Redirecting to PayPal...");
        window.location.href = "https://paypal.me/natu888";
    } else if (paymentMethod === "2") {
        alert("Redirecting to Card Payment...");
        window.location.href = "card-payment.html";
    } else {
        alert("Invalid payment method selected.");
    }

    cart = [];
    updateCart();
}

